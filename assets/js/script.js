// GLOBAL VARIABLES
const aboutBTN = document.getElementById('about-btn');
const projectsBTN = document.getElementById('projects-btn');
const contactBTN = document.getElementById('contact-btn');
const githubBTN = document.getElementById('github-btn');

aboutBTN.addEventListener('click', (event) => {
    event.preventDefault();

    const goToAbout = 'h2-about';
    window.location.href = `#${goToAbout}`;
});

projectsBTN.addEventListener('click', (event) => {
    event.preventDefault();

    const goToProjects = 'h2-projects';
    window.location.href = `#${goToProjects}`;
});

contactBTN.addEventListener('click', (event) => {
    event.preventDefault();

    const goToContact = 'h2-contact';
    window.location.href = `#${goToContact}`;
});

githubBTN.addEventListener('click', (event) => {
    event.preventDefault();

    const goToGithub = 'https://github.com/samanthashleyrose';
    window.location.href = `${goToGithub}`;
});