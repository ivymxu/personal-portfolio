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

function showExperience(experienceId) {
    const tabs = document.querySelectorAll('.experience-tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    const activeTab = document.getElementById(experienceId);
    if (activeTab) {
        activeTab.classList.add('active');
    }

    const buttons = document.querySelectorAll('.timeline-item');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    const activeButton = document.querySelector(`[onclick="showExperience('${experienceId}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Initially show the first experience
document.addEventListener('DOMContentLoaded', () => {
    showExperience('experience-1');
});