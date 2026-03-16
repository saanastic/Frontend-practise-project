const parrallax = document.querySelectorAll(".parallax");
console.log(parrallax);

let xval=0, yval=0;

window.addEventListener("mousemove", (e)=>{
    if(tl.isActive()) return;
    xval=e.clientX -window.innerWidth/2;
    yval=e.clientY-window.innerHeight/2;
    parrallax.forEach((element)=>{
        let speedx=element.getAttribute("speedx");
        let speedy=element.getAttribute("speedy");

        let zval=e.clientX-parseFloat(getComputedStyle(element).left);
        let isleft=parseFloat(getComputedStyle(element).left)<window.innerWidth/2?-1:1;
        zval=zval*0.1*isleft;

        element.style.transform=`translate(calc(-50% + ${-xval*speedx}px), calc(-50% + ${yval*speedy}px)) perspective(2230px) translateZ(${zval}px)`;
    })
        
})


const tl = gsap.timeline({
  defaults: {
    ease: "power3.out",
    duration: 2

  }
});

tl.from(".bg-img", {
  y: 300,
  opacity: 0
});


tl.from(".mountain-10, .mountain-9, .mountain-8, .fog-7, .fog-6", {
  y: 220,
  x:200,
  opacity: 0
}, "-=1.1");


tl.from(".fog-5, .mountain-7, .mountain-6", {
  y: 180,
  opacity: 0
}, "-=1.0");


tl.from(".fog-4, .fog-3, .mountain-5, .mountain-4, .fog-2, .mountain-3, .mountain-2, .mountain-1", {
  y: 140,
  opacity: 0
}, "-=1.5");


tl.from(".text h1", {
  y: 460,
  opacity: 0,
  duration: 1
}, "-=1.9");
tl.from(".text h2", {
  y: -20,
  opacity: 0,
  duration: 1
}, "-=0.7");


tl.from(".hide", {
  y: 60,
  opacity: 0,
  duration: 1
}, "-=0.7");
