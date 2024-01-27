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


const allImages = document.querySelectorAll("img[data-src]")

const lazyLoad = (img) => {
    img.setAttribute("src", img.getAttribute("data-src"))
    img.onload = () => {
        img.removeAttribute("data-src")
        img.className = "in"
    };
};


const options = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
}

if ('IntersectionObserver' in window) {
    const obsrvr = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                lazyLoad(item.target)
                observer.unobserve(item.target)
            }
        })
    }, options)
    allImages.forEach((img) => {
        obsrvr.observe(img)
    })
}
else {
    allImages.forEach((img) => {
        lazyLoad(img)
    })
}

document.addEventListener('DOMContentLoaded', function() {
    if (typeof(Storage) !== "undefined") {
      if (!localStorage.lastVisit) {
        localStorage.lastVisit = Date.now();
        displayMessage("Welcome! Let us know if you have any questions.");
      } else {
        var lastVisitTime = parseInt(localStorage.lastVisit);
        var currentTime = Date.now();
        var timeDifference = currentTime - lastVisitTime;
        var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        if (daysDifference < 1) {
          displayMessage("Back so soon! Awesome!");
        } else {
          var daysText = (daysDifference === 1) ? "day" : "days";
          displayMessage("You last visited " + daysDifference + " " + daysText + " ago.");
        }
        localStorage.lastVisit = currentTime;
      }
    } else {
      displayMessage("Sorry, localStorage is not supported in your browser.");
    }

    function displayMessage(message) {
      document.getElementById('message').innerText = message;
    }
});