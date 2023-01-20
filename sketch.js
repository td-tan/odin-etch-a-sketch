const sketchpad = document.querySelector('.sketchpad');

for (let i = 0; i < 16; i++) {
    const outer_div = document.createElement('div');
    for(let j = 0; j < 16; j++) {
        const inner_div = document.createElement('div');
        inner_div.classList.add('square');
        outer_div.appendChild(inner_div);
    }
    sketchpad.appendChild(outer_div);
}

const squares = document.querySelectorAll('.square');

let painting = false;

let current_square = null;

squares.forEach((square) => {
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

    square.addEventListener('mousedown', function(e) {
        painting = true;
    });

    square.addEventListener('mouseup', function(e) {
        painting = false;
    });
});