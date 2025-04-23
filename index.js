const grid = document.querySelector('.grid');
const colors = document.querySelectorAll('.color');
const picker = document.getElementById('color-picker') 
let size = 16;
let currentColor = 'gold';
let isDrawing = false; // Track mouse state

const createGrid = (size) => {
    grid.innerHTML = '';
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        // Color on mousedown (single click)
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

        grid.appendChild(square);
    }
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

createGrid(size);
chooseColor();
