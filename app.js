window.onload = () => {
    console.log('This is your first program executing!');
}

const para = document.querySelector('.dancerStyle');
para.addEventListener('click', updateName);

function updateName() {
    let name = prompt('Please enter a new name');
    para.textContent = 'Dancer 1: ' + name;
} 