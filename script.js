const creditsDiv = document.getElementById('credits');
creditsDiv.addEventListener('click', () => {
    document.body.classList.add('stop-scrolling');

    const modalDiv = document.querySelector('.modal');
    modalDiv.classList.add('show');
});

const closeModalDiv = document.getElementById('close-modal');
closeModalDiv.addEventListener('click', () => {
    const modalDiv = document.querySelector('.modal');
    modalDiv.classList.remove('show');
    document.body.classList.remove('stop-scrolling');
});