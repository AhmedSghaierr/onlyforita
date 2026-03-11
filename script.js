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
      if (hour >= 5 && hour < 18) gmgn.innerText = "Good Morning Riti ☀️";
      else gmgn.innerText = "Good Night Routa🌙";
  }
  updateGMGN();

  // ---------- NAME TYPING ----------
  const nameEl = document.getElementById("ritaName");
  if (nameEl) {
      const text = "That's The LOML💞";
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
    "You’re my forever favorite 💞",
    "Being with you is pure joy 🌟",
    "I love the way you look at me 💖",
    "You make everything better 💗",
    "Every moment with you is special 💞",
    "I treasure you more than words can say 💕",
    "You are my dream come true 🌸",
    "I can’t wait to hold you again 🤗",
    "You are my endless happiness 💓",
    "Thinking of you brings a smile 😊",
    "You are my heart’s delight 💖",
    "You complete me in every way 💗",
    "I adore you more each day 🌹",
    "You’re my guiding star ✨",
    "I love us 💞",
    "You’re my favorite everything 💖",
    "My love for you grows constantly ❤️",
    "You’re my safe place 🏡",
    "Life is sweeter with you 💕",
    "I miss you even when you’re here 😘",
    "You are perfection to me 💖",
    "You make every day amazing 🌟",
    "I’m yours completely 💗",
    "You’re my heart’s treasure 💞",
    "I love our story 💖",
    "You are my reason to smile 😊",
    "You’re my best thought of the day 💕",
    "I cherish every moment with you 💓",
    "You are my favorite hello 💌",
    "You’re my happiness booster 💗",
    "I dream about our future 💖",
    "You make me a better person 🌸",
    "I love being with you 💞",
    "You make life beautiful ❤️",
    "You’re my joy and my peace 💖",
    "I’m so lucky to have you 💗",
    "You’re my heart’s melody 🎶",
    "I love loving you 💕",
    "Every day with you is magic ✨",
    "You are my heart’s song 💖",
    "You make me complete 💓",
    "I’m thinking of you always 💗",
    "You’re my heart’s home 🏡",
    "I adore your soul 🌸",
    "You’re my heart’s sunshine ☀️",
    "I love our connection 💖",
    "You make everything brighter 💞",
    "I treasure your love 💗",
    "You’re my sweetest dream💞"
  ];

  const msgBox = document.getElementById("msgOfDayText");
  const today = new Date();
  const dayIndex = today.getDate() + today.getMonth() * 31; // unique for each day
  const messageOfTheDay = dailyMessages[dayIndex % dailyMessages.length];
  if (msgBox) msgBox.innerText = `"${messageOfTheDay}"`;

// ---------- HEARTS BACKGROUND ----------
const heartsContainer = document.querySelector(".hearts");
if (heartsContainer) {
    const heartSymbols = ["❤️", "💖", "💗", "💘", "💞", "💝"];
    for (let i = 0; i < 50; i++) { // number of hearts
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (12 + Math.random() * 24) + "px"; // random sizes
        heart.style.animationDuration = (5 + Math.random() * 5) + "s";
        heart.style.animationDelay = (Math.random() * 5) + "s";
        heartsContainer.appendChild(heart);
    }
}

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
      if (el) el.innerText = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds with you ❤️`;
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
    "Sad": [
        "Hey love, it’s okay to feel down sometimes 💖 I’m right here with you.",
        "Even on sad days, remember you’re amazing and loved 🌸",
        "Take a deep breath, everything will be okay 💕",
        "I wish I could hug you right now 🤗",
        "You’re stronger than you think, and I believe in you 💗",
        "Sad moments pass, but my love for you is forever ❤️",
        "Let yourself feel, and know I’m thinking of you 💌",
        "I’m sending you a virtual cuddle 🤗💖",
        "Even the darkest clouds can’t hide your light 🌟",
        "You’re my sunshine, even on cloudy days ☀️"
    ],
    "Miss Me": [
        "I miss you too 😘 Can’t wait to see you again!",
        "Close your eyes and imagine my arms around you 🤗",
        "Every moment without you feels a little empty 💓",
        "Thinking of you makes me feel closer ❤️",
        "I’m counting the seconds until we’re together 💗",
        "You’re always in my heart, no matter the distance 💌",
        "Miss me as much as I miss you 😘",
        "Even when we’re apart, we’re still together in spirit 💕",
        "I’d teleport to you right now if I could 😍",
        "You’re my favorite thought at every moment 💖"
    ],
    "Can't Sleep": [
        "Lay back and think of me, I’ll keep you company in your dreams 🌙",
        "Close your eyes and imagine us laughing together 😘",
        "I’m here even in the quiet of the night 💖",
        "Count all the good memories we’ve shared 💗",
        "The stars are shining just for you tonight ✨",
        "Take deep breaths and relax, I’m thinking of you 🌸",
        "Imagine me holding your hand 🤗",
        "You deserve peaceful sleep, my love 💕",
        "I hope you dream of us having the best adventures together 💌",
        "Even nights are brighter with you in my heart ❤️"
    ],
    "Need Motivation": [
        "You are capable of amazing things 💪",
        "Believe in yourself — I believe in you 💖",
        "Every small step counts, keep going 🌟",
        "Remember why you started and keep pushing 💗",
        "You’ve got this, I’m cheering for you ❤️",
        "Even tough days make you stronger 💪💓",
        "Don’t give up, the best is yet to come 💕",
        "You’re amazing, don’t forget that 🌸",
        "I’m proud of everything you do 💖",
        "Your dreams are worth every effort 💗"
    ],
    "Thinking About Us": [
        "I was just thinking about the first time we met ❤️",
        "Every memory with you makes me smile 😊",
        "I love the way we laugh together 💕",
        "Even little things we do together mean so much 💖",
        "You and me = my favorite story 💗",
        "Thinking of you makes my heart happy 💌",
        "Every moment with you feels magical 🌟",
        "I love our silly jokes and deep talks 😘",
        "I can’t wait for all the memories we’re going to make 💖",
        "You’re my favorite thought, always 💗"
    ]
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
let isPlaying = false;

window.toggleMusic = function(name) {
    // Stop all music first
    musicList.forEach(m => m.pause());

    // Pick song
    currentMusic = name === "apocalypse" ? 0 : 1;
    const music = musicList[currentMusic];
    music.volume = 0.1;

    // Toggle play/pause
    if (!isPlaying) {
        music.play().catch(() => console.log("User must interact to play music"));
        const fade = setInterval(() => {
            if (music.volume < 1) music.volume = Math.min(music.volume + 0.05, 1);
            else clearInterval(fade);
        }, 200);
        music.onended = () => {
            currentMusic = (currentMusic + 1) % musicList.length;
            musicList[currentMusic].play();
        }
        isPlaying = true;
    } else {
        music.pause();
        isPlaying = false;
    }
}