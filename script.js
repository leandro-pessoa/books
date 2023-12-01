const swiper = new Swiper('.swiper', {
    // Optional parameters
        loop: true,
        spaceBetween: 20,
        slidesPerView: 3,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });