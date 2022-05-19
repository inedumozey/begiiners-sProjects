let movie = document.querySelector("#movies")
let totalPrice = document.querySelector(".price")
let seats = document.querySelectorAll(".row .seat:not(.occupied)")
let count = document.querySelector(".count")

let ticketPrice = +movie.value

//functions 
//make move plura if count is more than 1
function pluralizeMovie(){
	let add_s = document.querySelector(".add_s")
	if(count.innerText > 1){
		add_s.className = "add_s add"
	}else{
		add_s.className = "add_s"
	}
}
function UpdateSelectedSeatCount(){
 	let selectedSeats = document.querySelectorAll(".row .seat.selected");
 	selectedSeatCounts = selectedSeats.length;
 	count.innerText = selectedSeatCounts;
 	totalPrice.innerText = ticketPrice * selectedSeatCounts
 }


 //event listeners

movie.addEventListener("change", (e)=>{
	 ticketPrice = +e.target.value;
	 UpdateSelectedSeatCount()
})

 document.querySelector(".seat_container").addEventListener("click", (e)=>{
 	if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")){
 		e.target.classList.toggle("selected")
 		UpdateSelectedSeatCount()
 		pluralizeMovie()
 	}
 })