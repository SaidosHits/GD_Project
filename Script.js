let button_close = document.querySelector("#close_button")
let button_open = document.querySelector("#open_button")
let navbar = document.querySelector(".small_dis")
let body = document.querySelector("body")

button_open.addEventListener("click", function(){
    navbar.classList.toggle("active")
    body.classList.toggle("lock")

})
button_close.addEventListener("click", function(){
    navbar.classList.toggle("active")
    body.classList.toggle("lock")
})