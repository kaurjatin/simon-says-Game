let gameSeq= [];
let userSeq= [];

let highestScore =[];

let btns = ["yellow","red","purple","green"];
let started = false;
let level = 0;

let h2= document.querySelector("h2");

document.addEventListener("keypress",function(){
   if (started==false){
      console.log("game started");
      started = true;

      levelUp(); 
   }
  })

function btnFlash(btn) {
    btn.classList.add("flash");
   setTimeout(function() {
      btn.classList.remove("flash");
   },250);
}

function levelUp(){
   userSeq = [];
   level++;
   h2.innerText = `Level ${level}`;
   let randIdx = Math.floor(Math.random() * 3);
   let randColor = btns[randIdx];
   let randBtn = document.querySelector(`.${randColor}`);
   // console.log(randIdx);
   // console.log(randColor);
   // console.log(randBtn);
   gameSeq.push(randColor);
   console.log(gameSeq);
   btnFlash(randBtn);
}

function btnpress(){
   let btn = this;
   btnFlash(btn);
   let userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   console.log(userSeq);
   matchSeq(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
   btn.addEventListener("click", btnpress);
}

function matchSeq(idx) {
  
   if (userSeq[idx]=== gameSeq[idx]){
      // console.log("same val");
      if (userSeq.length == gameSeq.length){
         setTimeout(levelUp,1000);

      }
   }
   else{
      h2.innerHTML = `Game Over! Your score was<b> ${level} </b> <br> Press any key to start again.`
      document.querySelector("body").style.backgroundColor ="red" ;
      setTimeout(function(){
         document.querySelector("body").style.backgroundColor ="white" ; 
      },150);
      highestScore.push(level);
      let maxScore = Math.max(...highestScore);
      let h3= document.querySelector("h3");
      h3.innerText= `Your Highest Score: ${maxScore} `;
      reset();
   }
}
function reset(){
   started = false;
   gameSeq = [];
   userSeq = [];
   level = 0;
   
}

let resetBtn = document.querySelector(".resetbtn");
 resetBtn.addEventListener("click",function(){
   
   h2.innerText = "Reset Game! Press any key to start again."
   highestScore = [];
      reset();
 });



