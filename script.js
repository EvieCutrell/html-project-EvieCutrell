window.onload = () => {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });
};