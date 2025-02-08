function scrollToNextSection() {
    const nextSection = document.querySelector('#experience');
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
}
