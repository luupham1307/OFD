var swiper = new Swiper(".best-clothes-swiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
        nextEl: ".arrow-next",
        prevEl: ".arrow-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});