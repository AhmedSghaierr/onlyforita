// PASSWORD CHECK
function checkPassword(){
  if(document.getElementById("pass")){
    if(document.getElementById("pass").value==="OnlyForRita❤️"){
      window.location="home.html";
    }else{
      alert("Wrong password nigga");
    }
  }
}

// FLOATING HEARTS
for(let i=0;i<20;i++){
  let heart=document.createElement("div");
  heart.className="heart";
  heart.innerHTML="❤";
  heart.style.left=Math.random()*100+"%";
  heart.style.animationDuration=(5+Math.random()*5)+"s";
  document.body.appendChild(heart);
}

// MORNING/NIGHT MESSAGES
let morning=[
"Good morning beautiful ☀️ I hope today brings you happiness.",
"Wake up my favorite person ❤️",
"I hope your day is as lovely as your smile.",
"You make my world brighter.",
"Good morning my love.",
"Rise and shine my angel 🌸",
"Another day, another smile for you ❤️",
"Good morning beautiful soul 🌞",
"Hello sunshine 🌅",
"Start your day knowing I love you ❤️"
];
let night=[
"Good night my love 🌙 Sleep well.",
"Dream sweet dreams tonight ❤️",
"Close your eyes and remember I love you.",
"I'm thinking of you tonight.",
"Rest well beautiful.",
"Good night my angel 🌌",
"Sleep tight my love ❤️",
"May your dreams be as beautiful as you 🌙",
"Night night my darling 🌟",
"Sweet dreams my love ❤️"
];

// MORNING/NIGHT AUTOMATIC
if(document.getElementById("message")){
  let hour=new Date().getHours();
  let day=new Date().getDate();

  if(hour>=5 && hour<18){
    document.body.style.background="linear-gradient(135deg,#ff9a9e,#fecfef)";
    document.querySelector(".sunrise").style.display="block";
    document.querySelector(".rain").style.display="none";
    document.getElementById("message").innerText=morning[day%morning.length];
  }else{
    document.body.style.background="linear-gradient(135deg,#141E30,#243B55)";
    document.getElementById("stars").style.display="block";
    document.querySelector(".sunrise").style.display="none";
    document.querySelector(".rain").style.display="block";
    document.getElementById("message").innerText=night[day%night.length];
    document.getElementById("music").play();
  }
  document.getElementById("title").innerText="Hi Rita ❤️";
}

// RELATIONSHIP COUNTER
let startDate=new Date("2025-03-04T23:19:00");
function updateCounter(){
  if(document.getElementById("counter")){
    let now=new Date();
    let diff=now-startDate;
    let days=Math.floor(diff/(1000*60*60*24));
    let hours=Math.floor(diff/(1000*60*60)%24);
    let minutes=Math.floor(diff/(1000*60)%60);
    document.getElementById("counter").innerText=
    "We've known each other for "+days+" days "+hours+" hours "+minutes+" minutes ❤️";
  }
}
setInterval(updateCounter,1000);

// OPEN WHEN MESSAGES
let openMessages=[
"If you're sad remember I'm always here for you ❤️",
"If you miss me, I'm probably missing you too.",
"If you can't sleep imagine me hugging you."
];
function openMsg(i){
  document.getElementById("openText").innerText=openMessages[i];
}

// CLICKABLE LOVE HEART
let loveClicks=0;
function clickLove(){
  loveClicks++;
  document.getElementById("loveCount").innerText=loveClicks;
  let temp=document.createElement("div");
  temp.innerText="I love you ❤️";
  temp.style.position="absolute";
  temp.style.left=(50+Math.random()*40-20)+"%";
  temp.style.top=(50+Math.random()*40-20)+"%";
  temp.style.fontSize="20px";
  temp.style.color="#ff4d88";
  document.body.appendChild(temp);
  setTimeout(()=>{temp.remove()},1500);
                            }
