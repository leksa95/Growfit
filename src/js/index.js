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


// BLUE LINE
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

//VIDEO SHOW
var moveImg = new TimelineMax();
moveImg
    .fromTo(".video_wrap", 1, {xPercent: 0, autoAlpha: 0, width: "30vw", opacity: 1}, {xPercent: 0, autoAlpha: 1, width: "30vw", opacity: 0, ease: Power4.easeInOut})
new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    duration: '100%'
})
    .setTween(moveImg)
    .addTo(controller);


//VIDEO REMOVE
var removeImg = new TimelineMax();
removeImg
    .fromTo(".section-two", 1, {xPercent: 0, autoAlpha: 1, width: "30vw", opacity: 1}, {xPercent: 0, autoAlpha: 1, width: "0", opacity: 0})
    .fromTo(".video_wrap", 1, {xPercent: 0, autoAlpha: 1, width: "30vw"}, {xPercent: 0, autoAlpha: 1, width: "0"})
    .fromTo(".section", 1, {xPercent: 0, autoAlpha: 1, width: "0", opacity: 0}, {xPercent: 0, autoAlpha: 1, width: "100%", opacity: 1})
new ScrollMagic.Scene({
    triggerElement: "#trigger3",
    duration: '30%'
})
    .setTween(removeImg)
    .addTo(controller);




var flightpath = {
    entry : {
        curviness: 1.25,
        autoRotate: true,
        values: [
            {x: 100,	y: -100},
            {x: 300,	y: 10}
        ]
    },
    looping : {
        curviness: 1.25,
        autoRotate: true,
        values: [
            {x: 510,	y: 60},
            {x: 620,	y: -60},
            {x: 500,	y: -100},
            {x: 380,	y: 20},
            {x: 500,	y: 60},
            {x: 580,	y: 20},
            {x: 620,	y: 15}
        ]
    },
    leave : {
        curviness: 1.25,
        autoRotate: true,
        values: [
            {x: 660,	y: 20},
            {x: 800,	y: 130},
            {x: $(window).width() + 300,	y: -100},
        ]
    }
};

// create tween
var tween2 = new TimelineMax()
    .add(TweenMax.to($("#plane"), 0, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
    .add(TweenMax.to($("#plane"), 0, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
    .add(TweenMax.to($("#plane"), 100, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));


// build scene
var scene4 = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500, offset: 100})
    // .setPin("#target")
    .setTween(tween2)
    .addTo(controller);

