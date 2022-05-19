let movie = document.querySelector("#movies")
let totalPrice = document.querySelector(".price")
let seats = document.querySelectorAll(".row .seat:not(.occupied)")
let count = document.querySelector(".count");
let add_s = document.querySelector(".add_s")

	populateUi()
	addys()


let ticketPrice = +movie.value

//functions 
//make move plura if count is more than 1
let set = "seats"
let set2 = "seat"
function pluralizeMovie(){
	if(count.innerText > 1){
		add_s.className = "add_s add"
		if(add_s.classList.contains("add")){
			localStorage.setItem("add_s", set)
		}

		// localStorage.setItem("add_s", "s")
	}else{
		add_s.className = "add_s"
		if(add_s.classList.contains("add_s")){
			localStorage.setItem("add_s", set2)
		}
		// localStorage.setItem("add_s", "")
	}
}

function UpdateSelectedSeatCount(){
 	let selectedSeats = document.querySelectorAll(".row .seat.selected");
 	selectedSeatCounts = selectedSeats.length;
 	count.innerText = selectedSeatCounts;
 	totalPrice.innerText = ticketPrice * selectedSeatCounts

 	//convert the nodelist to array so that higher other function can be applied
 	// let selectedSeatArr = [].slice.call(selectedSeats)
 	// let selectedSeatArr = Array.from(selectedSeats)
 	// or using spread operator below
 	let selectedSeatArr = [...selectedSeats]
 	//get the index by maping over them
 	let selectedSeatIndex = selectedSeatArr.map(seat=>{
 		return [...seats].indexOf(seat)
 	})
 	//save to localstorage
 	localStorage.setItem("selectedSeatsIndex", JSON.stringify(selectedSeatIndex))
 	localStorage.setItem("selectedSeatsIndexStays", JSON.stringify(selectedSeatIndex))
 }
UpdateSelectedSeatCount()
	

 //event listeners

movie.addEventListener("change", (e)=>{
	 ticketPrice = +e.target.value;
	 UpdateSelectedSeatCount()
	 //save selected movie index to localStorage
	 localStorage.setItem("selectedMovieIndex", e.target.selectedIndex);
	 //save their prices to the localStorage
	 localStorage.setItem("selectedMoviePrice", e.target.value);


	
})

 document.querySelector(".seat_container").addEventListener("click", (e)=>{
 	if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")){
 		e.target.classList.toggle("selected")
 		UpdateSelectedSeatCount()
 		pluralizeMovie()
 		addys()
 	}
 })
function clearFields(){
	count.innerText = "0";
	add_s.className = "add_s";
	totalPrice.innerText = "0";
	for(let i=0; i<seats.length; i++){
		seats[i].classList.remove("selected")
	}
}


//populate ui with local storage data
function populateUi(){
	const selectedSeatsIndex = JSON.parse(localStorage.getItem("selectedSeatsIndex"));
	const selectedSeatsIndexStays = JSON.parse(localStorage.getItem("selectedSeatsIndexStays"));
	const selectedMovieIndex = localStorage.getItem("selectedMovieIndex")
	const selectedMoviePrice = localStorage.getItem("selectedMoviePrice")

	if(selectedSeatsIndex !==null && selectedSeatsIndex.length > 0){
		seats.forEach((seat, index)=>{
			if(selectedSeatsIndex.indexOf(index) > -1){
				seat.classList.add("selected")
			}
		})
	}
	// if(selectedSeatsIndexStays !==null && selectedSeatsIndexStays.length > 0){
	// 	seats.forEach((seat, index)=>{
	// 		if(selectedSeatsIndexStays.indexOf(index) > -1){
	// 			seat.classList.add("selected")
	// 		}
	// 	})
	// }
	

	//set the index in the localStorage to the movie selected index
	if(selectedMovieIndex !==null ){
		movie.selectedIndex = selectedMovieIndex
	}
}

function addys(){
	const addS = localStorage.getItem("add_s")
	if(addS!==null ){
		add_s.innerText = addS
	}
}
	
 //submit
function submit(){
	clearFields();
	movieTitle();
	clearLocals();
	convertSelectedToOccupied()
}
function convertSelectedToOccupied(){
	const selectedSeatsIndexStays = JSON.parse(localStorage.getItem("selectedSeatsIndexStays"));

	if(selectedSeatsIndexStays !==null && selectedSeatsIndexStays.length>0)
		seats.forEach((seat, index)=>{
			if(selectedSeatsIndexStays.indexOf(index) > -1){
				seat.classList.add("occupied")
			}
		})

	
}

function clearLocals(){
	localStorage.removeItem("selectedSeatsIndex")
	localStorage.removeItem("selectedMovieIndex")
	localStorage.removeItem("add_s")
}
//get receipt

let username = document.querySelector(".username")
let movie_title = document.querySelector(".movie_title")
let seats_selected = document.querySelector(".seats_selected")
let total_movie_price = document.querySelector(".total_movie_price")

function movieTitle(){


}






























































