const hamburger = document.querySelector('.hamburger');
const lineOne = hamburger.querySelector('.line-one');
const lineTwo = hamburger.querySelector('.line-two');
const lineThree = hamburger.querySelector('.line-three');
const learnmore = document.querySelector('.learn-more');
const arrow = learnmore.querySelector('.arrow');

const lines = [lineOne, lineTwo, lineThree];

var tl = gsap.timeline();
var ptl = gsap.timeline();
var welcome = gsap.timeline();
var toggleMenu = gsap.timeline({ paused: true });

welcome
    .to(".loader", {transformOrigin: "0% 0%", ease: Power4.easeOut, scaleY: 0, duration: 1.5})
    .from(".welcome-h", {ease: Power4.easeOut, y: 50, opacity: 0, duration: 1.5}, 1)
    .from(".welcome-p", {ease: Power4.easeOut, y: 50, opacity: 0, duration: 1.5,}, 1.25)
    .from(".welcome-thanks", {ease: Power4.easeOut, y: 50, opacity: 0, duration: 1.5,}, 1.50)
    .from(".learn-more-p", {ease: Power4.easeOut, y: 50, opacity: 0, duration: 1.5,}, 1.75)
    .from(".arrow", {ease: Power4.easeOut, y: 50, opacity: 0, duration: 1.5}, 1.75)
    .from(".projects-h", {ease: Power4.easeOut, y: 50, opacity: 0, duration: 1.5}, 2.25)


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
    .to(lineTwo, .25, {transformOrigin: "50% 50%", scale: 0}, 0)
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

// helper function to determine if an element is in view
const isInViewport = el => {
  let top = el.offsetTop;
  let left = el.offsetLeft;
  let width = el.offsetWidth;
  let height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
};

const grid = document.querySelector('.container-grid');
const projects = document.getElementsByClassName('project-container');

window.addEventListener('scroll', function (event) {
  console.log(isInViewport(grid));
	if (isInViewport(grid)) {
    console.log('grid in view!');
    for(let i = 0; i < projects.length; i++) {
      if (projects[i].classList.contains('project-animation')) {
        return;
      }
      projects[i].className += " project-animation"; 
    }
	}
}, false);