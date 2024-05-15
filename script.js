var menu = document.getElementById("bar_menu")
var cancel = document.getElementById("cancel_menu")
var side_nav = document.getElementById("sidenavbar")


menu.addEventListener("click", function(){
    // alert("hhh")
    // side_nav.style.display="block"
    side_nav.style.right="0"
    menu.style.display="none"
    cancel.style.display="block"


})

cancel.addEventListener("click", function(){
    // alert("hhh")
    // side_nav.style.display="none"
    // cancel.style.display="none"
    // // menu.style.display="block"
    // menu.setAttribute("class","block md:hidden w-6 h-6")
    side_nav.style.right="-50%"
    menu.style.display="block"
    cancel.style.display="none"
})