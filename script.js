function checkPassword(){

if(document.getElementById("pass").value==="nhebekbrsha"){

window.location="home.html"

}else{

alert("Wrong password nigga")

}

}

/* LOVE TEXT BACKGROUND */

let lines=[

"I love you Rita ❤️",
"I miss you Rita",
"I wanna hug you",
"You are my favorite person",
"Thinking about you",
"You make me happy"

]

for(let i=0;i<25;i++){

let text=document.createElement("div")

text.className="loveText"

text.innerText=lines[Math.floor(Math.random()*lines.length)]

text.style.left=Math.random()*100+"%"

text.style.animationDuration=(8+Math.random()*6)+"s"

document.querySelector(".loveBackground")?.appendChild(text)

}

/* RANDOM MAIN PHOTO */

let photos=[

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

]


if(document.getElementById("mainPhoto")){

let random=photos[Math.floor(Math.random()*photos.length)]

document.getElementById("mainPhoto").src=random

}

/* FALLING HEARTS */

for(let i=0;i<40;i++){

let heart=document.createElement("div")

heart.className="heart"

heart.innerHTML="❤️"

heart.style.left=Math.random()*100+"%"

heart.style.animationDuration=(5+Math.random()*5)+"s"

document.querySelector(".hearts")?.appendChild(heart)

}

/* RELATIONSHIP COUNTER */

let startDate=new Date("2025-03-04T23:19:00")

function updateCounter(){

let now=new Date()

let diff=now-startDate

let days=Math.floor(diff/(1000*60*60*24))

let hours=Math.floor(diff/(1000*60*60)%24)

let minutes=Math.floor(diff/(1000*60)%60)

let el=document.getElementById("counter")

if(el){

el.innerText=

days+" days "+hours+" hours "+minutes+" minutes with you ❤️"

}

}

setInterval(updateCounter,1000)

/* OPEN WHEN */

let openMessages=[

"If you're sad remember I'm always here for you ❤️",

"If you miss me I'm probably missing you too.",

"If you can't sleep imagine me hugging you.",

"You are stronger than you think and I'm proud of you.",

"Our story is my favorite story."

]

function openMsg(i){

document.getElementById("openText").innerText=openMessages[i]

}

/* LOVE COUNTER */

let loveClicks=0

function clickLove(){

loveClicks++

document.getElementById("loveCount").innerText=loveClicks

}

/* MUSIC */

window.onload=()=>{

let music=document.getElementById("music")

if(music){

music.volume=0.4

music.play()

}

}