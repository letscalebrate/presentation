window.onload = (e) => {
    let navTarget = document.getElementById("nav");

    navTarget.addEventListener("mouseover", function(){mouseIn();});
    navTarget.addEventListener("mouseout", function(){mouseOut();});

    let navItems = document.getElementsByClassName("nav__item__link");
    
    for (var i = 1; i < (navItems.length+1); i++){
        let navItemTarget = document.getElementById(`navLink${+i}`);
        navItemTarget.addEventListener("click", function(){mouseClick(navItemTarget);});
    }
}
    



function mouseIn(){
    let navLinks = document.getElementsByClassName("nav__item__link");

    Array.prototype.forEach.call(navLinks, icon =>{
        // console.log(icon);
        icon.style.animation = "opennav 0.2s cubic-bezier(0,1.51,.01,.99) 0s 1 normal";
        icon.style.opacity = "100";
    })
   

    // console.log("in");

}

function mouseOut(){
    // console.log("out");

    let navLinks = document.getElementsByClassName("nav__item__link");

    Array.prototype.forEach.call(navLinks, icon =>{
        // console.log(icon);
        icon.style.animation = "none";
        icon.style.opacity = "0";
    })
}

function mouseClick(navItemTarget){
    // console.log("click")
    // console.log(navItemTarget);
    let slideNum = navItemTarget.dataset.slide;
    // console.log(slideNum);
    let slideSelect = document.getElementById(`slide${+slideNum}`);


    slideSelect.scrollIntoView({
        behavior: 'smooth'
    });
    // window.scroll({
    //     top: (i*500),
    //     behavior: 'smooth' 
    //   });
}
