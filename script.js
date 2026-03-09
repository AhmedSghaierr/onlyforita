// PASSWORD
function checkPassword(){
  if(document.getElementById("pass").value === "04/03/26"){
    window.location = "home.html";
  } else { alert("Wrong password 😏"); }
}

// DAY / NIGHT MODE
function updateMode(){
  let h = new Date().getHours();
  if(h>=6 && h<18) document.body.classList.add("day");
  else document.body.classList.add("night");
}
updateMode();

// FALLING HEARTS
for(let i=0;i<100;i++){
  let heart=document.createElement("div");
  heart.className="heart";
  heart.style.left=Math.random()*100+"%";
  heart.style.animationDuration=(3+Math.random()*5)+"s";
  document.querySelector(".hearts")?.appendChild(heart);
}

// MAIN PHOTO + RANDOM GREETING
let photos=[...Array(15)].map((_,i)=>`images/her${i+1}.jpg`);
let mainPhoto=document.getElementById("mainPhoto");
if(mainPhoto) mainPhoto.src=photos[Math.floor(Math.random()*photos.length)];
let greetings=["Hey Riri","Asslema Ririta","Buenos Noches Mi Amore","Hiiii Riti","Hello Beautiful"];
document.getElementById("photoGreeting").innerText=greetings[Math.floor(Math.random()*greetings.length)];

// LOVE HEART
let loveClicks=0;
let loveTexts=["I love you ❤️","Forever","All yours","You’re mine ❤️","My heart","Always love"];
function clickLove(){
  loveClicks++;
  document.getElementById("loveNumber").innerText=loveClicks;
  let heartEl=document.getElementById("loveHeart");
  heartEl.classList.add("pulse");
  setTimeout(()=>heartEl.classList.remove("pulse"),200);
  let text=document.createElement("div");
  text.className="floatingText";
  text.innerText=loveTexts[Math.floor(Math.random()*loveTexts.length)];
  heartEl.appendChild(text);
  setTimeout(()=>text.remove(),1500);
}
document.getElementById("loveHeart").addEventListener("click", clickLove);

// MENU NAVIGATION
function showSection(id){
  document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
  let el=document.getElementById(id);
  if(el) el.classList.add("active");
}

// LOVE LETTERS
let letters=["You are my sunshine ❤️","Thinking of you all the time","Forever yours","You make me happy","I can’t stop dreaming of you"];
document.getElementById("loveLetterText").innerText=letters[Math.floor(Math.random()*letters.length)];

// NOTES
let notes=["Take care","Eat on time","You're only mine","Don't forget to smile","I miss you"];
let notesContainer=document.getElementById("notes");
notes.forEach(n=>{
  let div=document.createElement("div");
  div.textContent=n; div.style.padding="10px"; div.style.margin="5px"; div.style.borderRadius="10px";
  div.style.background="#ffb6c1"; notesContainer.appendChild(div);
});

// GALLERY HER PHOTOS
let photoWall=document.querySelector(".photoWall");
photoWall.innerHTML="";
photos.forEach(p=>{
  let img=document.createElement("img");
  img.src=p;
  img.onclick=()=>{
    img.style.transform="scale(1.5)";
    setTimeout(()=>img.style.transform="scale(1)",500);
    let messages=["You're so pretty","I love this picture of you","My favorite girl","You look perfect here","I can't stop looking at you"];
    document.getElementById("photoMessage").innerText=messages[Math.floor(Math.random()*messages.length)];
  };
  photoWall.appendChild(img);
});

// OPEN WHEN
let openMessages={
"Sad":["Remember I'm always here ❤️","You are never alone","Take a deep breath, I love you","I believe in you","Everything will be okay"],
"Miss Me":["I'm missing you too","Counting the minutes","Wish I was hugging you","I think about you all the time","Can't wait to see you"],
"Can't Sleep":["Imagine me hugging you","Close your eyes, love","Count the stars for me","I'll be in your dreams","Sweet dreams, love"],
"Need Motivation":["You are amazing","You can do anything","I’m proud of you","Keep going, love","Stay strong, my love"],
"Thinking About Us":["You are my favorite story","Our memories are precious","I love our adventures","Forever yours","Every moment with you is perfect"]
};
function openMsg(i){
  let keys=Object.keys(openMessages);
  let key=keys[i];
  let messages=openMessages[key];
  let randomMessage=messages[Math.floor(Math.random()*messages.length)];
  document.getElementById("openText").innerText=randomMessage;
}

// MUSIC
let music=document.getElementById("musicPlayer");
function toggleMusic(){music.paused?music.play():music.pause();}

// GM / GN
let gmLines=["Good morning beautiful ☀️ I hope today brings you happiness","Rise and shine my love ❤️","Morning hug for you 😘","Hello sunshine","Have a great day","You are my joy","Love you today and always","Good morning my angel","Smile my love","A new day for us"];
let gnLines=["Good night my love 🌙 Sleep tight ❤️","Sweet dreams my angel 😴","Night kiss for you 💋","Sleep well my darling","Rest my love","I’m with you in spirit","Dream of us tonight","Good night beautiful","I love you","Sleep tight"];
function updateGMGN(){
  let el=document.getElementById("gmgn");
  if(!el) return;
  let h=new Date().getHours();
  el.innerText=(h>=6 && h<18)?gmLines[Math.floor(Math.random()*gmLines.length)]:gnLines[Math.floor(Math.random()*gnLines.length)];
}
updateGMGN();
setInterval(updateGMGN,3600000);

// RANDOM QUOTE
let quotes=["You’re worth it ❤️","I’m proud of you","I love you more every day","You make me smile","You’re my everything","My heart is yours","You are amazing"];
function updateQuote(){let quote=document.getElementById("quote"); if(quote) quote.innerText=quotes[Math.floor(Math.random()*quotes.length)];}
updateQuote();
setInterval(updateQuote,86400000);

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
  if(el) el.innerText=days+" days "+hours+" hours "+minutes+" minutes "+seconds+" seconds with you ❤️";
}
setInterval(updateCounter,1000);