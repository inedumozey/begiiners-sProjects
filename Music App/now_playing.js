let home_arrow_down = document.querySelector(".now_playing .arrow_down");
let now_paying_view_full_btns  = document.querySelector(".now_paying .view_full");
let music_name  = document.querySelector(".music_name");
let shuffle_single_btn  = document.querySelector(".shuffle_single");

home_arrow_down.addEventListener("click", backToHomePage)
shuffle_single_btn.addEventListener("click", toggleShuffleSingleStatus)

//truncate video name
function truncateMusicName(){
	if(music_name.innerHTML.length > 30){
		music_name.innerHTML = `${music_name.innerHTML.slice(0, 30)}...`
	}
}
truncateMusicName()

//toggle shuffle and single status
let shuffleBtn = true
function setShuffle(){
	if(shuffleBtn === true){
		shuffleBtn = false;
		wrapper.classList.add("show_single_icon")
	}
}
function toggleShuffleSingleStatus(){
	if(shuffleBtn === false){
		shuffleBtn = true;
		wrapper.classList.remove("show_single_icon")
	}else{
		setShuffle()
	}
}
