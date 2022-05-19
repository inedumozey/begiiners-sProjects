let songlist_arrow_left = document.querySelector(".songlist .arrow_left");
let songlist_view_full_btns = document.querySelector(".songlist .view_full");
let musics = document.querySelector("#music_file"); 
let audio = document.querySelector("audio"); 
let song_panel = document.querySelector(".song_panel"); 
let error_text_myMusic = document.querySelector(".home .myMusic .error_text");  

songlist_arrow_left.addEventListener("click", backToHomePage)
songlist_view_full_btns.addEventListener("click", openNowPlaying)
musics.addEventListener("change", uploadMusicFiles)

// music_name
let musicArray = []
function show_error_text_myMusic(){
	error_text_myMusic.innerHTML = "Some or all of the music files failed to be stored on your device Local Storage due to insufficient space"
}
function clear_error_text_myMusic(){
	error_text_myMusic.innerHTML = ""
}

function uploadMusicFiles(){
	for(let i=0; i<this.files.length; i++){
		let reader = new FileReader();
		reader.readAsDataURL(this.files[i]);
		reader.addEventListener("load", ()=>{
			let musicNames = this.files[i].name
			let music_array = reader.result.split(" ")
			for(let i=0; i<music_array.length; i++){

				createSongDiv(music_array, musicNames)
				show_error_text_myMusic()
				setTimeout(()=>{
					clear_error_text_myMusic()
				}, 180000)

			}
		})
	}
}

//create song div within 
function createSongDiv(audioFile, musicName){

	let songsDiv = document.createElement("div");
	let songsDivFragment = document.createDocumentFragment()
		songsDiv.className = "songsDiv";

	let animation = document.createElement("div");
		animation.className = "animation";
			let draw_animation = document.createElement("div");
			draw_animation.className = "draw_animation";
			draw_animation.innerHTML = "anime";
			animation.append(draw_animation)
	songsDivFragment.append(animation);

	let song = document.createElement("div");
		song.className = "song";
		let audio = document.createElement("audio");
		audio.className = "audio"
		audio.src = audioFile;
		song.append(audio);
		let music_name = document.createElement("div");
		music_name.className = "music_name";
		music_name.innerHTML = musicName
		song.append(music_name)

	songsDivFragment.append(song);

	let song_info = document.createElement("div");
		song_info.classList = "song_info"
			let song_info_toggle = document.createElement("div");
			let song_info_toggle_fragment = document.createDocumentFragment();
				song_info_toggle.className = "icons toggle_icon"
					let span1 = document.createElement("span");
						span1.className = "draw_line left_toggle"
						song_info_toggle_fragment.append(span1)
					let span2 = document.createElement("span");
						span2.className = "draw_line middle_toggle"
						song_info_toggle_fragment.append(span2)
					let span3 = document.createElement("span");
						span3.className = "draw_line right_toggle";
					song_info_toggle_fragment.append(span3);

			song_info_toggle.append(song_info_toggle_fragment)
		song_info.append(song_info_toggle)
	songsDivFragment.append(song_info)

	songsDiv.append(songsDivFragment);
	song_panel.append(songsDiv)
}



// function remove_song_area1_animation(e){
// 	song_area1.classList.remove("show_animation")
// 	song_area1.classList.remove("increaseWidth")
// }

	song_panel.addEventListener("click", show_song_area1_animation);
	function show_song_area1_animation(e){
		if(e.target.classList[0] === "song"){
			e.target.children[0].play()
			e.target.parentElement.classList.add("show_animation")
			e.target.parentElement.classList.add("increaseWidth")
		}
		if(e.target.classList[0] === "icons"){
			e.target.parentElement.previousElementSibling.children[0].pause()
			e.target.parentElement.parentElement.classList.remove("show_animation")
			e.target.parentElement.parentElement.classList.remove("increaseWidth")
		}
	}
