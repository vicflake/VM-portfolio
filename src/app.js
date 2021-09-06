const hamburguerMenu = document.querySelector("#btnHamburguer")

hamburguerMenu.addEventListener("click", function(){
    console.log("Hello")
    if (hamburguerMenu.classList.contains("opened")){
        hamburguerMenu.classList.remove("opened");
    }else{
        hamburguerMenu.classList.add("opened");
    }


});