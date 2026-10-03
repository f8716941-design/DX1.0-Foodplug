

//ES5

// console.log("na me na")
// alert(writeup) 

// var writeup = "i have been coding since 12"
// console.log(hamburgerdiv)

// console.log(document)


var hamburgerdiv = document.querySelector(".hamburger")
var mobilelinks = document.querySelector (".mobile-link-holder");
var mybackdrop = document.querySelector(".backdrop")




function dosomething(){
hamburgerdiv.classList.toggle("showburger")
mobilelinks.classList.toggle("show-mobile-link-holder")
mybackdrop.classList.toggle("show-backdrop")
}

