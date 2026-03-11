‎// ---------------- PAGE DETECT ----------------
‎const isLogin = document.querySelector(".loginPage");
‎const isHome = document.querySelector(".homePage");
‎
‎// ---------------- LOGIN PAGE ----------------
‎if (isLogin) {
‎window.checkPassword = function () {
‎const pass = document.getElementById("pass").value;
‎if (pass === "04/03/26") window.location = "home.html";
‎else alert("Wrong password ybhima");
‎}
‎
‎const lines = [  
‎    "I love you Rita ❤️", "I miss you Rita", "I wanna hug you", "You are my favorite",  
‎    "Thinking about you", "You make me happy", "I can’t stop thinking about you",  
‎    "My heart beats for you", "You are my sunshine", "Forever yours"  
‎];  
‎
‎const bg = document.querySelector(".loveBackground");  
‎if (bg) {  
‎    let delay = 0;  
‎    for (let i = 0; i < 30; i++) {  
‎        const text = document.createElement("div");  
‎        text.className = "loveText";  
‎        text.innerText = lines[Math.floor(Math.random() * lines.length)];  
‎        text.style.left = Math.random() * 100 + "%";  
‎        text.style.animationDuration = (7 + Math.random() * 5) + "s";  
‎        text.style.animationDelay = delay + "s";  
‎        delay += 0.3;  
‎        bg.appendChild(text);  
‎    }  
‎}
‎
‎}
‎
‎// ---------------- HOME PAGE ----------------
‎if (isHome) {
‎
‎// ---------- GM / GN ----------  
‎const gmgn = document.getElementById("gmgn");  
‎function updateGMGN() {  
‎    const hour = new Date().getHours();  
‎    if (hour >= 5 && hour < 18) gmgn.innerText = "Good Morning Rita ☀️";  
‎    else gmgn.innerText = "Good Night Rita 🌙";  
‎}  
‎updateGMGN();  
‎
‎// ---------- NAME TYPING ----------  
‎const nameEl = document.getElementById("ritaName");  
‎if (nameEl) {  
‎    const text = "Rita ❤️";  
‎    let i = 0;  
‎    function typeName() {  
‎        if (i < text.length) {  
‎            nameEl.innerHTML += text.charAt(i);  
‎            i++;  
‎            setTimeout(typeName, 120);  
‎        }  
‎    }  
‎    typeName();  
‎}
‎
‎// ---------- LOVE LETTER ----------
‎const letterText = `
‎Rita,
‎
‎I don't know if this little website can show
‎how much you mean to me, but I wanted to try.
‎
‎Every time I see you, talk to you, or even
‎think about you, something inside me just
‎feels lighter.
‎
‎You are honestly one of the most beautiful
‎people I have ever met, not just how you look,
‎but how you are.
‎
‎I made this small world here just for you,
‎so whenever you open it, you remember
‎that someone out there is thinking about you.
‎
‎— Ahmed ❤️
‎`;
‎
‎const letterBox = document.getElementById("loveLetterBox");
‎
‎if (letterBox) {
‎letterBox.innerHTML = ""; // Clear any old content first
‎
‎// Append inside the box only  
‎        letterBox.innerHTML += letterText.charAt(i) === "\n" ? "<br>" : letterText.charAt(i);  
‎        i++;  
‎        setTimeout(typeLetter, 25);  
‎    }  
‎}  
‎
‎typeLetter();
‎
‎}
‎
‎// ---------- RANDOM MAIN PHOTO ----------  
‎const photos = [  
‎    "images/her1.jpg","images/her2.jpg","images/her3.jpg","images/her4.jpg","images/her5.jpg",  
‎    "images/her6.jpg","images/her7.jpg","images/her8.jpg","images/her9.jpg","images/her10.jpg",  
‎    "images/her11.jpg","images/her12.jpg","images/her13.jpg","images/her14.jpg","images/her15.jpg"  
‎];  
‎const mainPhoto = document.getElementById("mainPhoto");  
‎if (mainPhoto) mainPhoto.src = photos[Math.floor(Math.random() * photos.length)];  
‎
‎// ---------- FALLING HEARTS ----------  
‎const heartsContainer = document.querySelector(".hearts");  
‎for (let i = 0; i < 100; i++) {  
‎    const heart = document.createElement("div");  
‎    heart.className = "heart";  
‎    heart.innerHTML = "❤️";  
‎    heart.style.left = Math.random() * 100 + "%";  
‎    heart.style.animationDuration = (3 + Math.random() * 5) + "s";  
‎    heart.style.fontSize = (14 + Math.random() * 10) + "px";  
‎    heartsContainer?.appendChild(heart);  
‎}  
‎
‎// ---------- RELATIONSHIP COUNTER ----------  
‎const startDate = new Date("2026-03-04T23:19:00");  
‎function updateCounter() {  
‎    const now = new Date();  
‎    const diff = now - startDate;  
‎    const days = Math.floor(diff / (1000 * 60 * 60 * 24));  
‎    const hours = Math.floor(diff / (1000 * 60 * 60) % 24);  
‎    const minutes = Math.floor(diff / (1000 * 60) % 60);  
‎    const seconds = Math.floor(diff / 1000 % 60);  
‎    const el = document.getElementById("counter");  
‎    if (el) el.innerText = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds with you ❤️`;  
‎}  
‎setInterval(updateCounter, 1000);  
‎
‎// ---------- LOVE HEART ----------  
‎let loveClicks = 0;  
‎const loveHeart = document.getElementById("loveHeart");  
‎if (loveHeart) {  
‎    loveHeart.addEventListener("click", () => {  
‎        loveClicks++;  
‎        document.getElementById("loveNumber").innerText = loveClicks;  
‎        loveHeart.classList.add("pulse");  
‎        setTimeout(() => { loveHeart.classList.remove("pulse"); }, 200);  
‎    });  
‎}  
‎
‎// ---------- MENU ----------  
‎const sideMenu = document.getElementById("menu");  
‎const menuBtn = document.getElementById("menuToggle");  
‎if (menuBtn && sideMenu) {  
‎    menuBtn.addEventListener("click", () => {  
‎        if (sideMenu.style.left === "0px") sideMenu.style.left = "-260px";  
‎        else sideMenu.style.left = "0px";  
‎    });  
‎}  
‎
‎// ---------- SCROLL ----------  
‎window.scrollToSection = function (id) {  
‎    const el = document.getElementById(id);  
‎    if (el) el.scrollIntoView({ behavior: "smooth" });  
‎    sideMenu.style.left = "-260px";  
‎}  
‎
‎// ---------- MUSIC ----------  
‎const music1 = new Audio("apocalypse.mp3");  
‎const music2 = new Audio("songrita.mp3");  
‎const musicList = [music1, music2];  
‎let currentMusic = 0;  
‎musicList.forEach(m => m.volume = 0);  
‎
‎function fadeInMusic() {  
‎    let volume = 0;  
‎    const fade = setInterval(() => {  
‎        if (volume < 1) {  
‎            volume += 0.05;  
‎            musicList[currentMusic].volume = volume;  
‎        } else clearInterval(fade);  
‎    }, 200);  
‎}  
‎
‎function playNextMusic() {  
‎    currentMusic = (currentMusic + 1) % musicList.length;  
‎    musicList[currentMusic].play();  
‎    fadeInMusic();  
‎    musicList[currentMusic].onended = playNextMusic;  
‎}  
‎
‎window.toggleMusic = function (name) {  
‎    musicList.forEach(m => m.pause());  
‎    if (name === "apocalypse") currentMusic = 0;  
‎    if (name === "songrita") currentMusic = 1;  
‎    musicList[currentMusic].play();  
‎    fadeInMusic();  
‎    musicList[currentMusic].onended = playNextMusic;  
‎}  
‎
‎window.pauseMusic = function () { musicList[currentMusic].pause(); }  
‎
‎window.addEventListener("click", () => {  
‎    musicList[currentMusic].play();  
‎    fadeInMusic();  
‎}, { once: true });  
‎
‎// ---------- PHOTO ZOOM ----------  
‎const galleryImages = document.querySelectorAll(".photoWall img");  
‎const zoomModal = document.createElement("div");  
‎zoomModal.id = "imageModal";  
‎zoomModal.style.display = "none";  
‎zoomModal.style.position = "fixed";  
‎zoomModal.style.top = "0";  
‎zoomModal.style.left = "0";  
‎zoomModal.style.width = "100%";  
‎zoomModal.style.height = "100%";  
‎zoomModal.style.background = "rgba(0,0,0,0.8)";  
‎zoomModal.style.alignItems = "center";  
‎zoomModal.style.justifyContent = "center";  
‎zoomModal.style.zIndex = "9999";  
‎zoomModal.innerHTML = `  
‎    <img id="zoomImg" style="max-width:90%;max-height:90%;border-radius:15px;">  
‎    <span id="closeZoom" style="position:absolute;top:20px;right:20px;font-size:32px;color:white;cursor:pointer;">&times;</span>  
‎`;  
‎document.body.appendChild(zoomModal);  
‎const zoomImg = document.getElementById("zoomImg");  
‎const closeZoom = document.getElementById("closeZoom");  
‎
‎galleryImages.forEach(img => {  
‎    img.addEventListener("click", () => {  
‎        zoomImg.src = img.src;  
‎        zoomModal.style.display = "flex";  
‎    });  
‎});  
‎
‎closeZoom.addEventListener("click", () => { zoomModal.style.display = "none"; });  
‎zoomModal.addEventListener("click", (e) => { if (e.target === zoomModal) zoomModal.style.display = "none"; });  
‎
‎// ---------- OPEN WHEN MESSAGES ----------  
‎const openMessages = {  
‎    "Sad": ["Remember I'm always here ❤️", "You are never alone", "Take a deep breath, I love you", "I believe in you", "I'm just a message away", "Everything will be okay", "You are stronger than you think", "Smile my love", "Sending hugs", "I miss your smile"],  
‎    "Miss Me": ["I'm missing you too", "Counting the minutes until I see you", "Wish I was there hugging you", "I think about you all the time", "You are my favorite person", "I love our moments together", "Can't wait to see you", "My heart beats for you", "I dream of you", "You complete my day"],  
‎    "Can't Sleep": ["Imagine me hugging you", "Close your eyes love", "Count the stars for me", "I'll be in your dreams", "Breathe slowly relax", "Think about our happy moments", "I love you endlessly", "You are my moonlight", "I'm with you in spirit", "Sweet dreams love"],  
‎    "Need Motivation": ["You are amazing", "You can do anything", "Believe in yourself", "I'm proud of you", "Keep going love", "Nothing can stop you", "You inspire me", "Your smile brightens the day", "I believe in us", "Stay strong my love"],  
‎    "Thinking About Us": ["You are my favorite story", "Our memories are precious", "I love our adventures", "You make life magical", "Forever yours", "Every moment with you is perfect", "I cherish you", "You make me happy", "Our love is endless", "I can't wait for more memories"]  
‎};  
‎
‎window.openMsg = function (i) {  
‎    const keys = ["Sad", "Miss Me", "Can't Sleep", "Need Motivation", "Thinking About Us"];  
‎    const openTextEl = document.getElementById("openText");  
‎    if (!openTextEl) return;  
‎    const key = keys[i];  
‎    const messages = openMessages[key];  
‎    const randomMessage = messages[Math.floor(Math.random() * messages.length)];  
‎
‎    openTextEl.style.opacity = 0;  
‎    setTimeout(() => {  
‎        openTextEl.innerText = randomMessage;  
‎        openTextEl.style.opacity = 1;  
‎    }, 200);  
‎}
‎
‎}