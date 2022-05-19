let wrapper = document.querySelector(".wrapper");
let home = document.querySelector(".home");
let all_songs = document.querySelector(".all_songs");
let folders = document.querySelector(".folders");
let my_favorite = document.querySelector(".my_favorite");
let e_sound = document.querySelector(".e_sound");
let skin_icon = document.querySelector(".skin_icon");
let settings = document.querySelector(".settings");
let songlist = document.querySelector(".songlist");
let home_view_full_btns = document.querySelector(".home .view_full");

//Skin
skin_icon.addEventListener("click", uponSkin);
function uponSkin(){
	wrapper.className = "wrapper show_skin hide_home"
}

//All sonds
all_songs.addEventListener("click", uponSonglist);
function uponSonglist(){
	wrapper.className = "wrapper show_songlist hide_home"
}

//click to show now_playing div

home_view_full_btns.addEventListener("click", openNowPlaying)

function openNowPlaying(){
	wrapper.classList.add("show_now_playing")
}
