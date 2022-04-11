let menu=document.getElementById("menu")

window.addEventListener("scroll",function(){
    
    if(document.documentElement.scrollTop>=200){

        menu.classList.remove("menu")
        menu.classList.add("menu2")
       

    }else{

        menu.classList.remove("menu2")
        menu.classList.add("menu")

    }


})