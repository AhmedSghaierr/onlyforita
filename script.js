

document.addEventListener("DOMContentLoaded", () => {

// ---------- LOGIN PAGE ----------
const isLogin = document.querySelector(".loginPage");
if (isLogin) {
window.checkPassword = function () {
const pass = document.getElementById("pass").value;
if (pass === "04/03/26") window.location = "home.html";
else alert("Wrong password ybhima");
}

const lines = [  
      "I love you Rita ❤️", "I miss you Rita", "I wanna hug you", "You are my favorite",  
      "Thinking about you", "You make me happy", "I can’t stop thinking about you",  
      "My heart beats for you", "You are my sunshine", "Forever yours"  
  ];  

  const bg = document.querySelector(".loveBackground");  
  if (bg) {  
      let delay = 0;  
      for (let i = 0; i < 30; i++) {  
          const text = document.createElement("div");  
          text.className = "loveText";  
          text.innerText = lines[Math.floor(Math.random() * lines.length)];  
          text.style.left = Math.random() * 100 + "%";  
          text.style.animationDuration = (7 + Math.random() * 5) + "s";  
          text.style.animationDelay = delay + "s";  
          delay += 0.3;  
          bg.appendChild(text);  
      }  
  }

}

// ---------- GM / GN ----------
const gmgn = document.getElementById("gmgn");
function updateGMGN() {
const hour = new Date().getHours();
if (hour >= 5 && hour < 18) gmgn.innerText = "Good Morning Rita ☀️";
else gmgn.innerText = "Good Night Rita 🌙";
}
updateGMGN();

// ---------- NAME TYPING ----------
const nameEl = document.getElementById("ritaName");
if (nameEl) {
const text = "Rita ❤️";
let i = 0;
function typeName() {
if (i < text.length) {
nameEl.innerHTML += text.charAt(i);
i++;
setTimeout(typeName, 120);
}
}
typeName();
}

// ---------- MESSAGE OF THE DAY ----------
const dailyMessages = [
"Thinking of you always 💖", "You make my day brighter ☀️", "Can’t wait to see you again 😘",
"You’re my favorite part of life 🌸", "Every little thing reminds me of you ❤️",
"You are my happiness 💗", "My heart beats faster when I think of you 💓", "You’re my sweet escape 🍬",
"Life is better with you 💞", "Forever in my thoughts 💌", "I love the way you laugh 😍",
"You’re my everything 🌹", "I can’t stop smiling thinking of you 😊", "You make ordinary days magical ✨",
"Just wanted to say I adore you 💕", "Every time I see you, I fall a little more ❤️"
];
const msgBox = document.getElementById("msgOfDayText");
const today = new Date();
const dayIndex = today.getDate() + today.getMonth() * 31; // unique for each day
const messageOfTheDay = dailyMessages[dayIndex % dailyMessages.length];
if (msgBox) msgBox.innerText = "${messageOfTheDay}";

// ---------- LOVE LETTER ----------
const letterBox = document.getElementById("loveLetterBox");
if (letterBox) {
const letterText =   Rita,   I don't know if this little website can show   how much you mean to me, but I wanted to try.   Every time I see you, talk to you, or even   think about you, something inside me just   feels lighter.   You are honestly one of the most beautiful   people I have ever met, not just how you look,   but how you are.   I made this small world here just for you,   so whenever you open it, you remember   that someone out there is thinking about you.  ;
letterBox.innerHTML = letterText;
}

// ---------- MAIN PHOTO ----------
const photos = Array.from(document.querySelectorAll(".photoWall img"));
const mainPhoto = document.getElementById("mainPhoto");
if (mainPhoto && photos.length > 0) {
mainPhoto.src = photos[Math.floor(Math.random() * photos.length)].src;
}

// ---------- RELATIONSHIP COUNTER ----------
const startDate = new Date("2026-03-04T23:19:00");
function updateCounter() {
const now = new Date();
const diff = now - startDate;
const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((diff / (1000 * 60)) % 60);
const seconds = Math.floor((diff / 1000) % 60);
const el = document.getElementById("counter");
if (el) el.innerText = ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds with you ❤️;
}
updateCounter();
setInterval(updateCounter, 1000);

// ---------- LOVE HEART ----------
let loveClicks = localStorage.getItem("loveClicks") ? parseInt(localStorage.getItem("loveClicks")) : 0;
const loveHeart = document.getElementById("loveHeart");
const loveNumber = document.getElementById("loveNumber");
if (loveNumber) loveNumber.innerText = loveClicks;
if (loveHeart) {
loveHeart.addEventListener("click", () => {
loveClicks++;
loveNumber.innerText = loveClicks;
localStorage.setItem("loveClicks", loveClicks);
loveHeart.classList.add("pulse");
setTimeout(() => { loveHeart.classList.remove("pulse"); }, 200);
});
}

// ---------- MENU ----------
const sideMenu = document.getElementById("menu");
const menuBtn = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");

if (menuBtn && sideMenu) {
menuBtn.addEventListener("click", () => {
sideMenu.classList.add("active");
menuBtn.style.opacity = "0";
menuBtn.style.pointerEvents = "none";
});
}

if (menuClose) {
menuClose.addEventListener("click", () => {
sideMenu.classList.remove("active");
menuBtn.style.opacity = "1";
menuBtn.style.pointerEvents = "auto";
});
}

window.scrollToSection = function(id) {
const el = document.getElementById(id);
if (el) el.scrollIntoView({ behavior: "smooth" });
sideMenu.classList.remove("active");
menuBtn.style.opacity = "1";
menuBtn.style.pointerEvents = "auto";
}

// ---------- PHOTO ZOOM ----------
const zoomModal = document.createElement("div");
zoomModal.id = "imageModal";
zoomModal.style.display = "none";
zoomModal.style.position = "fixed";
zoomModal.style.top = 0;
zoomModal.style.left = 0;
zoomModal.style.width = "100%";
zoomModal.style.height = "100%";
zoomModal.style.background = "rgba(0,0,0,0.8)";
zoomModal.style.alignItems = "center";
zoomModal.style.justifyContent = "center";
zoomModal.style.zIndex = "9999";
zoomModal.innerHTML =   <img id="zoomImg" style="max-width:90%;max-height:90%;border-radius:15px;">   <span id="closeZoom" style="position:absolute;top:20px;right:20px;font-size:32px;color:white;cursor:pointer;">&times;</span>  ;
document.body.appendChild(zoomModal);
const zoomImg = document.getElementById("zoomImg");
const closeZoom = document.getElementById("closeZoom");

document.querySelectorAll(".photoWall img").forEach(img => {
img.addEventListener("click", () => {
zoomImg.src = img.src;
zoomModal.style.display = "flex";
});
});

closeZoom.addEventListener("click", () => { zoomModal.style.display = "none"; });
zoomModal.addEventListener("click", (e) => { if (e.target === zoomModal) zoomModal.style.display = "none"; });

// ---------- OPEN WHEN MESSAGES ----------
const openMessages = {
"Sad": ["I’m here if you need me 💖","You are stronger than you think 🌟"],
"Miss Me": ["I miss you too 😘","Wish I could hug you right now 🤗"],
"Can't Sleep": ["Close your eyes, I’m thinking of you 🌙","Sweet dreams soon 💫"],
"Need Motivation": ["You can do it, I believe in you 💪","Every day is a new chance ✨"],
"Thinking About Us": ["I think about us always 💕","You make my heart smile ❤️"]
};

window.openMsg = function(i) {
const keys = ["Sad","Miss Me","Can't Sleep","Need Motivation","Thinking About Us"];
const openTextEl = document.getElementById("openText");
if (!openTextEl) return;
const key = keys[i];
const messages = openMessages[key];
if (!messages || messages.length === 0) return;
const randomMessage = messages[Math.floor(Math.random() * messages.length)];
openTextEl.style.transition = "opacity 0.3s ease";
openTextEl.style.opacity = 0;
setTimeout(() => {
openTextEl.innerText = randomMessage;
openTextEl.style.opacity = 1;
}, 300);
}

// ---------- MUSIC PLAYER ----------
const musicList = [
new Audio("apocalypse.mp3"),
new Audio("songrita.mp3")
];
let currentMusic = 0;

window.toggleMusic = function(name) {
musicList.forEach(m => m.pause());
currentMusic = name === "apocalypse" ? 0 : 1;
const music = musicList[currentMusic];
music.volume = 0.1;
music.play().catch(() => console.log("User must interact to play music"));
const fade = setInterval(() => {
if (music.volume < 1) music.volume = Math.min(music.volume + 0.05, 1);
else clearInterval(fade);
}, 200);
music.onended = () => {
currentMusic = (currentMusic + 1) % musicList.length;
musicList[currentMusic].play();
}
}

});