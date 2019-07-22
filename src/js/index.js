import 'jquery';
import 'popper.js';
import 'bootstrap';

// import 'animation.gsap';

// import './animation.gsap';

// init controller
var controller = new ScrollMagic.Controller();

var tween = TweenMax.to(".text_parallax, figure", 0.5, {opacity: "1"});

var scene = new ScrollMagic.Scene({
    // triggerElement: "#trigger1"
})
    .setTween(".circle", 1, {width: 100, rotation: '0'}) // trigger a TweenMax.to tween
    .addTo(controller);


$('.video_block .text_wrap').each(function(){
    //build scenes
    var ourScene = new ScrollMagic.Scene({
        triggerElement: this,
        duration: '100%',
        triggerHook: 0.5
    })
        .setClassToggle(this,'fade-in') //add class to #scene2
        .addTo(controller);
});


// define movement of panels
var wipeAnimation = new TimelineMax()
    .to(".section-two", 1,   {
        x: "0%"
    })
// create scene to pin and link animation
new ScrollMagic.Scene({
    triggerElement: ".section-two",
    triggerHook: "onLeave",
    duration: "100%",
    ease: Linear.easeNone
})
    .setPin(".section-two")
    .setTween(wipeAnimation)
    // .addIndicators()
    .addTo(controller);

// var scene3 = new ScrollMagic.Scene({
//     // triggerElement: "#trigger"
// })
// // trigger a velocity opaticy animation
//     .setVelocity(".video_wrap", {opacity: 0}, {duration: 400})
//     // .addIndicators() // add indicators (requires plugin)
//     .addTo(controller);