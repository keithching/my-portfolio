// credit and modal event listeners and DOM manipulations
// const creditsDiv = document.getElementById('credits');
// creditsDiv.addEventListener('click', () => {
//     document.body.classList.add('stop-scrolling');

//     const modalDiv = document.querySelector('.modal');
//     modalDiv.classList.add('show');
// });

// const closeModalDiv = document.getElementById('close-modal');
// closeModalDiv.addEventListener('click', () => {
//     const modalDiv = document.querySelector('.modal');
//     modalDiv.classList.remove('show');
//     document.body.classList.remove('stop-scrolling');
// });

// nav event listeners and DOM manipulations
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 100) { // get into the section this amount of pixels beforehand (a personal touch)
            current = 'contact';
        }
        else if (scrollY >= sectionTop - 30) { // get into the section this amount of pixels beforehand (a personal touch)
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add('active');
        }
    });
});

// back to top button event listener
const backToTopBtn = document.getElementById('back-to-top-button');

function handleScroll() {
    const skillsDiv = document.getElementById('skills');
    const footerDiv = document.querySelector('.footer');
    if (scrollY >= skillsDiv.offsetTop / 4) { // personal touch
        backToTopBtn.style.display = 'block';
    } else backToTopBtn.style.display = 'none';
}

window.addEventListener('scroll', handleScroll);