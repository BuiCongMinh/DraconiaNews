import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper('.mySwiper', {
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrowss
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true
    },

    speed: 1000,

});


// Change tabs 
const doom = document.querySelector.bind(document);
const doomdoom = document.querySelectorAll.bind(document);

const tabItems = doomdoom('.tab-item')
const contents = doomdoom('.content')

const tabActive = doom('.tab-item.active')
const line = doom('.tabs .line')

line.style.width = tabActive.offsetWidth + "px"
line.style.left = tabActive.offsetLeft + "px"

tabItems.forEach((tab, index) => {
    const content = contents[index]
    tab.onclick = function () {
        doom('.tab-item.active').classList.remove('active')
        doom('.content.active').classList.remove('active')

        line.style.width = this.offsetWidth + "px"
        line.style.left = this.offsetLeft + "px"

        this.classList.add('active')
        content.classList.add('active')
    }
});



