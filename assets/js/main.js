
// bestseller
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// collection
function changeTab(tabIndex) {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    tabs[tabIndex].classList.add('active');
    tabContents[tabIndex].classList.add('active');
}

// slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// bestseller
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
// network
var swiper = new Swiper(".network-img", {
    slidesPerView: 5,
    spaceBetween: 30,
    // centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: false,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },

});

// nav-items
const navItems = document.querySelectorAll('.nav-items a');

navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        navItems.forEach(otherItem => {
            otherItem.style.opacity = '0.6';
            otherItem.style.fontWeight = 'Medium ';
        });
        item.style.opacity = '1';
        item.style.fontWeight = 'Semi Bold';
    });

    item.addEventListener('mouseleave', () => {
        navItems.forEach(otherItem => {
            otherItem.style.opacity = '1';
            otherItem.style.fontWeight = 'Medium ';
        });
    });
});
document.getElementById()