$(document).ready(function () {
  $('.image-slider ul').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  });
})

// Scroll 
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $('#header').addClass('sticky')
    }
    else {
      $('#header').removeClass('sticky')
    }
  })
})


$(document).ready(function () {
  $('.body-image-address-travel').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });
})


$(document).ready(function () {
  $('.body-image-address-tour-outside').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });
})


$(document).ready(function () {
  $('.body-image-address-tour-inside').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });
})


// Backtop

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $('.back-top').fadeIn();
    }
    else {
      $('.back-top').fadeOut();
    }
  });
  $('.back-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 100);
  });
});

