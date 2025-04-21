const grid = document.querySelector('.grid')
const size = 16
let currentColor = 'yellow'

function createGrid(size) {
    grid.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div')
        square.classList.add('square')

        square.addEventListener('mouseover', () => {
            renderColor(square, currentColor);
        })

        grid.appendChild(square)
    }
}


function renderColor(element, color = 'yellow') {
    element.style.backgroundColor = color.toLowerCase();
}


function chooseColor() {
    const colors = document.querySelectorAll('.color')
    colors.forEach(color => {
        color.addEventListener('click', () => {
            console.log(color.textContent.toUpperCase() + ' was picked.');
            currentColor = color.textContent.toLowerCase().trim()
            createGrid(size)
        })
    });
}



createGrid(size)
chooseColor()

