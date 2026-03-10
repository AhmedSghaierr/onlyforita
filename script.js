// ---------- LOGIN PAGE ----------
if(isLogin){
  // PASSWORD CHECK
  const enterBtn = document.getElementById("enterBtn");
  if(enterBtn){
    enterBtn.addEventListener("click", function(){
      const pass = document.getElementById("pass").value;
      if(pass==="04/03/26") window.location="home.html";
      else alert("Wrong password 😅");
    });
  }

  // FALLING LOVE TEXT
  const lines = ["I love you Rita ❤️","I miss you Rita","I wanna hug you","You are my favorite",
  "Thinking about you","You make me happy","I can’t stop thinking about you","My heart beats for you",
  "You are my sunshine","Forever yours","You are amazing","My queen ❤️","I dream of you","You make me smile","Love you endlessly"];
  
  const bg = document.querySelector(".loveBackground");
  if(bg){
    let delay = 0;
    for(let i=0;i<30;i++){
      const text = document.createElement("div");
      text.className="loveText";
      text.innerText = lines[Math.floor(Math.random()*lines.length)];
      text.style.left=Math.random()*100+"%";
      text.style.animationDuration=(7+Math.random()*5)+"s";
      text.style.animationDelay=delay+"s";
      delay += 0.3;
      bg.appendChild(text);
    }
  }
}

// ---------- HOME PAGE ----------
if(isHome){

  // Random main photo
  const photos=["images/her1.jpg","images/her2.jpg","images/her3.jpg","images/her4.jpg","images/her5.jpg","images/her6.jpg","images/her7.jpg","images/her8.jpg","images/her9.jpg","images/her10.jpg","images/her11.jpg","images/her12.jpg","images/her13.jpg","images/her14.jpg","images/her15.jpg"];
  const mainPhoto = document.getElementById("mainPhoto");
  if(mainPhoto) mainPhoto.src=photos[Math.floor(Math.random()*photos.length)];

  // Falling hearts
  const heartContainer = document.querySelector(".hearts");
  if(heartContainer){
    for(let i=0;i<100;i++){
      const heart = document.createElement("img");
      heart.src="images/falling_hearts.png";
      heart.style.position="absolute";
      heart.style.left=Math.random()*100+"%";
      heart.style.width=(14+Math.random()*10)+"px";
      heart.style.animation=`fall ${(3+Math.random()*5)}s linear infinite`;
      heartContainer.appendChild(heart);
    }
  }

  // Relationship counter
  const startDate=new Date("2026-03-04T23:19:00");
  function updateCounter(){
    const now=new Date();
    const diff=now-startDate;
    const days=Math.floor(diff/(1000*60*60*24));
    const hours=Math.floor(diff/(1000*60*60)%24);
    const minutes=Math.floor(diff/(1000*60)%60);
    const seconds=Math.floor(diff/1000%60);
    const el=document.getElementById("counter");
    if(el) el.innerText=`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds with you ❤️`;
  }
  setInterval(updateCounter,1000);
  updateCounter();

  // GM/GN
  const gmLines=["Good morning beautiful ☀️ I hope today brings you happiness.","Rise and shine my love ❤️","Morning hug for you 😘"];
  const gnLines=["Good night my love 🌙 Sleep tight ❤️","Sweet dreams my angel 😴","Night kiss for you 💋"];
  function updateGMGN(){
    const el=document.getElementById("gmgn");
    if(!el) return;
    const h=(new Date()).getHours();
    el.innerText=(h>=6 && h<18)?gmLines[Math.floor(Math.random()*gmLines.length)]:gnLines[Math.floor(Math.random()*gnLines.length)];
  }
  updateGMGN();
  setInterval(updateGMGN,3600000);

  // Love heart click
  let loveClicks=0;
  const loveHeart=document.getElementById("loveHeart");
  const loveNumber=document.getElementById("loveNumber");
  const loveTexts=["I love you ❤️","Forever","All yours","You’re mine ❤️","My heart","Always love"];
  if(loveHeart){
    loveHeart.addEventListener("click",()=>{
      loveClicks++;
      if(loveNumber) loveNumber.innerText=loveClicks;
      loveHeart.classList.add("pulse");
      setTimeout(()=>loveHeart.classList.remove("pulse"),200);

      // Floating text
      const text=document.createElement("div");
      text.className="floatingText";
      text.innerText=loveTexts[Math.floor(Math.random()*loveTexts.length)];
      loveHeart.appendChild(text);
      setTimeout(()=>text.remove(),1500);
    });
  }

  // Open When
  const openMessages = {
    "Sad":["Remember I'm always here ❤️","You are never alone","Take a deep breath, I love you","I believe in you","I'm just a message away","Everything will be be okay","Smile, my love","Sending hugs","I miss your smile"],
    "Miss Me":["I'm missing you too","Counting the minutes until I see you","Wish I was there hugging you","I think about you all the time","You are my favorite person","I love our moments together","Can't wait to see you","My heart beats for you","I dream of you","You complete my day"],
    "Can't Sleep":["Imagine me hugging you","Close your eyes, love","Count the stars for me","I'll be in your dreams","Breathe slowly, relax","Think about our happy moments","I love you endlessly","You are my moonlight","I'm with you in spirit","Sweet dreams, love"],
    "Need Motivation":["You are amazing","You can do anything","Believe in yourself","I’m proud of you","Keep going, love","Nothing can stop you","You inspire me","Your smile brightens the day","I believe in us","Stay