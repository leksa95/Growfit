import 'jquery';
import 'popper.js';
import 'bootstrap';

var controller = new ScrollMagic.Controller();

//ANIMATION TOP BLOCk
var tween = TweenMax.to(".text_parallax, figure", 0.5, {opacity: "1"});


//LOGO ANIMATION
var scene = new ScrollMagic.Scene({
    // triggerElement: "#trigger1"
})
    .setTween(".circle", 1, {width: 100, rotation: '0'}) // trigger a TweenMax.to tween
    .addTo(controller);

//TEXT
$('.video_block .text_wrap, .section .text_wrap').each(function(){
    var ourScene = new ScrollMagic.Scene({
        triggerElement: this,
        duration: '100%',
        triggerHook: 0.5
    })
        .setClassToggle(this,'fade-in')
        .addTo(controller);
});

//SHOW LINE
var showLine = new TimelineMax();
showLine.to(".line", 1, {width: "30vw", opacity: 1}, "+=2")
new ScrollMagic.Scene({
    triggerElement: ".top_block",
    duration: 1000,
    triggerHook: 0.5

})
    .setTween(showLine)
    // .addIndicators()
    // .setPin(".video_block")
    .addTo(controller);

//HIDE LINE
var hideLine = new TimelineMax();
hideLine.to(".line", 1, {width: "0", opacity: 0},"+=3")
new ScrollMagic.Scene({
    triggerElement: ".video_block",
    duration: 200,
    triggerHook: 0

})
    .setTween(hideLine)
    .addIndicators()
    // .setPin(".video_block")
    .addTo(controller);


//VIDEO SHOW
var moveVideo = new TimelineMax();
moveVideo.to(".video_wrap", 1, { opacity: 1})
         .to(".video_wrap", 1, { width: 0}, "+=1")
         .to(".section", 2, { width: "100%"}, "+=3")

new ScrollMagic.Scene({
    triggerElement: ".video_block",
    duration: 1000,
    triggerHook: 0

})
    .setTween(moveVideo)
    // .addIndicators()
    .setPin(".video_block")
    .addTo(controller);



// var showBlock = new TimelineMax();
// showBlock.to(".section", 2, { opacity: 1, width: "100%"}, "+=20")
// new ScrollMagic.Scene({
//     triggerElement: ".video_block",
//     duration: 1000,
//     triggerHook: 1
//
// })
//     .setTween(showBlock)
//     // .addIndicators()
//     // .setPin(".video_block")
//     .addTo(controller);
//


