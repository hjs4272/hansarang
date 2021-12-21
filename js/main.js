$(function(){
    
  const swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });

});

// 햄버거 사이드 쇼업 메뉴
function openNav(){
  $("#leftMenu").addClass("showLeftMenu");
}

function closeNav(){
  $("#leftMenu").removeClass("showLeftMenu")
}

    