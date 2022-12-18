

let menuline = document.querySelector(".menuline"); //햄버거 버튼

let menuItems = document.querySelector(".items"); //메뉴 리스트

let link = document.querySelector(".link");


menuline.addEventListener("click",clickFn);

function clickFn()
{
    //console.log("햄버거 버튼이 눌럈습니다.");

    menuItems.classList.toggle('active');
    link.classList.toggle('active');
}
