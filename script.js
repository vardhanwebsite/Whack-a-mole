const score=document.querySelector(".score span");
const holes=document.querySelectorAll(".hole");
const plybtn=document.querySelector(".buttons .play");
const stopbtn=document.querySelector(".buttons .stop");
const cursor=document.querySelector(".cursor img");
let jumpsound=document.getElementById("jumpsound")

window.addEventListener("mousemove" ,function(e){
    cursor.style.top=e.pageY + "px";
    cursor.style.left=e.pageX + "px"

    window.addEventListener("click", ()=>{
        cursor.style.animation="hit 0.1s ease";
        setTimeout(() => {
            cursor.style.removeProperty("animation")
        },100);
    });
});


plybtn.addEventListener("click", function(){
    plybtn.style.display="none";
    stopbtn.style.display="inline-block";

let hole;
let point=0;

const startgame=setInterval(() => {
   let arrayno=Math.floor(Math.random()*9);
   hole=holes[arrayno];
   console.log(hole);
   let image=document.createElement("img");
   image.setAttribute("src", " mole.png");
   image.setAttribute("class","mole");
   hole.appendChild(image);
 
   setTimeout(() => {
    hole.removeChild(image);
   },600);

}, 700);

window.addEventListener("click" ,(e)=>{
if(e.target===hole)
score.innerText=++point;
jumpsound.play()

})

stopbtn.addEventListener("click" ,()=>{
    clearInterval(startgame);
    plybtn.style.display="inline-block";
    stopbtn.style.display="none";
    score.innerText=0;

})

});