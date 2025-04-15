document.addEventListener("DOMContentLoaded", function () {
    const img2 = document.querySelector(".img-carousel-2");

    function switchImage() {
        if (window.innerWidth < 752) {
            img2.src = "assets/static/images/index/hero/hero-carousel-mobile-2.webp";
        }
        else {
            img2.src = "assets/static/images/index/hero/hero-carousel-2.webp";
        }
        
    }

    switchImage();

    window.addEventListener("resize", switchImage);
})