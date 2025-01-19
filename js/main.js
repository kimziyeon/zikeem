// console.log('aaaaaaaZiKEEM')
let swiper;

function initSwiper() {
    let ww = window.innerWidth;

    if (swiper) {
        swiper.destroy(true, true);
    }


    swiper = new Swiper(".mySwiper", {
        slidesPerView: ww > 1024 ? 3.5 : ww > 640 ? 2.5 : 1.5,
        spaceBetween: 20,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

initSwiper();
window.addEventListener("resize", initSwiper);