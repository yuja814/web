// DDM 조작
// 선택
// 조작
// 이벤트

const headerFile = document.getElementById("header");
const menuItem = document.querySelectorAll(".header_menu > li");


// menuItem[0].innerText = "첫번째 LI 입니다.";
//menuItem[0].innerHTML = "<a href=''>첫번째 LI 입니다.</a>";
//menuItem[0].innerText = "<a href=''>첫번째 LI 입니다.</a>";

//menuItem[1].innerText = "두번째 LI 입니다.";
//menuItem[2].innerText = "세번째 LI 입니다.";s

//타이머 관련 함수
//setInterval(() => {}, interval); //interval(초) 마다 반복 실행
//setTimeout(() => {}, timeout); //timeout(초) 이후에 실행

const bannerFile = document.querySelector(".header_banner");
const bannerCount = document.querySelector(".header_banner_count");

let count = 3;
const countFun = setInterval(() => {
   count--;
   if (count <= 0) {
    clearInterval(countFun);
    bannerFile.classList.add("hide");
   } else {
    bannerCount.innerText = count;
   } 
}, 1000);

// clearInterval

//setTimeout(() => {
//    console.log("3초 뒤에 실행");
//}, 3000);
