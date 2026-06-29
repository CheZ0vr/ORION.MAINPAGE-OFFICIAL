/* ==================================================
ORION V4
SCRIPT.JS
PART 1A
Loader • Navbar • Smooth Scroll • Reveal
================================================== */

window.addEventListener("load", () => {

const loader = document.getElementById("loader");  

setTimeout(() => {  

    loader.classList.add("hide");  

    setTimeout(() => {  
        loader.remove();  
    }, 1200);  

}, 1600);

});

/* ==================================================
NAVBAR SCROLL
================================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

if (window.scrollY > 60) {  

    navbar.classList.add("scrolled");  

} else {  

    navbar.classList.remove("scrolled");  

}

});

/* ==================================================
SMOOTH SCROLL
================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function(e){  

    const target = document.querySelector(this.getAttribute("href"));  

    if(!target) return;  

    e.preventDefault();  

    window.scrollTo({  

        top: target.offsetTop - 70,  

        behavior:"smooth"  

    });  

});

});

/* ==================================================
SCROLL REVEAL
================================================== */

const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

const trigger = window.innerHeight * 0.88;  

reveals.forEach(el => {  

    const top = el.getBoundingClientRect().top;  

    if(top < trigger){  

        el.classList.add("active");  

    }  

});

};

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

/* ==================================================
FADE STAGGER
================================================== */

document.querySelectorAll(".shop-card,.feature,.review-card,.glass-card,.faq-item")
.forEach((card,index)=>{

card.style.transitionDelay = `${index*0.08}s`;

});

/* ==================================================
BUTTON RIPPLE
================================================== */

document.querySelectorAll("button,.primary,.secondary,.buy-button")
.forEach(button=>{

button.addEventListener("mouseenter",()=>{  

    button.style.transform="translateY(-3px)";  

});  

button.addEventListener("mouseleave",()=>{  

    button.style.transform="";  

});

});

/* ==================================================
ORION V4
SCRIPT.JS
PART 1B
Mouse Glow • Parallax • Floating Bottles
================================================== */

/* ==================================================
MOUSE GLOW
================================================== */

const glow = document.createElement("div");

glow.className = "cursor-glow";

document.body.appendChild(glow);

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

document.addEventListener("mousemove",(e)=>{

mouseX = e.clientX;  
mouseY = e.clientY;

});

function animateGlow(){

glow.style.left = mouseX + "px";  
glow.style.top = mouseY + "px";  

requestAnimationFrame(animateGlow);

}

animateGlow();

/* ==================================================
PARALLAX BACKGROUND
================================================== */

const gradientOne = document.querySelector(".gradient-one");
const gradientTwo = document.querySelector(".gradient-two");

window.addEventListener("mousemove",(e)=>{

const x = (e.clientX/window.innerWidth)-0.5;  
const y = (e.clientY/window.innerHeight)-0.5;  

if(gradientOne){  

    gradientOne.style.transform =  
    `translate(${x*40}px,${y*40}px)`;  

}  

if(gradientTwo){  

    gradientTwo.style.transform =  
    `translate(${-x*35}px,${-y*35}px)`;  

}

});

/* ==================================================
HERO BOTTLE PARALLAX
================================================== */

const heroBottle = document.querySelector(".orion-bottle");

window.addEventListener("mousemove",(e)=>{

if(!heroBottle) return;  

const x = (e.clientX/window.innerWidth)-0.5;  
const y = (e.clientY/window.innerHeight)-0.5;  

heroBottle.style.transform =  

`rotateY(${x*18}deg)  
 rotateX(${-y*14}deg)  
 translateY(${-y*12}px)`;

});

/* ==================================================
FLOATING PRODUCT CARDS
================================================== */

const cards = document.querySelectorAll(".perfume-card");

cards.forEach((card,index)=>{

let angle = index * 2;  

function floatCard(){  

    angle += 0.02;  

    card.style.transform =  

    `translateY(${Math.sin(angle)*8}px)  
     rotate(${Math.sin(angle)*1.2}deg)`;  

    requestAnimationFrame(floatCard);  

}  

floatCard();

});

/* ==================================================
SHOP CARD TILT
================================================== */

document.querySelectorAll(".shop-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{  

    const rect = card.getBoundingClientRect();  

    const x = e.clientX - rect.left;  
    const y = e.clientY - rect.top;  

    const rx = ((y/rect.height)-0.5)*-12;  
    const ry = ((x/rect.width)-0.5)*12;  

    card.style.transform =  

    `perspective(900px)  
     rotateX(${rx}deg)  
     rotateY(${ry}deg)  
     translateY(-10px)`;  

});  

card.addEventListener("mouseleave",()=>{  

    card.style.transform="";  

});

});

/* ==================================================
ORION V4
SCRIPT.JS
PART 1C (FINAL)
Stars • FAQ • Active Links • Footer Year
================================================== */

/* ==================================================
ACTIVE NAV LINK
================================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

function updateActiveNav(){

const scrollPos = window.scrollY + 140;  

sections.forEach(section=>{  

    const top = section.offsetTop;  
    const height = section.offsetHeight;  
    const id = section.getAttribute("id");  

    if(scrollPos >= top && scrollPos < top + height){  

        navLinks.forEach(link=>{  

            link.classList.remove("active");  

            if(link.getAttribute("href")==="#" + id){  

                link.classList.add("active");  

            }  

        });  

    }  

});

}

window.addEventListener("scroll", updateActiveNav);

/* ==================================================
FAQ ACCORDION
================================================== */

document.querySelectorAll(".faq-item").forEach(item=>{

const answer = item.querySelector("p");  

if(answer){  

    answer.style.maxHeight = "0px";  
    answer.style.overflow = "hidden";  
    answer.style.transition = "max-height .45s ease";  

}  

item.addEventListener("click",()=>{  

    const opened = item.classList.contains("open");  

    document.querySelectorAll(".faq-item").forEach(card=>{  

        card.classList.remove("open");  

        const p = card.querySelector("p");  

        if(p){  

            p.style.maxHeight = "0px";  

        }  

    });  

    if(!opened){  

        item.classList.add("open");  

        answer.style.maxHeight =  
        answer.scrollHeight + "px";  

    }  

});

});

/* ==================================================
TWINKLING STARS
================================================== */

document.querySelectorAll(".stars").forEach(layer=>{

setInterval(()=>{  

    layer.style.opacity =  
    (Math.random()*0.18+0.12).toFixed(2);  

},2500+Math.random()*2000);

});

/* ==================================================
BUTTON GLOW
================================================== */

document.querySelectorAll(".primary,.buy-button,.shop-button")
.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{  

    btn.animate([  

        {  
            filter:"brightness(1)"  
        },  

        {  
            filter:"brightness(1.25)"  
        },  

        {  
            filter:"brightness(1)"  
        }  

    ],{  

        duration:600  

    });  

});

});

/* ==================================================
SCROLL PROGRESS BAR
================================================== */

const progress = document.createElement("div");

progress.className = "scroll-progress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total =  
document.documentElement.scrollHeight -  
window.innerHeight;  

const percent =  
(window.scrollY/total)*100;  

progress.style.width = percent + "%";

});

/* ==================================================
COPYRIGHT YEAR
================================================== */

const copyright =
document.querySelector(".copyright");

if(copyright){

copyright.innerHTML =  
`© ${new Date().getFullYear()} ORION. Crafted Among The Stars.`;

}

/* ==================================================
PERFORMANCE
================================================== */

window.addEventListener("blur",()=>{

document.body.classList.add("paused");

});

window.addEventListener("focus",()=>{

document.body.classList.remove("paused");

});