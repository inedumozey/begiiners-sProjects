let box = document.querySelector(".box")
let name = document.querySelector(".name")
let label_video = document.querySelector(".label_video")
let video_file = document.querySelector("#video_file")
let video = document.querySelector("video")

video_file.addEventListener("change", (e)=>{
	e.preventDefault()
	name.innerHTML = video_file.files[0].name;
	console.log(video_file.files)

	let reader = new FileReader();
	reader.readAsDataURL(video_file.files[0])
	reader.addEventListener("load", ()=>{
		video.src = reader.result
	})
})


box.addEventListener("dragover", (e)=>{
	e.preventDefault()
	box.className += " drop"
})

box.addEventListener("drop", (e)=>{
	e.preventDefault()
	name.innerHTML = e.dataTransfer.files[0].name;
	box.className + "box"
	console.log(e.dataTransfer.files)

	let reader = new FileReader();
	reader.readAsDataURL(e.dataTransfer.files[0])
	reader.addEventListener("load", ()=>{
		video.src = reader.result
	})

})
