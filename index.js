function scrollToExperience() {
    const nextSection = document.querySelector('#experience');
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToProjects() {
    const nextSection = document.querySelector('#projects');
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
}
