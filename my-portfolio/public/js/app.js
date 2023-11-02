import gsap from "../../node_modules/gsap";

const bar = document.querySelector('.loading__bar--inner');
const counter_number = document.querySelector('.loading__counter--number');
const salutation = document.querySelectorAll(".intro .salutation span");
const name = document.querySelectorAll(".intro .name span");
const title = document.querySelectorAll(".intro .title span");
const country = document.querySelectorAll(".intro .country span");
const coolText = document.querySelector(".intro");
const hand = document.querySelector("#waving-hand");

const tl = gsap.timeline();

let counter = 0;
setTimeout(() => {
    let barInterval = setInterval(() => {
        bar.style.width = counter + "%";
        counter_number.innerText = counter + "%";
        counter++;
        if (counter === 101) {
            clearInterval(barInterval);
            gsap.to(".loading__text, .loading__counter", {
                delay: 1,
                duration: 1,
                opacity:0
            });
            tl.to(".loading__bar", {
                duration: 1,
                delay: 1,
                width: "0%",
            });
            tl.to(".loading__box", {
                delay: .5,
                duration: 1,
                height: "500px",
                borderRadius: "50%",
                borderColor: "transparent",
            });
            tl.to(".loading", {
                //delay: 3,
                duration: 2,
                zIndex:1,
                //background: "black",
                opacity:0.2
            });
            tl.to(".landing", {
                delay:0.2,
                duration: 0.8,
                opacity: 1
            })
            .to(".loading__svg", {
                duration: 1,
                opacity: 0.5,
            })
            .to(coolText, {
                opacity: 1
            })
            tl.add(animateIntro(salutation), "+=.2")
            tl.add(animateIntro(name), "+=1");
            tl.add(animateIntro(title), "+=.5");
            tl.add(animateIntro(country), "+=.5");
            tl.add(waveAnimation(hand), "+=.2");
        }
    }, 20);
}, 500);

function animateIntro(elements) {
  let tl = gsap.timeline();
  elements.forEach((elem, index) => {
      // Set initial styles for the character
      gsap.set(elem, {
        y: 100,
        scale:3,
        opacity: 0,
      });
      // Animate the character to reveal it
      tl.to(elem, {
        duration: 0.15, // Duration of the animation for each character
        //delay:0.2,
        scale:1,
        y: 0,
        opacity: 1,
        ease: "Power1.easeInOut", // You can choose a different easing function
      });
    });

  return tl;
}

//waving-hand animation
function waveAnimation(element) {
  // Create a TimelineMax instance to store the animation
  let timeline = gsap.timeline();
  // Animate the element to the desired position
  timeline.to(element, {
    duration:.2,
    rotate: 10,
    transformOrigin: "50% bottom"
  });
  // Pause the animation for 1 second
  //timeline.pause();
  // Animate the element back to the original position
  timeline.to(element, {
    duration:.2,
    rotate: 0,
    transformOrigin: "50% bottom",
  });
  // Pause the animation for 1 second
  //timeline.pause();
  timeline.repeat(3);
  // Start the animation
  return timeline;
}
