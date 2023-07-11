


//scrool section
window.onscroll = () => {
    //sticky header
    Let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}