const isLogin = document.querySelector(".loginPage");
const isHome = document.querySelector(".homePage");

// ---------------- LOGIN PAGE ----------------

if (isLogin) {

window.checkPassword = function () {

const pass = document.getElementById("pass").value;

if (pass === "04/03/26") {
window.location = "home.html";
}
else {
alert("Wrong password");
}

}

const lines = [
"I love you Rita ❤️",
"I miss you Rita",
"You are my favorite",
"Thinking about you",
"You make me happy",
"My heart beats for you",
"You are my sunshine",
"Forever yours"
];

const bg = document.querySelector(".loveBackground");

for (let i = 0; i < 40; i++) {

const text = document.createElement("div");

text.className = "loveText";

text.innerText = lines[Math.floor(Math.random()*lines.length)];

text.style.left = Math.random()*100 + "%";

text.style.animationDuration = (6 + Math.random()*6) + "s";

text.style.animationDelay = Math.random()*5 + "s";

bg.appendChild(text);

}

}


if(isHome){

const gmgn=document.getElementById("gmgn");

function updateGMGN(){

const hour=new Date().getHours();

if(hour>=5 && hour<18)
gmgn.innerText="Good Morning Rita ☀️";
else
gmgn.innerText="Good Night Rita 🌙";

}

updateGMGN();


const nameEl=document.getElementById("ritaName");

if(nameEl){

const text="Rita ❤️";

let i=0;

function type(){

if(i<text.length){

nameEl.innerHTML+=text.charAt(i);

i++;

setTimeout(type,120);

}

}

type();

}


const photos=[
"images/her1.jpg",
"images/her2.jpg",
"images/her3.jpg",
"images/her4.jpg",
"images/her5.jpg",
"images/her6.jpg",
"images/her7.jpg",
"images/her8.jpg",
"images/her9.jpg",
"images/her10.jpg",
"images/her11.jpg",
"images/her12.jpg",
"images/her13.jpg",
"images/her14.jpg",
"images/her15.jpg"
];

const mainPhoto=document.getElementById("mainPhoto");

if(mainPhoto)
mainPhoto.src=photos[Math.floor(Math.random()*photos.length)];


const heartsContainer=document.querySelector(".hearts");

for(let i=0;i<80;i++){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.animationDuration=(3+Math.random()*5)+"s";

heartsContainer.appendChild(heart);

}


const startDate=new Date("2026-03-04T23:19:00");

function updateCounter(){

const now=new Date();

const diff=now-startDate;

const days=Math.floor(diff/(1000*60*60*24));
const hours=Math.floor(diff/(1000*60*60)%24);
const minutes=Math.floor(diff/(1000*60)%60);
const seconds=Math.floor(diff/1000%60);

document.getElementById("counter").innerText=
`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds with you ❤️`;

}

setInterval(updateCounter,1000);


let loveClicks=0;

const heart=document.getElementById("loveHeart");

heart.addEventListener("click",()=>{

loveClicks++;

document.getElementById("loveNumber").innerText=loveClicks;

heart.classList.add("pulse");

setTimeout(()=>heart.classList.remove("pulse"),200);

});


const sideMenu=document.getElementById("menu");

const menuBtn=document.getElementById("menuToggle");

menuBtn.addEventListener("click",()=>{

sideMenu.classList.toggle("active");

});


window.scrollToSection=function(id){

document.getElementById(id).scrollIntoView({behavior:"smooth"});

sideMenu.classList.remove("active");

}


const openMessages=[
["Remember I'm always here ❤️","You are not alone","Everything will be okay"],
["I miss you too","Thinking about you","Wish I could hug you"],
["Close your eyes and relax","Imagine me hugging you","Sweet dreams"],
["You are amazing","Keep going","I believe in you"],
["Our memories are precious","I love our moments","Forever yours"]
];


window.openMsg=function(i){

const messages=openMessages[i];

const random=messages[Math.floor(Math.random()*messages.length)];

const box=document.getElementById("openText");

box.style.opacity=0;

setTimeout(()=>{

box.innerText=random;

box.style.opacity=1;

},200);

}
// ---------------- MUSIC PLAYER ----------------

const music1 = document.getElementById("apocalypseMusic");
const music2 = document.getElementById("songritaMusic");

let currentMusic = null;

window.toggleMusic = function(song){

if(currentMusic){
currentMusic.pause();
currentMusic.currentTime = 0;
}

if(song === "apocalypse"){
currentMusic = music1;
}

if(song === "songrita"){
currentMusic = music2;
}

if(currentMusic){
currentMusic.play();
}

}

window.pauseMusic = function(){

if(currentMusic){
currentMusic.pause();
}

}
}