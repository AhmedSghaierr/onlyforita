// ==== Login Page ====
const compliments = [
  "I miss you Ririta",
  "I love you to the moon and back Rhy",
  "You’re my sunshine Riti",
  "My heart is yours Rourou",
  "Forever yours Rita",
  "You’re my everything Hby",
  "Ritej, you’re amazing",
  "Can’t stop thinking of you Ririta",
  "My love for you is endless Rhy",
  "You make me smile every day Riti"
];

if(document.getElementById('falling-compliments')){
  const container = document.getElementById('falling-compliments');
  for(let i=0;i<30;i++){
    const span = document.createElement('span');
    span.classList.add('falling-text');
    span.style.left = Math.random()*90 + 'vw';
    span.style.animationDuration = (5+Math.random()*5) + 's';
    span.textContent = compliments[Math.floor(Math.random()*compliments.length)];
    container.appendChild(span);
  }
}

// Login functionality
const loginBtn = document.getElementById('login-btn');
if(loginBtn){
  loginBtn.addEventListener('click', ()=>{
    const pw = document.getElementById('password').value;
    const error = document.getElementById('login-error');
    if(pw === '04/03/26'){
      window.location.href = 'home.html';
    } else { error.textContent='Wrong Password'; }
  });
}

// ==== Home Page ====
const greetings = ["Good Morning","Good Afternoon","Good Evening","Good Night"];
const motds = ["You are amazing!","Have a great day!","Keep smiling!","I love you Ririta","You are my everything"];
const gmEl = document.getElementById('greeting');
const motdEl = document.getElementById('motd');

if(gmEl) gmEl.textContent = greetings[Math.floor(Math.random()*greetings.length)];
if(motdEl) motdEl.textContent = motds[Math.floor(Math.random()*motds.length)];

// Her & Our Photos
const herPhotos = [];
const ourPhotos = [];
for(let i=1;i<=15;i++) herPhotos.push(`images/her${i}.jpg`);
for(let i=1;i<=5;i++) ourPhotos.push(`images/her${i}.jpg`); // reuse or add your own

function populateGrid(gridId, photos){
  const grid = document.getElementById(gridId);
  photos.forEach(src=>{
    const img = document.createElement('img');
    img.src = src;
    img.addEventListener('click', ()=>{ openModal(src); });
    grid.appendChild(img);
  });
}
populateGrid('her-photo-grid',herPhotos);
populateGrid('our-photo-grid',ourPhotos);

// Photo zoom modal
function openModal(src){
  let modal = document.getElementById('photo-modal');
  if(!modal){
    modal = document.createElement('div');
    modal.id='photo-modal';
    const img = document.createElement('img');
    modal.appendChild(img);
    modal.addEventListener('click', ()=>{ modal.style.display='none'; });
    document.body.appendChild(modal);
  }
  modal.querySelector('img').src = src;
  modal.style.display='flex';
}

// Open When Section
const openTexts = {
  sad: ["Don't be sad, I am here","I hug you from afar","Everything will be fine Ririta"],
  missme: ["I miss you too","Counting minutes until I see you","Thinking of you Riti"],
  cantsleep: ["Close your eyes, dream of me","I’m here in your thoughts","Sleep tight Rourou"],
  motivation: ["You can do anything!","Believe in yourself","I love you and I support you"]
};

document.querySelectorAll('.open-buttons button').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const type = btn.dataset.type;
    const texts = openTexts[type];
    const box = document.getElementById('open-text-box');
    box.textContent = texts[Math.floor(Math.random()*texts.length)];
  });
});

// Heart counter
const heartBtn = document.getElementById('heart-btn');
const heartCountEl = document.getElementById('heart-count');
let heartCount = localStorage.getItem('heartCount') || 0;
heartCountEl.textContent = heartCount;
heartBtn.addEventListener('click', ()=>{
  heartCount++;
  localStorage.setItem('heartCount',heartCount);
  heartCountEl.textContent = heartCount;
  // explode animation
  heartBtn.animate([{transform:'scale(1)'},{transform:'scale(1.5)'},{transform:'scale(1)'}],{duration:300});
});

// Side Menu
const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');
if(menuBtn) menuBtn.addEventListener('click', ()=>{ sideMenu.style.left='0'; });
if(closeMenu) closeMenu.addEventListener('click', ()=>{ sideMenu.style.left='-50%'; });
window.addEventListener('click',(e)=>{
  if(e.target===sideMenu) sideMenu.style.left='-50%';
});
document.querySelectorAll('#side-menu nav button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const sec = document.getElementById(btn.dataset.target);
    sec.scrollIntoView({behavior:'smooth'});
    sideMenu.style.left='-50%';
  });
});

// Matrix hearts background
const canvas = document.getElementById('matrix');
if(canvas){
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const letters = ['❤'];
  const fontSize = 20;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(0);

  function draw(){
    ctx.fillStyle='rgba(0,0,0,0.05)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle='red';
    ctx.font = fontSize+'px Arial';
    for(let i=0;i<drops.length;i++){
      ctx.fillText(letters[0],i*fontSize,drops[i]*fontSize);
      if(drops[i]*fontSize>canvas.height && Math.random()>0.975) drops[i]=0;
      drops[i]++;
    }
  }
  setInterval(draw,50);
}

// Resize canvas
window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});