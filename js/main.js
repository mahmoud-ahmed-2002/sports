$(document).ready(function ($) {
  $('.spinner').fadeOut(2000)
  $('body').css("overflow", 'auto')


  $(Window).scroll(function () {
    let tScroll = $(window).scrollTop()
    if (tScroll > 10) {
      $('#main-nav').addClass('bg-dark')
      $('#main-nav').removeClass('bg-transparent')
      $('#second-nav').addClass('d-none')


    } else {
      $('#main-nav').addClass('bg-transparent')
      $('#main-nav').removeClass('bg-dark')
      $('#second-nav').removeClass('d-none')
    }
  })


  let countoffset = $('#count').offset().top - 1500
  $(Window).scroll(function () {
    let bScroll = $(window).scrollTop()
    if (bScroll > countoffset) {
      $(".num1").countMe(40, 20);
      $(".num2").countMe(40, 20);
      $(".num3").countMe(40, 20);
      $(".num4").countMe(40, 20);
    }
  });






});

//    start swiper team 

var swiper = new Swiper(".team-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//    end swiper team 

//      srtart color box
let colorItem = $('.color-item')

colorItem.eq(0).css('background-color', 'rgb(16, 147, 152)')
colorItem.eq(1).css('background-color', 'red')
colorItem.eq(2).css('background-color', 'orange')
colorItem.eq(3).css('background-color', 'yellow')
colorItem.eq(4).css('background-color', 'green')
colorItem.eq(5).css('background-color', 'blue')


if (localStorage.getItem('color') != null) {
  $(':root').css('--main-color', localStorage.getItem('color'))
}

let sideWidth = $('.colors-box').outerWidth();
$('.side-bar').css('left', -sideWidth)

colorItem.click(function () {
  let bgColor = $(this).css('background-color')
  localStorage.setItem('color', bgColor);
  $(':root').css('--main-color', bgColor)
})

$('.side-bar i').click(function () {
  // $('.side-bar').animate({'left':-sideWidth},2000)
  // console.log($('.side-bar').css('left'))
  if ($('.side-bar').css('left') == '0px') {
    console.log('yes')
    $('.side-bar').animate({ 'left': -sideWidth }, 1000)
  } else {
    console.log('no')
    $('.side-bar').animate({ 'left': 0 }, 1000)
  }
  // $('.colors-box').toggle(2000);
})

//     end color box


$('.nav-link').click(function () {


  $(this).addClass('active')
  $(this).parent().siblings().find('.nav-link').removeClass('active')

  let herf = this.href.split('/')
  console.log(herf[8])
  let domain = window.location.pathname.split('/') 
  let myDomain=domain[6]+ window.location.hash
  console.log(myDomain)
  if ((myDomain) == herf[8]) {

    console.log('yes')
    $(this).addClass('active')
    $(this).parent().siblings().find('.nav-link').removeClass('active')
  }
})

// function myActive() {
//   let herf = this.href.split('/')
//   console.log(herf[8])
//   let myDomain = window.location.pathname.split('/') + window.location.hash
//   console.log(myDomain[6])
//   if (myDomain[6] == herf[8]) {
//     $(this).addClass('active')
//     $(this).parent().siblings().find('.nav-link').removeClass('active')
//   }

// }