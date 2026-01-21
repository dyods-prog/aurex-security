
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const headerGlass = document.querySelector(".header-glass");

  if (!navToggle || !headerGlass) return;

  function updateHeaderHeight() {
    document.documentElement.style.setProperty(
      "--header-h",
      `${headerGlass.offsetHeight}px`
    );
  }

  navToggle.addEventListener("click", () => {
    headerGlass.classList.toggle("open");
    setTimeout(updateHeaderHeight, 400);
  });

  document.querySelectorAll(".nav-dropdown a").forEach(link => {
    link.addEventListener("click", () => {
      headerGlass.classList.remove("open");
      updateHeaderHeight();
    });
  });

  window.addEventListener("load", updateHeaderHeight);
  window.addEventListener("resize", updateHeaderHeight);
});

const phoneSlider = new Swiper('.phone-slider', {
    centeredSlides: true,
    slideToClickedSlide: true,
    spaceBetween: 24,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1.2,
            loop: false,       
            allowTouchMove: true,
            initialSlide: 1,   
        },
        768: {
            slidesPerView: 3,
            loop: false,
            allowTouchMove: false,
            initialSlide: 1,   
            spaceBetween: 32,
        }
    }
});

$(".comques-el-head").on("click", function () {
    const currentItem = $(this).parent();

    if (currentItem.hasClass("active")) {
        currentItem.removeClass("active");
        currentItem.find(".comques-el-body").slideUp();
        return;
    }

    $(".comques-el").removeClass("active");
    $(".comques-el-body").slideUp();

    currentItem.addClass("active");
    currentItem.find(".comques-el-body").slideDown();
});

$(".form").on("submit", function () {
    const form = this;
    setTimeout(() => {
        form.reset();
    }, 100);
});