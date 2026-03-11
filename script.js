// ---------- LOGIN PAGE ----------
const isLogin = document.querySelector(".loginPage");
const isHome = document.querySelector(".homePage");

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
document.addEventListener("DOMContentLoaded", () => {

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
  "Thinking of you always 💖",
  "You make my day brighter ☀️",
  "Can’t wait to see you again 😘",
  "You’re my favorite part of life 🌸",
  "Every little thing reminds me of you ❤️",
  "You are my happiness 💗",
  "My heart beats faster when I think of you 💓",
  "You’re my sweet escape 🍬",
  "Life is better with you 💞",
  "Forever in my thoughts 💌",
  "I love the way you laugh 😍",
  "You’re my everything 🌹",
  "I can’t stop smiling thinking of you 😊",
  "You make ordinary days magical ✨",
  "Just wanted to say I adore you 💕",
  "Thinking of you always 💖",
  "You make my day brighter ☀️",
  "Can’t wait to see you again 😘",
  "You’re my favorite part of life 🌸",
  "Every little thing reminds me of you ❤️",
  "You are my happiness 💗",
  "My heart beats faster when I think of you 💓",
  "You’re my sweet escape 🍬",
  "Life is better with you 💞",
  "Forever in my thoughts 💌",
  "I love the way you laugh 😍",
  "You’re my everything 🌹",
  "I can’t stop smiling thinking of you 😊",
  "You make ordinary days magical ✨",
  "Just wanted to say I adore you 💕",
  "Every time I see you, I fall a little more ❤️",
  "You’re my sunshine on cloudy days ☀️",
  "I can’t help but think about you 💖",
  "You’re my favorite notification 💌",
  "I hope your day is as sweet as your smile 🍯",
  "Every love song reminds me of you 🎶",
  "I dream of you even when I’m awake 😘",
  "You’ve stolen my heart completely 💓",
  "Being with you feels like home 🏡",
  "You’re the best part of my story 💞",
  "I can’t wait to make more memories with you 💗",
  "You are my little daily miracle 🌸",
  "Just thinking of you makes me happy 😊",
  "You’re the reason I look forward to tomorrow 💖",
  "I smile whenever I see your name 💕",
  "Even in my dreams, I’m with you 🌙",
  "You make my heart do silly flips 😍",
  "I can’t get enough of you ❤️",
  "You’re the cherry on top of my life 🍒",
  "Everything reminds me of you 💌",
  "I wish I could hug you right now 🤗",
  "My favorite thought is you 💖",
  "You’re my sweetest distraction 🍬",
  "I love every little thing about you 💕",
  "I’m addicted to thinking of you 😘",
  "You make my world brighter 🌟",
  "I’m counting the seconds until I see you 💗",
  "You’re my favorite hello and hardest goodbye 💓",
  "Even silence feels magical with you 🌸",
  "You’re the smile I didn’t know I needed 😊",
  "You’re in my heart, always 💖",
  "I can’t imagine a day without thinking of you 💕",
  "You’re my forever favorite 💞"
];

const today = new Date().toISOString().slice(0, 10); // e.g., "2026-03-11"
const lastMessageDate = localStorage.getItem("lastMessageDate");
let messageOfTheDay;

if (lastMessageDate === today) {
    // Use the previous message
    messageOfTheDay = localStorage.getItem("messageOfTheDay");
} else {
    // Pick a new random message
    messageOfTheDay = dailyMessages[Math.floor(Math.random() * dailyMessages.length)];
    localStorage.setItem("messageOfTheDay", messageOfTheDay);
    localStorage.setItem("lastMessageDate", today);
}

// Display the message
const quoteEl = document.getElementById("quote");
if (quoteEl) quoteEl.innerText = messageOfTheDay;

  // ---------- LOVE LETTER ----------
  const letterBox = document.getElementById("loveLetterBox");
  if (letterBox) {
      const letterText = `
Rita,
I don't know if this little website can show
how much you mean to me, but I wanted to try.
Every time I see you, talk to you, or even
think about you, something inside me just
feels lighter.
You are honestly one of the most beautiful
people I have ever met, not just how you look,
but how you are.
I made this small world here just for you,
so whenever you open it, you remember
that someone out there is thinking about you.
`;
   const letterBox = document.getElementById("loveLetterBox");
if (letterBox) {
    letterBox.innerHTML = letterText; // directly show the full letter
}
  }

  // ---------- MAIN PHOTO ----------
  const photos = Array.from(document.querySelectorAll(".photoWall img"));
  const mainPhoto = document.getElementById("mainPhoto");
  if (mainPhoto) mainPhoto.src = photos[Math.floor(Math.random() * photos.length)].src;

  // ---------- FALLING HEARTS ----------
  const heartsContainer = document.querySelector(".hearts");
  for (let i = 0; i < 100; i++) {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerHTML = "❤️";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.animationDuration = (3 + Math.random() * 5) + "s";
      heart.style.fontSize = (14 + Math.random() * 10) + "px";
      heartsContainer?.appendChild(heart);
  }

  // ---------- RELATIONSHIP COUNTER ----------
  const startDate = new Date("2026-03-04T23:19:00");
  function updateCounter() {
      const now = new Date();
      const diff = now - startDate;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(diff / (1000 * 60 * 60) % 24);
      const minutes = Math.floor(diff / (1000 * 60) % 60);
      const seconds = Math.floor(diff / 1000 % 60);
      const el = document.getElementById("counter");
      if (el) el.innerText = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds with you ❤️`;
  }
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

if(menuBtn && sideMenu){

menuBtn.addEventListener("click",()=>{
sideMenu.classList.add("active");

menuBtn.style.opacity="0";
menuBtn.style.pointerEvents="none";
});

}

if(menuClose){

menuClose.addEventListener("click",()=>{
sideMenu.classList.remove("active");

menuBtn.style.opacity="1";
menuBtn.style.pointerEvents="auto";
});

}

window.scrollToSection=function(id){

const el=document.getElementById(id);

if(el) el.scrollIntoView({behavior:"smooth"});

sideMenu.classList.remove("active");

menuBtn.style.opacity="1";
menuBtn.style.pointerEvents="auto";

}

  // ---------- MUSIC ----------
  const music1 = new Audio("apocalypse.mp3");
  const music2 = new Audio("songrita.mp3");
  const musicList = [music1, music2];
  musicList.forEach(m => m.volume = 0);
  let currentMusic = 0;

  function fadeInMusic() {
      let volume = 0;
      const fade = setInterval(() => {
          if (volume < 1) {
              volume += 0.05;
              musicList[currentMusic].volume = volume;
          } else clearInterval(fade);
      }, 200);
  }

  function playNextMusic() {
      currentMusic = (currentMusic + 1) % musicList.length;
      musicList[currentMusic].play();
      fadeInMusic();
      musicList[currentMusic].onended = playNextMusic;
  }

  window.toggleMusic = function (name) {
      musicList.forEach(m => m.pause());
      currentMusic = name === "apocalypse" ? 0 : 1;
      musicList[currentMusic].play();
      fadeInMusic();
      musicList[currentMusic].onended = playNextMusic;
  }

  window.pauseMusic = () => musicList[currentMusic].pause();

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
  zoomModal.innerHTML = `
      <img id="zoomImg" style="max-width:90%;max-height:90%;border-radius:15px;">
      <span id="closeZoom" style="position:absolute;top:20px;right:20px;font-size:32px;color:white;cursor:pointer;">&times;</span>
  `;
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
      "Sad": ["Remember I'm always here ❤️","You are never alone","Take a deep breath, I love you","I believe in you","I'm just a message away","Everything will be okay","You are stronger than you think","Smile my love","Sending hugs","I miss your smile"],
      "Miss Me": ["I'm missing you too","Counting the minutes until I see you","Wish I was there hugging you","I think about you all the time","You are my favorite person","I love our moments together","Can't wait to see you","My heart beats for you","I dream of you","You complete my day"],
      "Can't Sleep": ["Imagine me hugging you","Close your eyes love","Count the stars for me","I'll be in your dreams","Breathe slowly relax","Think about our happy moments","I love you endlessly","You are my moonlight","I'm with you in spirit","Sweet dreams love"],
      "Need Motivation": ["You are amazing","You can do anything","Believe in yourself","I'm proud of you","Keep going love","Nothing can stop you","You inspire me","Your smile brightens the day","I believe in us","Stay strong my love"],
      "Thinking About Us": ["You are my favorite story","Our memories are precious","I love our adventures","You make life magical","Forever yours","Every moment with you is perfect","I cherish you","You make me happy","Our love is endless","I can't wait for more memories"]
  };

  window.openMsg = function(i) {
      const keys = ["Sad","Miss Me","Can't Sleep","Need Motivation","Thinking About Us"];
      const openTextEl = document.getElementById("openText");
      if (!openTextEl) return;
      const key = keys[i];
      const messages = openMessages[key];
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      openTextEl.style.opacity = 0;
      setTimeout(() => {
          openTextEl.innerText = randomMessage;
          openTextEl.style.opacity = 1;
      }, 200);
  }

});