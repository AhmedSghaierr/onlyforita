// ===== PASSWORD PAGE FUNCTION =====
function checkPassword(){
  if(document.getElementById("pass")?.value === "04/03/26"){
    window.location = "home.html";
  } else { alert("Wrong password 😅"); }
}

// ===== FALLING HEARTS AS IMAGE =====
for(let i=0;i<60;i++){
  let heart=document.createElement("img");
  heart.src="images/falling_hearts.png";
  heart.className="heart";
  heart.style.left=Math.random()*100+"%";
  heart.style.width=(20+Math.random()*20)+"px";
  heart.style.animationDuration=(3+Math.random()*4)+"s";
  document.querySelector(".hearts")?.appendChild(heart);
}

// ===== RELATIONSHIP COUNTER =====
let startDate=new Date("2026-03-04T23:19:00");
function updateCounter(){
  let now=new Date();
  let diff=now-startDate;
  let days=Math.floor(diff/(1000*60*60*24));
  let hours=Math.floor(diff/(1000*60*60)%24);
  let minutes=Math.floor(diff/(1000*60)%60);
  let seconds=Math.floor(diff/1000%60);
  let el=document.getElementById("counter");
  if(el) el.innerText=`${days} days ${hours}h ${minutes}m ${seconds}s with you ❤️`;
}
setInterval(updateCounter,1000);

// ===== RANDOM MAIN PHOTO =====
let photos=[
  "images/her1.jpg","images/her2.jpg","images/her3.jpg","images/her4.jpg","images/her5.jpg",
  "images/her6.jpg","images/her7.jpg","images/her8.jpg","images/her9.jpg","images/her10.jpg",
  "images/her11.jpg","images/her12.jpg","images/her13.jpg","images/her14.jpg","images/her15.jpg"
];
if(document.getElementById("mainPhoto")){
  let random=photos[Math.floor(Math.random()*photos.length)];
  document.getElementById("mainPhoto").src=random;
}

// ===== LOVE HEART CLICK =====
let loveClicks=0;
let loveTexts=["I love you ❤️","Forever","All yours","You’re mine ❤️","My heart","Always love"];
function clickLove(){
  loveClicks++;
  document.getElementById("loveNumber").innerText=loveClicks;

  let heartEl=document.getElementById("loveHeart");
  heartEl.classList.add("pulse");
  setTimeout(()=>heartEl.classList.remove("pulse"),200);

  // Floating text
  let text=document.createElement("div");
  text.className="floatingText";
  text.innerText=loveTexts[Math.floor(Math.random()*loveTexts.length)];
  heartEl.appendChild(text);
  setTimeout(()=>text.remove(),1500);
}
document.getElementById("loveHeart")?.addEventListener("click", clickLove);

// ===== OPEN WHEN MESSAGES =====
let openMessages={
"Sad":["Remember I'm always here ❤️","You are never alone","Take a deep breath, I love you","I believe in you"],
"Miss Me":["I'm missing you too","Counting the minutes until I see you","Wish I was there hugging you"],
"Can't Sleep":["Imagine me hugging you","Close your eyes, love","Count the stars for me"],
"Need Motivation":["You are amazing","You can do anything","Believe in yourself","I’m proud of you"],
"Thinking About Us":["You are my favorite story","Our memories are precious","I love our adventures","You make life magical"]
};
function openMsg(i){
  let keys=["Sad","Miss Me","Can't Sleep","Need Motivation","Thinking About Us"];
  let key=keys[i];
  let messages=openMessages[key];
  let randomMessage=messages[Math.floor(Math.random()*messages.length)];
  document.getElementById("openText").innerText=randomMessage;
}

// ===== GM/GN =====
let gmLines=["Good morning beautiful ☀️","Rise and shine my love ❤️","Morning hug for you 😘"];
let gnLines=["Good night my love 🌙","Sweet dreams my angel 😴","Night kiss for you 💋"];
function updateGMGN(){
  let el=document.getElementById("gmgn");
  if(!el) return;
  let hours=new Date().getHours();
  el.innerText=(hours>=6 && hours<18)
    ? gmLines[Math.floor(Math.random()*gmLines.length)]
    : gnLines[Math.floor(Math.random()*gnLines.length)];
}
updateGMGN();
setInterval(updateGMGN,3600000);

// ===== RANDOM QUOTES =====
let quotes=[
  "You’re worth it ❤️","I’m proud of you","I love you more every day","You make me smile","You’re my everything"
];
function updateQuote(){
  let quote=document.getElementById("quoteBox");
  if(quote) quote.innerText=quotes[Math.floor(Math.random()*quotes.length)];
}
updateQuote();
setInterval(updateQuote,86400000);

// ===== LOVE LETTERS =====
let loveLetters=[
`My dearest love,\nYour smile is my sunshine,\nEvery moment with you is magic,\nI adore your soul,\nYour eyes mesmerize me,\nForever yours,\nLove always.`,
`Beloved,\nYour laugh makes my heart dance,\nI think of you endlessly,\nYour beauty is unmatched,\nYou complete me,\nMy heart is yours,\nEternally devoted.`
];
function updateLoveLetter(){
  let box=document.getElementById("loveLetterBox");
  if(box) box.innerText=loveLetters[Math.floor(Math.random()*loveLetters.length)];
}
updateLoveLetter();
setInterval(updateLoveLetter,60000); // change every minute

// ===== MUSIC PANEL =====
let music=document.getElementById("music");
let panel=document.getElementById("musicPanel");
let songs=["songrita.mp3","apocalypse.mp3"];
let currentSong=0;

function toggleMusic(){
  if(music.paused){ music.play(); }
  else { music.pause(); }
}

function nextSong(){
  currentSong=(currentSong+1)%songs.length;
  music.src=songs[currentSong];
  music.play();
  document.getElementById("currentSong").innerText=songs[currentSong];
}
function prevSong(){
  currentSong=(currentSong-1+songs.length)%songs.length;
  music.src=songs[currentSong];
  music.play();
  document.getElementById("currentSong").innerText=songs[currentSong];
}

function togglePanel(){
  panel.classList.toggle("closed");
}