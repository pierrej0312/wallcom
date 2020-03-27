//loading
let logo = document.querySelector(".main-logo")

window.addEventListener("load", function() {
    console.log('document load started');
    logo.classList.add("loaded");
});


//smooth scrolling
let anchorlinks = document.querySelectorAll('a[href^="#"]')

for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}

//nav bar desktop

window.addEventListener("scroll", ()=> {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector("header").classList.remove(start);
      } 
    else {
        document.querySelector("header").classList.add(start);
    }
});