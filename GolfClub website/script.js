var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 30 + "px"
    crsr.style.top = dets.y + "px"
    crsr2.style.left = dets.x - 250 + "px"
    crsr2.style.top = dets.y - 250 + "px"
})
var crsr2 = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
    
})
gsap.to("#nav", {

    backgroundColor: "#111",
    height: "110px",
    duration: 1,
    scrollTrigger: {
        trigger: "#nav", scroller: "body",
        markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }

})
gsap.to("#main", {


    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        backgroundColor: "#000",
        markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }

})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function (elem) {
    console.log(elem)
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 4
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"

    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "0px solid chartreuse"
        crsr.style.backgroundColor = ""
        // crsr.style.backgroundColor=""
    })
})
gsap.from("#about-us img,#about-us-in", {
    y: 90,
    duration: 3,
    stagger: 0.4,
    opacity: 0,
    scrollTrigger: {
        trigger: "about-us", scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 70%",
        scrub:2
    }
})
gsap.from(".card", {
    scale: 0.7,
    duration: 1,
    stagger:0.1,
    opacity: 0.5,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
})
gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        scroller: "body",
        trigger: "#colon1",
        // markers:true,
        start: "top 50%",
        end: "top 45%",
        scrub: 3


    }
})
gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers:true,
        start: "top 40%",
        end: "top 35%",
        scrub: 3
    }
})
gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers:true,
        start: "top 65%",
        end: "top 75%",
        scrub: 2
    }
})