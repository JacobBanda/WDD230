lastUpdated();

function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburguerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburguerBtn');

x.onclick = toggleMenu;

function lastUpdated() {

    let lastModified = document.lastModified;
    document.getElementById("lastmodified").textContent = `Last Modified: ${lastModified}`;
}
