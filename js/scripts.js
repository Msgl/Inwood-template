
const burgerButton = document.getElementById('burger');
const menu = document.getElementById('mobile-menu');

burgerButton.addEventListener('click', () => {
    menu.classList.toggle('open');
})

const buttonAttributions = document.getElementById('attributions');
const attributionsWrapper = document.getElementById('attributions-wrapper');

buttonAttributions.addEventListener('click', () => {
    attributionsWrapper.classList.toggle('attributionOpen');
})

const swiper = new Swiper('.swiper-main', {
    loop: false,
    slidesPerView: 4,
    spaceBetween: 15,
    // freeMode: true,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        980: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 30
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        clickable: true,
    },
    // Enable debugger
    debugger: true,
});

const swiperTestimonials = new Swiper('.swiper-testimonials', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        clickable: true,
    },
    // Enable debugger
    debugger: true,
});