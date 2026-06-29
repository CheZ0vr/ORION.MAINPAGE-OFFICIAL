/==================================================
ORION V3
SCRIPT.JS
PART 3A
==================================================/

"use strict";

/=========================================
ELEMENTS
=========================================/

const loader = document.getElementById("loader");

const navbar = document.getElementById("navbar");

const reveals = document.querySelectorAll(

".reveal,.reveal-left,.reveal-right,.zoom,.fade"

);

const heroImage = document.querySelector(".hero-image");

const parallax = document.querySelectorAll(".parallax");

const backTop = document.querySelector(".back-top");

const cursor = document.querySelector(".cursor");

const shopCards = document.querySelectorAll(".shop-card");

/=========================================
LOADER
=========================================/

window.addEventListener("load",()=>{

document.body.classList.remove("loading");

setTimeout(()=>{

loader.classList.add("hide");

},1800);

});

/=========================================
NAVBAR
=========================================/

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});

/=========================================
REVEAL
=========================================/

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},

{

threshold:.18

}

);

reveals.forEach(el=>observer.observe(el));

/=========================================
SMOOTH SCROLL
=========================================/

document

.querySelectorAll('a[href^="#"]')

.forEach(link=>{

link.addEventListener("click",e=>{

const id = link.getAttribute("href");

const target = document.querySelector(id);

if(!target)return;

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

});

});

/=========================================
HERO PARALLAX
=========================================/

document.addEventListener("mousemove",(e)=>{

if(!heroImage)return;

const x=(e.clientX-window.innerWidth/2)/45;

const y=(e.clientY-window.innerHeight/2)/45;

heroImage.style.transform=

translate(${x}px,${y}px);

});

/=========================================
GENERIC PARALLAX
=========================================/

document.addEventListener("mousemove",(e)=>{

const cx=window.innerWidth/2;

const cy=window.innerHeight/2;

parallax.forEach(item=>{

const speed=item.dataset.speed||20;

const x=(e.clientX-cx)/speed;

const y=(e.clientY-cy)/speed;

item.style.transform=

translate(${x}px,${y}px);

});

});

/=========================================
BACK TO TOP
=========================================/

if(backTop){

window.addEventListener("scroll",()=>{

if(window.scrollY>700){

backTop.classList.add("show");

}else{

backTop.classList.remove("show");

}

});

backTop.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}

/==================================================
ORION V3
SCRIPT.JS
PART 3B
==================================================/

/=========================================
CUSTOM CURSOR
=========================================/

if(cursor){

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});

const hoverTargets=document.querySelectorAll(

"a,button,.shop-card,.glass-card,.feature"

);

hoverTargets.forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursor.classList.add("active");

});

item.addEventListener("mouseleave",()=>{

cursor.classList.remove("active");

});

});

}

/=========================================
SHOP CARD HOVER
=========================================/

shopCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x-rect.width/2)/18);

const rotateX=((rect.height/2-y)/18);

card.style.transform=

perspective(1000px)   rotateX(${rotateX}deg)   rotateY(${rotateY}deg)   translateY(-10px);

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

/=========================================
BUTTON RIPPLE
=========================================/

document.querySelectorAll(

"button,.primary,.secondary,.buy-button"

).forEach(btn=>{

btn.addEventListener("click",(e)=>{

const circle=document.createElement("span");

const d=Math.max(

btn.clientWidth,

btn.clientHeight

);

circle.style.width=d+"px";
circle.style.height=d+"px";

circle.style.position="absolute";
circle.style.borderRadius="50%";
circle.style.pointerEvents="none";
circle.style.background="rgba(255,255,255,.35)";
circle.style.transform="scale(0)";
circle.style.left=(e.offsetX-d/2)+"px";
circle.style.top=(e.offsetY-d/2)+"px";
circle.style.animation="ripple .7s ease-out";

btn.appendChild(circle);

setTimeout(()=>{

circle.remove();

},700);

});

});

/=========================================
TYPEWRITER
=========================================/

const cinematicTexts=document.querySelectorAll(

".story-block.cinematic p"

);

const textObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting)return;

const el=entry.target;

if(el.dataset.done)return;

el.dataset.done=true;

const original=el.textContent.trim();

el.textContent="";

let i=0;

const typing=setInterval(()=>{

el.textContent+=original.charAt(i);

i++;

if(i>=original.length){

clearInterval(typing);

}

},35);

});

},

{

threshold:.6

}

);

cinematicTexts.forEach(el=>{

textObserver.observe(el);

});

/=========================================
IMAGE FADE
=========================================/

const images=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},

{

threshold:.15

}

);

images.forEach(img=>{

img.style.opacity="0";
img.style.transform="translateY(40px)";
img.style.transition="1s";

imageObserver.observe(img);

});

/==================================================
ORION V3
SCRIPT.JS
PART 3C (FINAL)
==================================================/

/=========================================
RIPPLE KEYFRAMES
=========================================/

const rippleStyle=document.createElement("style");

rippleStyle.innerHTML=`

@keyframes ripple{

0%{

transform:scale(0);

opacity:.6;

}

100%{

transform:scale(4);

opacity:0;

}

}

`;

document.head.appendChild(rippleStyle);

/=========================================
SCROLL PROGRESS
=========================================/

const progress=document.createElement("div");

progress.style.position="fixed";
progress.style.top="0";
progress.style.left="0";
progress.style.height="3px";
progress.style.width="0%";
progress.style.zIndex="99999";
progress.style.background=
"linear-gradient(90deg,#d4b26a,#ffffff,#d4b26a)";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=

document.documentElement.scrollHeight-

window.innerHeight;

const percent=

(window.scrollY/total)*100;

progress.style.width=

percent+"%";

});

/=========================================
CURRENT NAV LINK
=========================================/

const sections=

document.querySelectorAll("section[id]");

const navLinks=

document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=

section.offsetTop-150;

if(window.scrollY>=top){

current=section.id;

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(

link.getAttribute("href")==="#"+current

){

link.classList.add("active");

}

});

});

/=========================================
MAGNETIC BUTTON
=========================================/

document.querySelectorAll(

".primary,.secondary,.buy-button,.shop-button"

).forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=

btn.getBoundingClientRect();

const x=

e.clientX-rect.left-rect.width/2;

const y=

e.clientY-rect.top-rect.height/2;

btn.style.transform=

translate(${x*.18}px,${y*.18}px);

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="";

});

});

/=========================================
FAKE ADD TO CART
=========================================/

let cart=0;

document.querySelectorAll(

".shop-card button"

).forEach(button=>{

button.addEventListener("click",()=>{

cart++;

button.innerHTML="✓ Added";

setTimeout(()=>{

button.innerHTML="Add to Cart";

},1400);

console.log(

"Cart Items:",cart

);

});

});

/=========================================
COPYRIGHT YEAR
=========================================/

const copyright=

document.querySelector(".copyright");

if(copyright){

copyright.innerHTML=

© ${new Date().getFullYear()} ORION.   Crafted Beyond The Stars.;

}

/=========================================
CONSOLE MESSAGE
=========================================/

console.log(

"%cORION",

"font-size:40px;color:#d4b26a;font-family:serif;"

);

console.log(

"Crafted Beyond The Stars."

);

console.log(

"Production Build V3"

);