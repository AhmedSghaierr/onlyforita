// PASSWORD PAGE
function checkPassword(){
  if(document.getElementById("pass").value==="nhebekbrsha"){
    window.location="home.html";
  }else{alert("Wrong password nigga")}
}

// FALLING LOVE TEXT
let lines = [
"I love you Rita ❤️","I miss you Rita","I wanna hug you","You are my favorite","Thinking about you","You make me happy",
"I can’t stop thinking about you","My heart beats for you","You are my sunshine","Forever yours","You are amazing","My queen ❤️",
"I dream of you","You make me smile","Love you endlessly"
];
for(let i=0;i<50;i++){
  let text=document.createElement("div");
  text.className="loveText";
  text.innerText=lines[Math.floor(Math.random()*lines.length)];
  text.style.left=Math.random()*100+"%";
  text.style.animationDuration=(5+Math.random()*7)+"s";
  document.querySelector(".loveBackground")?.appendChild(text);
}

// RANDOM MAIN PHOTO
let photos=[
"images/her1.jpg","images/her2.jpg","images/her3.jpg","images/her4.jpg","images/her5.jpg",
"images/her6.jpg","images/her7.jpg","images/her8.jpg","images/her9.jpg","images/her10.jpg",
"images/her11.jpg","images/her12.jpg","images/her13.jpg","images/her14.jpg","images/her15.jpg"
];
if(document.getElementById("mainPhoto")){
  let random=photos[Math.floor(Math.random()*photos.length)];
  document.getElementById("mainPhoto").src=random;
}

// FALLING HEARTS
for(let i=0;i<100;i++){
  let heart=document.createElement("div");
  heart.className="heart";
  heart.innerHTML="❤️";
  heart.style.left=Math.random()*100+"%";
  heart.style.animationDuration=(3+Math.random()*5)+"s";
  heart.style.fontSize=(14+Math.random()*10)+"px";
  document.querySelector(".hearts")?.appendChild(heart);
}

// RELATIONSHIP COUNTER
let startDate=new Date("2026-03-04T23:19:00");
function updateCounter(){
  let now=new Date();
  let diff=now-startDate;
  let days=Math.floor(diff/(1000*60*60*24));
  let hours=Math.floor(diff/(1000*60*60)%24);
  let minutes=Math.floor(diff/(1000*60)%60);
  let seconds=Math.floor(diff/1000%60);
  let el=document.getElementById("counter");
  if(el){el.innerText=days+" days "+hours+" hours "+minutes+" minutes "+seconds+" seconds with you ❤️"}
}
setInterval(updateCounter,1000);

// OPEN WHEN
let openMessages={
"Sad":["Remember I'm always here ❤️","You are never alone","Take a deep breath, I love you","I believe in you","I'm just a message away","Everything will be okay","You are stronger than you think","Smile, my love","Sending hugs","I miss your smile"],
"Miss Me":["I'm missing you too","Counting the minutes until I see you","Wish I was there hugging you","I think about you all the time","You are my favorite person","I love our moments together","Can't wait to see you","My heart beats for you","I dream of you","You complete my day"],
"Can't Sleep":["Imagine me hugging you","Close your eyes, love","Count the stars for me","I'll be in your dreams","Breathe slowly, relax","Think about our happy moments","I love you endlessly","You are my moonlight","I'm with you in spirit","Sweet dreams, love"],
"Need Motivation":["You are amazing","You can do anything","Believe in yourself","I’m proud of you","Keep going, love","Nothing can stop you","You inspire me","Your smile brightens the day","I believe in us","Stay strong, my love"],
"Thinking About Us":["You are my favorite story","Our memories are precious","I love our adventures","You make life magical","Forever yours","Every moment with you is perfect","I cherish you","You make me happy","Our love is endless","I can’t wait for more memories"]
};
function openMsg(i){
  let keys=["Sad","Miss Me","Can't Sleep","Need Motivation","Thinking About Us"];
  let key=keys[i];
  let messages=openMessages[key];
  let randomMessage=messages[Math.floor(Math.random()*messages.length)];
  document.getElementById("openText").innerText=randomMessage;
}

// LOVE HEART CLICK
let loveClicks=0;
function clickLove(){
  loveClicks++;
  document.getElementById("loveCount").innerText=loveClicks;
}

// MUSIC TOGGLE
let music=document.getElementById("music");
function toggleMusic(){
  if(music.paused){music.play();}
  else{music.pause();}
}

// RANDOM QUOTE
let quotes=[
"You’re worth it ❤️","I’m proud of you","I love you more every day","You make me smile","You’re my everything","My heart is yours","You are amazing"
];
function updateQuote(){
  let quote=document.getElementById("quote");
  if(quote){quote.innerText=quotes[Math.floor(Math.random()*quotes.length)];}
}
updateQuote();
setInterval(updateQuote,86400000); // changes every day

// GOOD MORNING / GOOD NIGHT
let gmLines=[
"Good morning beautiful ☀️ I hope today brings you happiness.","Rise and shine my love ❤️","Morning hug for you 😘"
];
let gnLines=[
"Good night my love 🌙 Sleep tight ❤️","Sweet dreams my angel 😴","Night kiss for you 💋"
];
function updateGMGN(){
  let el=document.getElementById("gmgn");
  if(!el) return;
  let now=new Date();
  let hours=now.getHours();
  if(hours>=6 && hours<18){
    el.innerText=gmLines[Math.floor(Math.random()*gmLines.length)];
  } else {
    el.innerText=gnLines[Math.floor(Math.random()*gnLines.length)];
  }
}
updateGMGN();
setInterval(updateGMGN,3600000); // update hourly