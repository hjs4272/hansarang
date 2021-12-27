// pc 왼쪽 하단 슬라이드
$(function(){
    
  const swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });

});

// 모바일 햄버거 사이드 쇼업 메뉴 (왼쪽)
function openNav(){
  $("#leftMenu").addClass("showLeftMenu");
}

function closeNav(){
  $("#leftMenu").removeClass("showLeftMenu")
}

// 모바일 오른쪽 사이드 쇼업 메뉴
function openNav2(){
  $("#rightMenu").addClass("showRightMenu");
}

function closeNav2(){
  $("#rightMenu").removeClass("showRightMenu")
}







//자바스크립트
// 보안로그인 색 클릭 변경
const 자물쇠아이콘 = document.querySelector(".fa-lock");

자물쇠아이콘.addEventListener('click', function() {
자물쇠아이콘.classList.toggle('fa-lock--orange');
});

