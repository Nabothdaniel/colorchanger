const container = document.querySelector(".container");

const colors = ["#e74c3c", "#8e44ad","#3498db","#e67e22","#2ecc71"
];

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);

    square.addEventListener("mouseover", ()=> UI.setColor(square));
    square.addEventListener('mouseout',()=> UI.removeColor(square))
  
}

class UI{
 static setColor(el){
   const color = this.getRandomColor();
   console.log(color);
   el.style.background = color;
   el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
 }


 static removeColor(el){
  el.style.background ="#1d1d1d"
  el.style.boxShadow = '0 0 2px #000'
 }

 static getRandomColor(){
    return colors[Math.floor(Math.random()* colors.length)];
 }
}