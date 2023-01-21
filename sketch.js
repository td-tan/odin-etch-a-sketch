
function createSketchpad(n, m) {
    const sketchpad = document.querySelector('.sketchpad');

    for (let i = 0; i < n; i++) {
        const outer_div = document.createElement('div');
        for(let j = 0; j < m; j++) {
            const inner_div = document.createElement('div');
            inner_div.classList.add('square');
            inner_div.style.width = `${400/n}px`;
            inner_div.style.height = `${400/m}px`;
            outer_div.appendChild(inner_div);
        }
        sketchpad.appendChild(outer_div);
    }
}

function hover(square) {
    square.addEventListener('mouseover', function(e) {
        if (!e.target.classList.contains('black')) {
            e.target.classList.add('black');
            current_square = e.target;
        }
    });

    square.addEventListener('mouseout', function(e) {
        if (!painting && current_square === e.target) {
            e.target.classList.remove('black');
        }
    });
}

function paint(square) {
    square.addEventListener('mousedown', function(e) {
        painting = true;
    });

    square.addEventListener('mouseup', function(e) {
        painting = false;
    });
}

function bindEvents() {
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        hover(square);

        paint(square)
    });
}

const createBtn = document.querySelector('button#create');
const clearBtn = document.querySelector('button#clear');

createBtn.addEventListener('click', (e) => {
    const sketchpad = document.querySelector('.sketchpad');
    sketchpad.textContent = '';
    const parentNode = e.target.parentNode;
    const n = parentNode.querySelector('input#n').value;
    const m = parentNode.querySelector('input#m').value;

    if (n > 100 || m > 100) {
        return;
    }

    createSketchpad(n, m);

    bindEvents();
});

clearBtn.addEventListener('click', () => {
    const sketchpad = document.querySelectorAll('.square');
    sketchpad.forEach((square) => {
        if (square.classList.contains('black')) {
            square.classList.remove('black');
        }
    });
});

let painting = false;

let current_square = null;

