// ---------------- LOGIN PAGE ----------------
const isLogin = document.querySelector(".loginPage");

if (isLogin) {
  // Check password
  window.checkPassword = function() {
    const pass = document.getElementById("pass").value;
    if (pass === "04/03/26") {
      window.location = "home.html";
    } else {
      alert("Wrong password");
    }
  }

  // Falling love texts
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
    text.innerText = lines[Math.floor(Math.random() * lines.length)];
    text.style.left = Math.random()*100 + "%";
    text.style.animationDuration = (6 + Math.random()*6) + "s";
    text.style.animationDelay = Math.random()*5 + "s";
    bg.appendChild(text);
  }
}

// ---------------- HOME PAGE ----------------
const isHome = document.querySelector(".homePage");

if (isHome) {
  // ---------- GM / GN ----------
  const gmgn = document.getElementById("gmgn");
  function updateGMGN(){
    const hour = new Date().getHours();
    gmgn.innerText = (hour >=5 && hour<18) ? "Good Morning Rita ☀️" : "Good Night Rita 🌙";
  }
  updateGMGN();

  // ---------- RELATIONSHIP COUNTER ----------
  const startDate = new Date("2026-03-04T23:19:00");
  function updateCounter(){
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff/(1000*60*60*24));
    const hours = Math.floor(diff/(1000*60*60)%24);
    const minutes = Math.floor(diff/(1000*60)%60);
    const seconds = Math.floor(diff/1000%60);
    document.getElementById("counter").innerText=
      `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds with you ❤️`;
  }
  setInterval(updateCounter,1000);
const startText = document.getElementById("startDateText");

if(startText){
startText.innerText = "U became mine since: March 21, 2026 💗";
}

  // ---------- MESSAGE OF THE DAY ----------
  const dailyMessages = [
    "Good morning Riri ☀️",
    "I miss you so much today, Rita ❤️",
    "Thinking of you always, Riti 💖",
    "Your smile brightens my day, Ritej 🌸",
    "You are my sunshine today, Ririta ☀️",
    "Hope your day is as lovely as you, Routa 💗",
    "Just a little reminder I love you, Riri ❤️",
    "You make my heart happy today, Rita 💖",
    "Forever yours, Riti 💕",
    "I can't stop thinking about you, Ritej 💞",
    "Your laughter is my favorite, Ririta 😍",
    "Every moment with you is special, Routa 💝",
    "Sending hugs to you, Riri 🤗",
    "You are my happy thought today, Rita 💗",
    "I hope your day is amazing, Riti 🌸",
    "I fall in love with you more today, Ritej ❤️",
    "You are my heart, Ririta 💖",
    "Can't wait to see you again, Routa 💕",
    "You make me smile, Riri 😍",
    "Just thinking of you makes my day, Rita 🌹",
    "You are my favorite hello, Riti 💝",
    "You are my hardest goodbye, Ritej 💞",
    "Your love makes everything better, Ririta 💖",
    "I treasure you always, Routa ❤️",
    "You are my dream come true, Riri 💗",
    "Every glance at you makes me happy, Rita 💕",
    "Loving you is my favorite thing, Riti 💝",
    "You are my today and all my tomorrows, Ritej 💖",
    "I hope you feel my love, Ririta ❤️",
    "You are my constant inspiration, Routa 💗",
    "I can't wait for our next adventure, Riri 💕",
    "You are my reason to smile today, Rita 💖",
    "You light up my world, Riti ❤️",
    "Thinking of you is my favorite hobby, Ritej 💝",
    "You are my heart's home, Ririta 💕",
    "Every moment with you is magical, Routa 💖",
    "I love imagining our future together, Riri ❤️",
    "You make even ordinary days special, Rita 💗",
    "I fall for you in new ways every day, Riti 💖",
    "You are the sweetest part of my life, Ritej 💕",
    "I love you more than all the stars, Ririta ⭐",
    "Being loved by you is a blessing, Routa 💝",
    "You make life feel complete, Riri ❤️",
    "Forever grateful for you, Rita 💖",
    "You are my favorite thought before sleep, Riti 💕",
    "You make my heart race in the best way, Ritej 💗",
    "I love that we can be ourselves, Ririta 💖",
    "You are my spark, Routa 🔥",
    "Being with you feels like magic, Riri 💝",
    "I cherish every laugh with you, Rita ❤️",
    "You are my happiness mission, Riti 💖",
    "I love you more each day, Ritej 💕",
    "You make ordinary days feel like fairy tales, Ririta 💗",
    "You are my favorite chapter in life, Routa 💖"
  ];
  const dailyMessageEl = document.getElementById("dailyMessage");
  if (dailyMessageEl){
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(),0,0)) / 1000 / 60 / 60 / 24);
    const messageIndex = dayOfYear % dailyMessages.length;
    dailyMessageEl.innerText = dailyMessages[messageIndex];
  }

  // ---------- MAIN PHOTO ----------
  const photos = [
    "images/her1.jpg","images/her2.jpg","images/her3.jpg","images/her4.jpg","images/her5.jpg",
    "images/her6.jpg","images/her7.jpg","images/her8.jpg","images/her9.jpg","images/her10.jpg",
    "images/her11.jpg","images/her12.jpg","images/her13.jpg","images/her14.jpg","images/her15.jpg"
  ];
  const mainPhoto = document.getElementById("mainPhoto");
  if(mainPhoto) mainPhoto.src = photos[Math.floor(Math.random()*photos.length)];

  // ---------- SCROLL TO SECTION ----------
  window.scrollToSection = function(id){
    const section = document.getElementById(id);
    if(!section) return;
    let topPosition = section.getBoundingClientRect().top + window.scrollY;
    let offset = (id === "gallery") ? 0 : window.innerHeight/2 - section.offsetHeight/2;
    window.scrollTo({top: topPosition - offset, behavior:"smooth"});
    document.getElementById("menu").classList.remove("active");
    document.getElementById("menuToggle").style.display = "block";
  };

  // ---------- FALLING HEARTS ----------
  const heartsContainer = document.querySelector(".hearts");
  for(let i=0;i<80;i++){
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random()*100+"%";
    heart.style.animationDuration = (3+Math.random()*5)+"s";
    heartsContainer.appendChild(heart);
  }

  // ---------- LOVE HEART PERSISTENT COUNTER ----------
let loveClicks = parseInt(localStorage.getItem("loveClicks")) || 0;
const loveHeart = document.getElementById("loveHeart");
const loveText = document.getElementById("loveText");

function updateLoveDisplay(){
  loveText.innerText = `we thought of each other ${loveClicks} times`;
}

updateLoveDisplay();

loveHeart.addEventListener("click", () => {
  loveClicks++;
  localStorage.setItem("loveClicks", loveClicks);
  updateLoveDisplay();

  loveHeart.classList.add("pulse");
  setTimeout(() => loveHeart.classList.remove("pulse"), 200);

  // small explosion hearts
  for(let i = 0; i < 6; i++){
    const smallHeart = document.createElement("div");
    smallHeart.className = "explosionHeart";
    smallHeart.innerHTML = "❤️";
    smallHeart.style.left = (Math.random()*40-20)+"px";
    smallHeart.style.top = (Math.random()*40-20)+"px";
    smallHeart.style.setProperty("--x", (Math.random()*60-30)+"px");
    smallHeart.style.setProperty("--y", (Math.random()*60-30)+"px");
    loveHeart.parentNode.appendChild(smallHeart);
    setTimeout(()=>smallHeart.remove(),500);
  }
});

  // ---------- MENU ----------
  const sideMenu = document.getElementById("menu");
  const menuBtn = document.getElementById("menuToggle");
  const menuClose = document.getElementById("menuClose");
  menuBtn.addEventListener("click",()=>{ sideMenu.classList.add("active"); menuBtn.style.display="none"; });
  menuClose.addEventListener("click",()=>{ sideMenu.classList.remove("active"); menuBtn.style.display="block"; });

  // ---------- OPEN WHEN ----------
  const openMessages = [
    // Sad
    [
      "Remember I'm always here ❤️",
      "You are not alone",
      "Everything will be okay",
      "Even on tough days, Routa is stronger than she thinks",
      "Take a deep breath, Riri 💖",
      "I'm always thinking of you, Rita",
      "You are loved, Riti",
      "Don't forget how amazing you are, Ritej",
      "This too shall pass, Ririta",
      "Sending you a big hug 🤗",
      "It's okay to cry, Routa",
      "Your feelings are valid, Riri",
      "You are important, Rita",
      "I wish I could be there with you, Riti",
      "Keep your head up, Ritej"
    ],
    // Miss Me
    [
      "I miss you too",
      "Thinking about you",
      "Wish I could hug you",
      "Can't wait to see you again, Routa",
      "Counting the moments until we meet, Riri",
      "Your smile is always on my mind, Rita",
      "I hope you're thinking of me too, Riti",
      "Every second without you feels long, Ritej",
      "I dream of you, Ririta",
      "Miss you more than words can say, Routa",
      "I wish you were here, Riri",
      "My heart is with you, Rita",
      "Can't wait for our next moment together, Riti",
      "You make everything better, Ritej",
      "Come back soon, Ririta"
    ],
    // Can't Sleep
    [
      "Close your eyes and relax",
      "Imagine me hugging you",
      "Sweet dreams",
      "Rest peacefully, Routa",
      "Let the stars watch over you, Riri",
      "I'll be in your dreams tonight, Rita",
      "Sleep tight and feel safe, Riti",
      "Let go of worries, Ritej",
      "Nighttime hugs for you, Ririta",
      "The world is calm, Routa",
      "Dream of happy moments, Riri",
      "Close your eyes and breathe, Rita",
      "Count the good memories, Riti",
      "I'm sending you peaceful thoughts, Ritej",
      "Sleep well and smile, Ririta"
    ],
    // Need Motivation
    [
      "You are amazing",
      "Keep going",
      "I believe in you",
      "Routa, you can do this 💪",
      "Never give up, Riri",
      "I know you are capable, Rita",
      "Keep pushing forward, Riti",
      "Your effort is inspiring, Ritej",
      "Every step counts, Ririta",
      "Believe in yourself, Routa",
      "You got this, Riri",
      "Stay strong, Rita",
      "You are unstoppable, Riti",
      "Keep shining, Ritej",
      "Nothing can stop you, Ririta"
    ],
    // Thinking About Us
    [
      "Our memories are precious",
      "I love our moments",
      "Forever yours",
      "Routa, I cherish every second with you",
      "I think of you constantly, Riri",
      "Our time together is magic, Rita",
      "Can't wait for more adventures with you, Riti",
      "You make life beautiful, Ritej",
      "Every moment with you is special, Ririta",
      "I smile thinking of you, Routa",
      "You are my happiness, Riri",
      "Our story is my favorite, Rita",
      "Always in my thoughts, Riti",
      "You make my heart full, Ritej",
      "I love imagining our future, Ririta"
    ]
  ];

  window.openMsg = function(i){
    const messages = openMessages[i];
    const random = messages[Math.floor(Math.random()*messages.length)];
    const box = document.getElementById("openTextDisplay");
    box.classList.remove("show");
    box.classList.add("hide");
    setTimeout(()=>{
      box.innerText = random;
      box.classList.remove("hide");
      box.classList.add("show");
    },300);
  }

  // ---------- MUSIC PLAYER ----------
const music1 = document.getElementById("apocalypseMusic");
const music2 = document.getElementById("songritaMusic");
const divaMusic = document.getElementById("divaMusic");
const needtoMusic = document.getElementById("needtoMusic");
const kissmeMusic = document.getElementById("kissmeMusic");
const letitMusic =
document.getElementById("letitMusic");

let currentMusic = null;

window.toggleMusic = function(song){
    if(currentMusic){
        currentMusic.pause();
        currentMusic.currentTime = 0;
    }
    currentMusic = 
        (song === "apocalypse") ? 
music1 :
        (song === "songrita") ? 
music2 :
        (song === "diva") ? 
divaMusic :
        (song === "needto") ? needtoMusic :
        (song === "kissme") ? kissmeMusic :
        (song === "letit") ? 
letitMusic :
        null;

    if(currentMusic) currentMusic.play();
}

window.pauseMusic = function(){
    if(currentMusic) currentMusic.pause();
}
}