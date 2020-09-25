const button = document.getElementById('button');

button.addEventListener('click', () => {
    const color = Math.round(Math.random() * 16777216).toString(16);
    document.body.style.backgroundColor = '#'+color;
})
 
