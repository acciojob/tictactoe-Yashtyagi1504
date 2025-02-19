let form = document.querySelector("form");
let player1 = document.querySelector("#player-1");
let player2 = document.querySelector("#player-2");
let startBtn = document.querySelector("button");

let count = 0;

startBtn.addEventListener("click",(e)=>{
	e.preventDefault()
	let player1Name = player1.value;
	let player2Name = player2.value;

	form.style.display = "none";

	let para = document.querySelector("p");
	 para.innerText = `${player1Name}, you're up`;
	
	let divs = document.querySelectorAll(".cell");
	
	divs.forEach(div => {
		div.addEventListener("click", ()=>{
			if(div.innerText === ""){
				if(count%2 == 0){
					div.innerText = "X"
					para.innerText = `${player1Name}, you're up`;
					checkWin("X",Array.from(divs));
				}
				else{
					div.innerText = "O"
					para.innerText = `${player2Name}, you're up`;
					checkWin("O",Array.from(divs));
				}
			}
			
			count++;
		})
		
	})
})

function checkWin(value,divs){
	
}




