let hamburguerMenu = document.querySelector("#btnHamburguer")
let mobileMenu = document.querySelector(".header_menu");
let body = document.querySelector("body");
let menuAnchors = document.querySelectorAll(".header_menu a")

console.log(menuAnchors);

hamburguerMenu.addEventListener("click", function(){
    if (hamburguerMenu.classList.contains("opened")){
        hamburguerMenu.classList.remove("opened");
        mobileMenu.classList.remove("mobile");
        body.classList.remove("noscroll");


    }else{
        hamburguerMenu.classList.add("opened");
        mobileMenu.classList.add("mobile");
        body.classList.add("noscroll");
    }
});

menuAnchors.forEach(function(element){
    element.addEventListener("click", function(){
        if(hamburguerMenu.classList.contains("opened")){
            mobileMenu.classList.remove("mobile");
            body.classList.remove("noscroll");
            hamburguerMenu.classList.remove("opened");
        }
    })
})

