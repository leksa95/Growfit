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
$('.text_wrap').each(function(){
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
    // .addIndicators()
    .addTo(controller);


//VIDEO SHOW
var moveVideo = new TimelineMax();
moveVideo.to(".video_wrap", 1, { opacity: 1})
         .to(".video_wrap", 1, { width: 0}, "+=1")
         .to(".section", 2, { width: "100%"}, "+=5")

new ScrollMagic.Scene({
    triggerElement: ".video_block",
    duration: 1000,
    triggerHook: 0

})
    .setTween(moveVideo)
    // .addIndicators()
    .setPin(".video_block")
    .addTo(controller);


var moveTarget = new TimelineMax();
moveTarget.to("#target", 1, { right: "100"}, "+=4")
    .to("#target", 1, { scale: 1, rotation: 0} )
    // .to("#target", 0.5, { scale: 0.8, right: "30%", yPercent: +100, rotation: 90}, "+=2")
    // .to("#target", 0.5, { scale: 1, right: "60%", yPercent: +200}, "+=1")

new ScrollMagic.Scene({
    triggerElement: ".video_block",
    duration: 1200,
    triggerHook: 0
})
    .setTween(moveTarget)
    // .addIndicators()
    // .setPin(".video_block")
    .addTo(controller);



const image = {
    curviness: 1.1,
    autoRotate: false,
    values: [
        { x: 0, y: 0 },
        { x: -300, y: 150 },
        { x: -1024, y: 450 },
        { x: 300, y: 800 },
        { x: 0, y: 1000 },
        // { x: 350, y: -50 }
    ]
};

const tweens = new TimelineLite();

tweens.add(
    TweenLite.to('#target', 0.5,{bezier: image, scale: 0.8, right: "30%", yPercent: +300}, "+=15")
);

const imageScene =  new ScrollMagic.Scene({
    triggerElement: ".first",
    duration: 2500,
    triggerHook: 0.5,
})
    .setTween(tweens)
    // .addIndicators()
    .addTo(controller);


var scaleTarget = new TimelineMax();
scaleTarget.to("#target", 1, { scale: 0.5, rotation: 45} )
    .to("#target", 4, { scale: 3, rotation: 90, right: "40%"}, "+=2" )
// .to("#target", 0.5, { scale: 0.8, right: "30%", yPercent: +100, rotation: 90}, "+=2")
// .to("#target", 0.5, { scale: 1, right: "60%", yPercent: +200}, "+=1")

new ScrollMagic.Scene({
    triggerElement: ".example",
    duration: 1200,
    triggerHook: 1
})
    .setTween(scaleTarget)
    .addIndicators()
    // .setPin(".video_block")
    .addTo(controller);