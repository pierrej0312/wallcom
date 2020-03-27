//loading
let logo = document.querySelector(".main-logo")

window.addEventListener("load", function() {
    console.log('document load started');
    logo.classList.add("loaded");
});

//nav bar desktop

window.addEventListener("scroll", ()=> {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector("header").classList.remove("start");
      } 
    else {
        document.querySelector("header").classList.add("start");
    }
});