let wrapper = document.querySelector(".wrapper")
let monthsDiv  =wrapper.children[0].children[1]
let weeksDiv  =wrapper.children[1].children[1]
let daysDiv  =wrapper.children[2].children[1]
let hoursDiv  =wrapper.children[3].children[1]
let minutesDiv  =wrapper.children[4].children[1]
let secondsDiv  =wrapper.children[5].children[1]

let requiredDate = new Date("january 01 2021")

function countDown( mi, w, d, h, m, s){
	let currentDate = new Date();
	let diff = requiredDate - currentDate;
 
	m = Math.floor((diff / 1000 / 60 / 60 / 24 / 7 / 4) % 12)
 	w = Math.floor((diff / 1000 / 60 / 60 / 24 / 7) % 4)
 	d = Math.floor((diff / 1000 / 60 / 60 / 24) % 7)
	h = Math.floor((diff / 1000 / 60 / 60) % 24)
	mi = Math.floor((diff / 1000 / 60) % 60)
	s = Math.floor((diff / 1000) % 60)


	monthsDiv.innerHTML =`${m}`
	weeksDiv.innerHTML =`${w}`
	daysDiv.innerHTML =`${d}`
	hoursDiv.innerHTML =`${h}`
	minutesDiv.innerHTML =`${mi}`
	secondsDiv.innerHTML =`${s}`

}
setInterval(countDown, 1000)


