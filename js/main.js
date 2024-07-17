window.onload = function () {
  // 상단의 마이페이지리스트 기능
  const mypageBt = document.querySelector(".mypage-bt");
  const mypageList = document.querySelector(".mypage-list");
  mypageBt.addEventListener("click", function () {
    mypageList.classList.toggle("showMypage");
  });
  // swiper ================
  // 프로모션 스와퍼기능
  const swPromotion = new Swiper(".sw-promotion", {
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      760: {
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: ".promotion .sw-next",
      prevEl: ".promotion .sw-prev",
    },
    pagination: {
      el: ".sw-promotion-pg ",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  // 쇼핑 스와이퍼
  const swShopping = new Swiper(".sw-shopping", {
    loop: true,
    slidesPerView: 1.1,
    grid: {
      rows: 1,
      fill: "row",
    },
    spaceBetween: 10,
    breakpoints: {
      320:{
        slidesPerView: 3,
    grid: {
      rows: 3,
      fill: "row",
    },
    spaceBetween: 10,
      },
      900: {
        spaceBetween: 32,
        slidesPerView: 4,
        slidesPerGroup: 4,
        grid: {
          rows: 1,
        },
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 4,
        slidesPerGroup: 4,
        grid: {
          rows: 1,
        },
      },
    },
    navigation: {
      nextEl: ".shopping .sw-next",
      prevEl: ".shopping .sw-prev",
    },
  });
  // 투어 스와이퍼
   const swTour = new Swiper(".sw-tour",{
    // 모바일버전
    loop: true,
    slidesPerView: 1.1,
    // spaceBetween:26,
    grid: {
      rows: 1,
      fill: "row",
    },
    breakpoints: {
      320:{
        slidesPerView: 2,
    spaceBetween:26,
    grid: {
      rows: 3,
      fill: "row",
        },
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView:3,
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
    },
    navigation: {
      nextEl: ".tour .sw-next",
      prevEl: ".tour .sw-prev",
    },
  });
  // 티켓 스와이퍼
  const swTicket = new Swiper(".sw-ticket",{
    loop:true,
    slidesPerView:1,
    breakpoints:{
      320:{
        slidesPerView: 2,
        spaceBetween:26,
      },
      1024:{
        slidesPerView:3,
        spaceBetween:32
      },
      1280:{
        slidesPerView:4,
        spaceBetween:26,
      }
    },
    navigation: {
      nextEl: ".ticket .sw-next",
      prevEl: ".ticket .sw-prev",
    },
  });
};