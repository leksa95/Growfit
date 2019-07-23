import 'jquery';
import 'popper.js';
import 'bootstrap';

var controller = new ScrollMagic.Controller();

var tween = TweenMax.to(".text_parallax, figure", 0.5, {opacity: "1"});

var scene = new ScrollMagic.Scene({
    // triggerElement: "#trigger1"
})
    .setTween(".circle", 1, {width: 100, rotation: '0'}) // trigger a TweenMax.to tween
    .addTo(controller);


$('.video_block .text_wrap, .section .text_wrap').each(function(){
    var ourScene = new ScrollMagic.Scene({
        triggerElement: this,
        duration: '100%',
        triggerHook: 0.5
    })
        .setClassToggle(this,'fade-in')
        .addTo(controller);
});

var wipeAnimation = new TimelineMax()
    .to(".section-two", 1,   {
        x: "0%"
    });
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


var moveImg = new TimelineMax();
moveImg
    // .to(".video_wrap", 0.3, {yPercent: -30, autoAlpha: 0, ease: Power4.easeInOut})
    .fromTo(".video_wrap", 1, {xPercent: 0, autoAlpha: 0, width: 0}, {xPercent: 0, autoAlpha: 1, width: "29.6vw", ease: Power4.easeInOut})
    // .from(".video_wrap", 1, {autoAlpha: 0}, '-=0.7');

new ScrollMagic.Scene({
    triggerElement: $('.video_wrap')[0],
    duration: '70%'
})
    .setTween(moveImg)
    .addTo(controller);


// define movement of panels
var wipeAnimation2 = new TimelineMax()
    .fromTo(".section", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
    // .fromTo("section.panel.green",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
    // .fromTo("section.panel.bordeaux", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

// create scene to pin and link animation
new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: "onLeave",
    duration: "200%"
})
    // .setPin(".section")
    .setTween(wipeAnimation2)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

// var wipeAnimation3 = new TimelineMax()
//     .fromTo(".video_wrap", 1, {x: "0%"}, {x: "100%", ease: Linear.easeNone})  // in from left
// // .fromTo("section.panel.green",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
// // .fromTo("section.panel.bordeaux", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top
//
// // create scene to pin and link animation
// new ScrollMagic.Scene({
//     triggerElement: this,
//     triggerHook: "onLeave",
//     duration: "200%"
// })
// // .setPin(".section")
//     .setTween(wipeAnimation3)
//     .addIndicators() // add indicators (requires plugin)
//     .addTo(controller);
//
