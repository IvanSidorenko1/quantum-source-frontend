jQuery(document).ready(function () {
  // плавний скрол при натисканні на якорну кнопку
  jQuery(".header, .pagination").on("click", "a", function (event) {
    event.preventDefault();
    var id = jQuery(this).attr("href"),
      top = jQuery(id).offset().top;
    jQuery("body,html").animate({ scrollTop: top - 0 }, 800);
  });
  //////////////////////////popup////////////////////////
  //popup -text
  jQuery(".popup-content").magnificPopup({
    type: "inline",
    removalDelay: 10,
    mainClass: "mfp-zoom-in",
    closeBtnInside: true,
    callbacks: {
      open: function () {
        jQuery("html").css("margin-right", 0);
        jQuery("body").addClass("noscroll");
      },
      close: function () {
        jQuery("body").removeClass("noscroll");
      },
    },
  });

  jQuery(".popup-close-btn").click(function (e) {
    e.preventDefault();
    jQuery.magnificPopup.close();
  });

  //////////////////////////відкриттія при клікє на more-btn///////////////////////
  jQuery(".team__content-more-btn").click(function () {
    jQuery(".team__content-item").addClass("_js-opacity");
    jQuery(".team__content-item")
      .not(jQuery(this).parents(".team__content-item"))
      .removeClass("_js-open-more");

    jQuery(this).parents(".team__content-item").toggleClass("_js-open-more");

    if (jQuery(this).parents(".team__content-item").hasClass("_js-open-more")) {
      jQuery(this).parents(".team__content-item").removeClass("_js-opacity");
    }
    if (!jQuery(".team__content-item").hasClass("_js-open-more")) {
      jQuery(".team__content-item").removeClass("_js-opacity");
    }
  });
});
//

////////////////////Анимація елементів в середені .anim_conteiner /////////////////////////////////////////////////////////////////////////////
jQuery(document).on("scroll", function () {
  jQuery(".anim_conteiner").each(function () {
    var wt = jQuery(window).scrollTop();
    var et = jQuery(this).offset().top;
    var eh = jQuery(this).outerHeight();
    var wh = jQuery(window).height();
    //  console.log(wt,wh, et,eh)

    if (et + eh + eh / 8 + 200 > wt + wh && wt + wh > et) {
      jQuery(this).addClass("_js-start");
    } else {
      jQuery(this).removeClass("_js-start");
    }
    if (et + eh + eh / 8 + 200 < wt + wh) {
      jQuery(this).addClass("_js-stop");
    } else {
      jQuery(this).removeClass("_js-stop");
    }
  });
});

// анімаці при скролі // ._anim-items///

const animItems = document.querySelectorAll("._anim-items");
if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 100;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_js_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_js_active");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 200);
}

////////////////////////////////////

window.addEventListener("scroll", function setBackground() {
  var baner = document.getElementById("baner");
  var header = document.getElementById("header");
  var widthPage = jQuery(document).width();

  if (widthPage >= 801) {
    if (window.scrollY >= window.innerHeight) {
      baner.classList.add("_js_scroll");
      header.classList.add("_js_scroll");
    } else {
      baner.classList.remove("_js_scroll");
      header.classList.remove("_js_scroll");
    }
  }
  if (widthPage <= 800) {
    if (window.scrollY >= window.innerHeight / 3) {
      baner.classList.add("_js_scroll");
      header.classList.add("_js_scroll");
    } else {
      baner.classList.remove("_js_scroll");
      header.classList.remove("_js_scroll");
    }
  }
});

///////////////////////////
////////////
/////////////////////////
/////////////////////

//Active Menu When Scroll-----------------------------------
window.addEventListener("scroll", function setBackground() {
  var itemColor = document.querySelectorAll(".header__menu-link");
  let pagItem = document.querySelectorAll(".pagination__link");
  var baner = jQuery("#baner").offset().top - 150;
  var about = jQuery("#about").offset().top - 150;
  var team = jQuery("#team").offset().top - 150;
  var footer = jQuery("#footer").offset().top - 150;
  if (window.scrollY >= 0 && window.scrollY < baner) {
    itemColor[0].classList.remove("_js-scroll-active");
    itemColor[1].classList.remove("_js-scroll-active");
    itemColor[2].classList.remove("_js-scroll-active");
    // itemColor[3].classList.remove('_js-scroll-active');

    pagItem[0].classList.remove("_js-scroll-active");
    pagItem[1].classList.remove("_js-scroll-active");
    pagItem[2].classList.remove("_js-scroll-active");
    pagItem[3].classList.remove("_js-scroll-active");
  } else if (window.scrollY >= baner && window.scrollY < about) {
    // itemColor[3].classList.add('_js-scroll-active');

    itemColor[2].classList.remove("_js-scroll-active");
    itemColor[1].classList.remove("_js-scroll-active");
    itemColor[0].classList.remove("_js-scroll-active");

    pagItem[0].classList.add("_js-scroll-active");
    pagItem[1].classList.remove("_js-scroll-active");
    pagItem[2].classList.remove("_js-scroll-active");
    pagItem[3].classList.remove("_js-scroll-active");
  } else if (window.scrollY >= about && window.scrollY < team) {
    itemColor[1].classList.remove("_js-scroll-active");
    itemColor[2].classList.remove("_js-scroll-active");
    // itemColor[3].classList.remove('_js-scroll-active');

    itemColor[0].classList.add("_js-scroll-active");

    pagItem[0].classList.remove("_js-scroll-active");
    pagItem[1].classList.add("_js-scroll-active");
    pagItem[2].classList.remove("_js-scroll-active");
    pagItem[3].classList.remove("_js-scroll-active");
  } else if (window.scrollY >= team && window.scrollY < footer) {
    itemColor[0].classList.remove("_js-scroll-active");
    itemColor[2].classList.remove("_js-scroll-active");
    // itemColor[3].classList.remove('_js-scroll-active');

    itemColor[1].classList.add("_js-scroll-active");

    pagItem[0].classList.remove("_js-scroll-active");
    pagItem[1].classList.remove("_js-scroll-active");
    pagItem[2].classList.add("_js-scroll-active");
    pagItem[3].classList.remove("_js-scroll-active");
  } else if (window.scrollY >= footer) {
    //   itemColor[3].classList.remove('_js-scroll-active');
    itemColor[1].classList.remove("_js-scroll-active");
    itemColor[0].classList.remove("_js-scroll-active");

    itemColor[2].classList.add("_js-scroll-active");

    pagItem[0].classList.remove("_js-scroll-active");
    pagItem[1].classList.remove("_js-scroll-active");
    pagItem[2].classList.remove("_js-scroll-active");
    pagItem[3].classList.add("_js-scroll-active");
  }
});

////////////////////////////////////////////////

let FooterStickyForm = (function () {
  function setupListeners() {
    jQuery(window).on("scroll", _fixedOrRelative);
  }

  function _fixedOrRelative() {
    let $form = jQuery(".wrapper");
    let pagination = jQuery(".pagination");
    let header = jQuery(".header");
    let documentHeight = jQuery(document).height();
    let $this = jQuery(this);
    let windowHeight = $this.height();
    let currentScrollTop = $this.scrollTop();
    let footerHeight = jQuery("#footer").height();
    let sum = documentHeight - windowHeight - footerHeight;
    let sum_1 = documentHeight - windowHeight - windowHeight / 2;
    let sum_2 = documentHeight - windowHeight - 300;

    if (currentScrollTop > sum) {
      $form.addClass("sticky-form--relative");
    } else {
      $form.removeClass("sticky-form--relative");
    }
    if (currentScrollTop > sum_1) {
      pagination.addClass("sticky-form--relative");
    } else {
      pagination.removeClass("sticky-form--relative");
    }
    if (currentScrollTop > sum_2) {
      header.addClass("sticky-form--relative");
    } else {
      header.removeClass("sticky-form--relative");
    }
  }

  return {
    init: function () {
      setupListeners();
    },
  };
})();
jQuery(document).ready(function () {
  let widthPage = jQuery(document).width();
  if (widthPage >= 801) {
    FooterStickyForm.init();
  } else {
    //  jQuery('.wrapper').addClass('sticky-form--relative');
    FooterStickyForm.init();
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////розкадровка (анімація покадрової зміни при скролі)////////////////////////////////////////////////////////////////////////////

// const lottie = require("./lottie");

const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 800;
const currentFrame = (index) =>
  `./img/webp/1920X1080_${index.toString().padStart(3, "0")}.webp`;

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image();
img.src = currentFrame(1);
canvas.width = 1920;
canvas.height = 1080;
img.onload = function () {
  context.drawImage(img, 0, 0);
};

const updateImage = (index) => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
};

window.addEventListener("scroll", () => {
  const scrollTop = html.scrollTop;
  //////////////////////////////////
  const main = document.querySelector("main");
  const maxScrollTop = main.scrollHeight - window.innerHeight;
  //////////////////////////////////
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  requestAnimationFrame(() => updateImage(frameIndex + 1));
});

preloadImages();
