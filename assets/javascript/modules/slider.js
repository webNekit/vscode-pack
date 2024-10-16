function Slider() {
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '[data-slide-next]',
            prevEl: '[data-slide-prev]',
          },
      });
}

export default Slider;