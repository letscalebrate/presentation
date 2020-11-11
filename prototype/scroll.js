// var videos = document.getElementsByTagName("video"),
// fraction = 0.1;
// console.log(videos);

// function checkScroll() {

//     for(var i = 0; i < videos.length; i++) {

//         var video = videos[i];

//         var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
//             b = y + h, //bottom
//             visibleX, visibleY, visible;

//             visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
//             visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

//             visible = visibleX * visibleY / (w * h);

//             if (visible > fraction) {
//                 video.play();
//                 navTicker();
//             } else {
//                 video.pause();
//             }

//     }

// }

// window.addEventListener('scroll', checkScroll, false);
// window.addEventListener('resize', checkScroll, false);


// function navTicker(){
//     console.log("play");
// }



// function isHidden() {
//     let slides = document.getElementsByClassName("slide");

//     // console.log(slides);
//     for (let i = 1; i < slides.length+1; i++){
//         let slide = document.getElementById(`slide${+i}`);

//         var style = window.getComputedStyle(slide);
//         console.log(style);
//         return (style.display === 'none')
//     }
// }
// window.addEventListener('scroll', isHidden, false);
// window.addEventListener('resize', isHidden, false);


function checkScroll(){
    // let slides = document.getElementsByClassName("slide");

    // for (let i = 0; i < slides.length; i++){
    //     let slide = slides[i];
    //     if ($("#slide1").visible(true)) {
    //         // The element is visible, do something
    //     } else {
    //         // The element is NOT visible, do something else
    //     }
    // }

    let slides = document.getElementsByClassName("slide");
    for (let i = 1; i <= slides.length; i++){

    let navBox = document.getElementById("navBox"+i);
        if ($('#slide' + i).visible(true)) {
            // console.log("true" + i);
            navBox.style.width = "48px";
            navBox.style.backgroundColor = "darkred";
            }
            else{
                // console.log("false" + i);
            navBox.style.width = "24px";
            navBox.style.backgroundColor = "gray";
            }
    }

    
}



window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);