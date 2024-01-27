const burgerButton = document.querySelector('#hamburguerBtn')
var menu = document.querySelector('#primaryNav')

burgerButton.addEventListener('click', () => {
    if (burgerButton.textContent.includes ("☰") && window.innerWidth < 1000) {
        menu.style.display = 'grid';
        burgerButton.textContent = "❌";
    } else {
        burgerButton.textContent = '☰';
        menu.style.display = 'none';
    }
})