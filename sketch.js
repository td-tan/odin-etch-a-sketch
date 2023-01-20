const sketchpad = document.querySelector('.sketchpad');

for (let i = 0; i < 16; i++) {
    const outer_div = document.createElement('div');
    for(let j = 0; j < 16; j++) {
        const inner_div = document.createElement('div');
        outer_div.appendChild(inner_div);
    }
    sketchpad.appendChild(outer_div);
}