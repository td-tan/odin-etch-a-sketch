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

squares.forEach((square) => {
    square.addEventListener('mouseover', function(e) {
        e.target.classList.add('black');
    });

    square.addEventListener('mouseout', function(e) {
        if (!painting) {
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