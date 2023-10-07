import { gsap } from "gsap"

export const ScrollAnimation = () => {
    const tl = gsap.timeline();
    tl.to("#h", {
        color: "white",
        scrollTrigger: {
            trigger: ".hero",
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
    });
    tl.to("#h", {
        color: "rgba(255, 255, 255, 0.7)",
        scrollTrigger: {
            trigger: ".project",
            start: "top",
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
    });
    tl.to("#p", {
        color: "white",
        scrollTrigger: {
            trigger: ".project",
            start: "top",
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
    });
    tl.to("#p", {
        color: "rgba(255, 255, 255, 0.7)",
        scrollTrigger: {
            trigger: ".about-me",
            start: "top",
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
    });
    tl.to("#a", {
        color: "white",
        scrollTrigger: {
            trigger: ".about-me",
            start: "top",
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
    });
    tl.to("#a", {
        color: "rgba(255, 255, 255, 0.7)",
        scrollTrigger: {
            trigger: ".contact",
            start: "top",
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
    });
    tl.to("#c", {
        color: "white",
        scrollTrigger: {
            trigger: ".contact",
            start: "top",
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
    });
}