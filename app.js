const hamburger = document.querySelector('.hamburger');
const lineOne = hamburger.querySelector('.line-one');
const lineTwo = hamburger.querySelector('.line-two');
const lineThree = hamburger.querySelector('.line-three');
const learnmore = document.querySelector('.learn-more');
// const arrow = learnmore.querySelector('.arrow');

const lines = [lineOne, lineTwo, lineThree];

var tl = gsap.timeline();
var ptl = gsap.timeline();
var welcome = gsap.timeline();
var toggleMenu = gsap.timeline({ paused: true });

welcome
    .from(".welcome-h", {ease: Power4.easeOut, y: 50, opacity: 0, duration: 1.5}, .25)
    .from(".welcome-p", {ease: Power4.easeOut, y: 50, opacity: 0, duration: 1.5}, .50)
    /*.from(".welcome-thanks", {ease: Power4.easeOut, y: 50, opacity: 0, duration: 1.5}, .75)
    .from(".learn-more-p", {ease: Power4.easeOut, y: 50, opacity: 0, duration: 1.5,}, .75)
    .from(".arrow", {ease: Power4.easeOut, y: 50, opacity: 0, duration: 1.5}, .75)
    .from(".projects-h", {ease: Power4.easeOut, y: 50, opacity: 0, duration: 1.5}, 1)*/


gsap.to(".arrow", {x: 15, repeat: -1, yoyo: true,});

toggleMenu.reversed(true); // IMPORTANT to set the init state to true

const nextStateMap = {
  true: () => {
    toggleMenu.play();
    toggleMenu.reversed(false);
  },
  false: () => {
    toggleMenu.reverse();
    toggleMenu.reversed(true);
  }
}

toggleMenu
    .to(lineThree, .25, {transformOrigin: "50% 50%"}, "change")
    .to(lineOne, .25, {transformOrigin: "50% 50%"}, "change")
    .to(lineThree, .25, {y: -15}, 0)
    .to(lineOne, .25, {y: 15}, 0)
    .to(lineThree, .25, {rotation: -45}, "cross")
    .to(lineOne, .25, {rotation: 45}, "cross");

hamburger.addEventListener('click', () => {
  const isReversed = toggleMenu.reversed();
  hamburger.classList.toggle('js-x');
  nextStateMap[isReversed]();
})