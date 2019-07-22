import 'jquery';
import 'popper.js';
import 'bootstrap';

// import 'animation.gsap';

// import './animation.gsap';

// init controller
var controller = new ScrollMagic.Controller();

var tween = TweenMax.to(".text_parallax", 0.5, {opacity: "1"})

var scene = new ScrollMagic.Scene({
    // triggerElement: "#trigger1"
})
    .setTween(".circle", 1, {width: 100, rotation: '0'}) // trigger a TweenMax.to tween
    // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(controller);

// Parallax scene
var parallaxTl = new TimelineMax();
parallaxTl
    .from('.content-wrapper', 0.4, {autoAlpha: 0, ease:Power0.easenone}, 0.4)
    .from('.bcg', 2, {y: '-50%', ease:Power0.easeNone}, 0)
;

var sliderParallaxScene = new ScrollMagic.Scene({
    // triggerElement: '.bcg-parallax',
    triggerHook: 1,
    duration: '100%'
})
    .setTween(parallaxTl)
    .addTo(controller);


$('.video_block').each(function(){
    console.log(this);
    //build scenes
    var ourScene = new ScrollMagic.Scene({
        triggerElement: this,
        duration: '100%',
        triggerHook: 0.5
    })
        .setClassToggle(this,'fade-in') //add class to #scene2
        // .addIndicators({
        //     name: 'fade section',
        //     indent: 0,
        //     colorTrigger: 'white',
        //     colorStart: 'black',
        //     colorEnd: 'yellow'
        // }) //add indicator in dev mode - using plugin
        .addTo(controller);
});