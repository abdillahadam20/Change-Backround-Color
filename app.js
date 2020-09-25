// Using color hex
const button = document.getElementById('button');

button.addEventListener('click', () => {
    const color = Math.round(Math.random() * 16777216).toString(16);
    document.body.style.backgroundColor = '#'+color;
})

// Create New Button using Javascript
const newBtnColor = document.createElement('button');
const textBtn = document.createTextNode('Click Here!');
newBtnColor.setAttribute('type', 'button');
newBtnColor.appendChild(textBtn); 
button.after(newBtnColor);

newBtnColor.addEventListener('click', () => {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})

// Using Input type Range
const inputBg = document.querySelector('input[type=range]');
console.log(inputBg);

