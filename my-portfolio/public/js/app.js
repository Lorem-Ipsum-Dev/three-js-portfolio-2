import gsap from "../../node_modules/gsap";

const bar = document.querySelector('.loading__bar--inner');
const counter_number = document.querySelector('.loading__counter--number');
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
                duration: 1,
                opacity:0
            });
            tl.to(".loading__bar", {
                duration: 1,
                delay: 1,
                width: "0%",
            });
            tl.to(".loading__box", {
                duration: 1,
                height: "500px",
                borderRadius: "50%",
                borderColor: "transparent",
            });
            tl.to(".loading__svg", {
                duration: 20,
                opacity: 0.5,
            });
            gsap.to(".loading", {
                duration: 2,
                zIndex:1,
                background: "black",
                opacity:0.5,
            });
        }
    }, 20);
}, 500);
