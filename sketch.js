
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

let i = 1;

function hover(square) {
    square.addEventListener('mouseover', function(e) {
        if(rainbowEnabled) {
            if (i > colors.length) {
                i = 1;
            }
            paintClr = colors[i++];
        }
        if (painting) {
            e.target.className = 'square';
            e.target.classList.add(paintClr);
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

function activeBtn(target) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        if (button.classList.contains('active')) {
            button.classList.remove('active');
        }
    });
    target.classList.add('active');
}

const createBtn = document.querySelector('button#create');
const clearBtn = document.querySelector('button#clear');
const rainbowBtn = document.querySelector('button#rainbow');
const colorBtn = document.querySelector('button#color');
const slider = document.querySelector('.slider');

createBtn.addEventListener('click', (e) => {
    const sketchpad = document.querySelector('.sketchpad');
    sketchpad.textContent = '';

    createSketchpad(dimension, dimension);

    bindEvents();

});

clearBtn.addEventListener('click', (e) => {
    const sketchpad = document.querySelectorAll('.square');
    sketchpad.forEach((square) => {
        if (square.classList.length > 1) {
            square.className = 'square';
        }
    });

});

rainbowBtn.addEventListener('click', (e) => {
    rainbowEnabled = true;

    activeBtn(e.target);
});

colorBtn.addEventListener('click', (e) => {
    rainbowEnabled = false;
    const colorChoice = e.target.querySelector('#colorChoice');
    if (i > colors.length-1) {
        i = 0;
    }
    colorChoice.className = colors[i++];
    paintClr = colorChoice.className;

    activeBtn(e.target);
});

slider.addEventListener('input', (e) => {
    dimension = e.target.value;
    const dimension_value = document.querySelector('#dimension-value');
    dimension_value.textContent = `${dimension} x ${dimension}`;
})

let dimension = 50;

let painting = false;

let paintClr = 'black';

let rainbowEnabled = false;

let current_square = null;

const colors = ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
