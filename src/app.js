let hamburguerMenu = document.querySelector("#btnHamburguer")
let mobileMenu = document.querySelector(".header_menu");

hamburguerMenu.addEventListener("click", function(){
    if (hamburguerMenu.classList.contains("opened")){
        hamburguerMenu.classList.remove("opened");
        mobileMenu.classList.remove("mobile");
    }else{
        hamburguerMenu.classList.add("opened");
        mobileMenu.classList.add("mobile");
    }
});

