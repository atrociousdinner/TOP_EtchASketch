const grid = document.querySelector('.grid');
const colors = document.querySelectorAll('.color');
const picker = document.getElementById('color-picker') 
let size = 16;
let currentColor = 'gold';
let isDrawing = false; // Track mouse state
const mode_buttons = document.querySelectorAll('.btn')
let currentMode;

const modes ={
    DRAG: 1,
    HOVER: 2
}

const createGrid = (size, mode = modes.DRAG) => {
    grid.innerHTML = '';
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        // Color on mousedown (single click)

        if(mode == modes.DRAG){
            square.addEventListener('mousedown', () => {
                renderColor(square, currentColor);
                isDrawing = true;
            });
        
    
            // Color on mouseover if mouse is down (drag to draw)
            square.addEventListener('mouseover', () => {
                if (isDrawing) {
                    renderColor(square, currentColor);
                }
            });
            currentMode = modes.DRAG
        }

        else if (mode == modes.HOVER){
            square.addEventListener('mouseover', () => {
                renderColor(square, currentColor);
            });

            currentMode = modes.HOVER
        }

        grid.appendChild(square);
    }
    return currentMode
};



// Listen for mouseup anywhere on the page to stop drawing
document.addEventListener('mouseup', () => {
    isDrawing = false;
});

const renderColor = (element, color) => {
    element.style.backgroundColor = color;
};

const chooseColor = () => {
    colors.forEach(color => {
        if(color.classList.contains("picker")){
            picker.addEventListener('change', (event) => {
                createGrid(size)
                currentColor = event.target.value
            })
        }
        else{
            color.addEventListener('click', () => {
                createGrid(size);
                currentColor = color.textContent.trim();
            });
        }
        
    });
};

const chooseModes = () => {
    mode_buttons.forEach(mode => {
        console.log(mode)
        mode.addEventListener('click', () => {
            if(mode.classList.contains('reset')){
                createGrid(size, currentMode)
            }
            else if(mode.classList.contains('drag')){
                createGrid(size, modes.DRAG)
            }
            else if(mode.classList.contains('hover')){
                createGrid(size, modes.HOVER)
            }
        })
    });
}
createGrid(size);
chooseColor();
chooseModes();
