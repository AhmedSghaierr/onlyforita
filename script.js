// -------------------
// COMBINED SCRIPT.JS
// -------------------

// Detect page
const isLogin = document.querySelector(".loginPage");
const isHome = document.querySelector(".container");

// ------------------- LOGIN PAGE -------------------
if(isLogin){
  window.checkPassword = function(){
    const pass = document.getElementById("pass").value;
    if(pass === "04/03/26") window.location = "home.html";
    else alert("Wrong password ybhima");
  }

  // Falling love text
  const lines = [
    "I love you Rita ❤️","I miss you Rita","I wanna hug you","You are my favorite",
    "Thinking about you","You make me happy","I can’t stop thinking about you",
    "My heart beats for you","You are my sunshine","Forever yours","You are amazing",
    "My queen ❤️","I dream of you","You make me smile","Love you endlessly"
  ];
  const bg = document.querySelector(".loveBackground");
  if(bg){
    let delay = 0;
    for(let i=0;i<30;i++){
      const text = document.createElement("div");
      text.className = "loveText";
      text.innerText = lines[Math.floor(Math.random()*lines.length)];
      text.style.left = Math.random()*100+"%";
      text.style.animationDuration = (7+Math.random()*5)+"s";
      text.style.animationDelay = delay+"s";
      delay += 0.3;
      bg.appendChild(text);
    }
  }
}

// ------------------- HOME PAGE -------------------
if(isHome){

  // RANDOM MAIN PHOTO
  const photos = [
    "images/her1.jpg","images/her2.jpg","images/her3.jpg","images/her4.jpg","images/her5.jpg",
    "images/her6.jpg","images/her7.jpg","images/her8.jpg","images/her9.jpg","images/her10.jpg",
    "images/her11.jpg","images/her12.jpg","images/her13.jpg","images/her14.jpg","images/her15.jpg"
  ];
  const mainPhoto = document.getElementById("mainPhoto");
  if(mainPhoto) mainPhoto.src = photos[Math.floor(Math.random()*photos.length)];

  // FALLING HEARTS
  const heartsContainer = document.querySelector(".hearts");
  for(let i=0;i<100;i++){
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random()*100+"%";
    heart.style.animationDuration = (3+Math.random()*5)+"s";
    heart.style.fontSize = (14+Math.random()*10)+"px";
    heartsContainer?.appendChild(heart);
  }

  // RELATIONSHIP COUNTER
  const startDate = new Date("2026-03-04T23:19:00");
  function updateCounter(){
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff/(1000*60*60*24));
    const hours = Math.floor(diff/(1000*60*60)%24);
    const minutes = Math.floor(diff/(1000*60)%60);
    const seconds = Math.floor(diff/1000%60);
    const el = document.getElementById("counter");
    if(el) el.innerText = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds with you ❤️`;
  }
  setInterval(updateCounter, 1000);

  // OPEN WHEN MESSAGES
  const openMessages = {
    "Sad":["Remember I'm always here ❤️","You are never alone","Take a deep breath, I love you","I believe in you","I'm just a message away","Everything will be okay","You are stronger than you think","Smile, my love","Sending hugs","I miss your smile"],
    "Miss Me":["I'm missing you too","Counting the minutes until I see you","Wish I was there hugging you","I think about you all the time","You are my favorite person","I love our moments together","Can't wait to see you","My heart beats for you","I dream of you","You complete my day"],
    "Can't Sleep":["Imagine me hugging you","Close your eyes, love","Count the stars for me","I'll be in your dreams","Breathe slowly, relax","Think about our happy moments","I love you endlessly","You are my moonlight","I'm with you in spirit","Sweet dreams, love"],
    "Need Motivation":["You are amazing","You can do anything","Believe in yourself","I’m proud of you","Keep going, love","Nothing can stop you","You inspire me","Your smile brightens the day","I believe in us","Stay strong, my love"],
    "Thinking About Us":["You are my favorite story","Our memories are precious","I love our adventures","You make life magical","Forever yours","Every moment with you is perfect","I cherish you","You make me happy","Our love is endless","I can’t wait for more memories"]
  };
  function openMsg(i){
    const keys=["Sad","Miss Me","Can't Sleep","Need Motivation","Thinking About Us"];
    const key = keys[i];
    const messages = openMessages[key];
    const randomMessage = messages[Math.floor(Math.random()*messages.length)];
    document.getElementById("openText").innerText = randomMessage;
  }

  // LOVE HEART CLICK
  let loveClicks = 0;
  const loveTexts = ["I love you ❤️","Forever","All yours","You’re mine ❤️","My heart","Always love"];
  const loveHeart = document.getElementById("loveHeart");
  loveHeart.addEventListener("click", ()=>{
    loveClicks++;
    document.getElementById("loveNumber").innerText = loveClicks;

    // Heart pulse
    loveHeart.classList.add("pulse");
    setTimeout(()=>loveHeart.classList.remove("pulse"), 200);

    // Floating text
    const text = document.createElement("div");
    text.className = "floatingText";
    text.innerText = loveTexts[Math.floor(Math.random()*loveTexts.length)];
    loveHeart.appendChild(text);
    setTimeout(()=>text.remove(),1500);

    // Tiny hearts
    for(let i=0;i<5;i++){
      const tiny = document.createElement("div");
      tiny.className = "tinyHeart";
      tiny.style.setProperty("--randX", Math.random());
      tiny.style.left="50%";
      tiny.style.top="50%";
      loveHeart.appendChild(tiny);
      setTimeout(()=>tiny.remove(),1000);
    }
  });

  // ----------------- MENU -----------------
  const sideMenu = document.getElementById("sideMenu");
  const menuBtn = document.getElementById("menuBtn");
  menuBtn.addEventListener("click", ()=>{
    if(sideMenu.style.width === "50%") sideMenu.style.width = "0";
    else sideMenu.style.width = "50%";
  });

  // MENU SCROLL BUTTONS
  document.querySelectorAll(".menuBtnScroll").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const targetId = btn.dataset.target;
      const target = document.getElementById(targetId);
      target.scrollIntoView({behavior:"smooth"});
      sideMenu.style.width = "0"; // close menu after scroll
    });
  });

  // ----------------- MUSIC -----------------
  const music1 = new Audio("apocalypse.mp3");
  const music2 = new Audio("songrita.mp3");
  let currentMusic = 0;
  music1.loop = false;
  music2.loop = false;
  const musicList = [music1, music2];

  function playNextMusic(){
    currentMusic = (currentMusic+1) % musicList.length;
    musicList[currentMusic].play();
    musicList[currentMusic].onended = playNextMusic;
  }
  window.playMusic = function(){
    musicList[currentMusic].play();
    musicList[currentMusic].onended = playNextMusic;
  }
  window.pauseMusic = function(){
    musicList[currentMusic].pause();
  }

  // AUTO START MUSIC
  window.addEventListener("load", playMusic);

  // ----------------- PHOTO ZOOM -----------------
  const galleryImages = document.querySelectorAll(".photoWall img");
  const zoomModal = document.createElement("div");
  zoomModal.id = "zoomModal";
  zoomModal.style.display = "none";
  zoomModal.style.position = "fixed";
  zoomModal.style.top = "0";
  zoomModal.style.left = "0";
  zoomModal.style.width = "100%";
  zoomModal.style.height = "100%";
  zoomModal.style.background = "rgba(0,0,0,0.8)";
  zoomModal.style.display = "flex";
  zoomModal.style.alignItems = "center";
  zoomModal.style.justifyContent = "center";
  zoomModal.style.zIndex = "9999";
  zoomModal.innerHTML = `<img id="zoomImg" style="max-width:90%; max-height:90%; border-radius:15px; box-shadow:0 0 20px #fff;"><span id="closeZoom" style="position:absolute; top:20px; right:20px; font-size:32px; color:white; cursor:pointer;">&times;</span>`;
  document.body.appendChild(zoomModal);

  const zoomImg = document.getElementById("zoomImg");
  const closeZoom = document.getElementById("closeZoom");

  galleryImages.forEach(img=>{
    img.addEventListener("click", ()=>{
      zoomImg.src = img.src;
      zoomModal.style.display = "flex";
    });
  });
  closeZoom.addEventListener("click", ()=>{ zoomModal.style.display = "none"; });
  zoomModal.addEventListener("click", e=>{ if(e.target === zoomModal) zoomModal.style.display="none"; });
}