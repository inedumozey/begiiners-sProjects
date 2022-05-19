let input = document.querySelector("#upload_img")
let wrapper_img = document.querySelector(".wrapper_img")
let redLabel = document.querySelector(".red")
let greenLabel = document.querySelector(".green")
let blueLabel = document.querySelector(".blue")
let alphaLabel = document.querySelector(".alpha")
let skin_bottom = document.querySelector(".skin .skin_color")
let remove_image_btn = document.querySelector(".remove_image");
let skinArrow = document.querySelector(".skin .header_arrow")
let error_text = document.querySelector(".error_text")
let error_text_skin_image = document.querySelector(".skin .skin_image .error_text")

let red = document.querySelector("#red")
let green = document.querySelector("#green")
let blue = document.querySelector("#blue")
let alpha = document.querySelector("#alpha")



input.addEventListener("change", uploadImage);
function uploadImage(){
	if(this.files[0].size <= (1024 * 1024 * 3)){
		let reader = new FileReader()
		reader.readAsDataURL(this.files[0])
		reader.addEventListener("load", ()=>{
			localStorage.setItem("alpha", 0.6);
			localStorage.setItem("red", 0);
			localStorage.setItem("green", 0);
			localStorage.setItem("blue", 0);
			localStorage.setItem("skin_bg_image", reader.result)
		setSkinBgImage();
		error_text_skin_image.innerHTML =""
		})
	}else{
		error_text_skin_image.innerHTML ="Image must not be greater than 3MB"
	}
}

function setSkinBgImage(){
	let local_skin_bg_image = localStorage.getItem("skin_bg_image")
	let red_default_value = localStorage.getItem("red")
	let green_default_value = localStorage.getItem("green")
	let blue_default_value = localStorage.getItem("blue")
	let alpha_default_value = localStorage.getItem("alpha")
		if(local_skin_bg_image !==null && alpha_default_value && red_default_value !==null && green_default_value !==null && blue_default_value !==null){
			wrapper_img.src = local_skin_bg_image;
			red.value = red_default_value;
			green.value = green_default_value;
			blue.value = blue_default_value;
			alpha.value = alpha_default_value;
			
			setScreenBgColor(red.value, green.value, blue.value, alpha.value)
			setTextColor(red.value, green.value, blue.value, alpha.value, alphaLabel)
	}
}
setSkinBgImage()

red.addEventListener("input", setSkinBgColor_red)
green.addEventListener("input", setSkinBgColor_green)
blue.addEventListener("input", setSkinBgColor_blue)
alpha.addEventListener("input", setSkinBgColor_alpha)

function setSkinBgColor_red(){
	localStorage.setItem("red", this.value);
	getLocalSkinBgColor()
}
function setSkinBgColor_green(){
	localStorage.setItem("green", this.value);
	getLocalSkinBgColor()
}
function setSkinBgColor_blue(){
	localStorage.setItem("blue", this.value);
	getLocalSkinBgColor()
}
function setSkinBgColor_alpha(){
	localStorage.setItem("alpha", this.value);
	getLocalSkinBgColor()}

function getLocalSkinBgColor(){
	let redColor = localStorage.getItem("red")
	let greenColor = localStorage.getItem("green")
	let blueColor = localStorage.getItem("blue")
	let alphaColor = localStorage.getItem("alpha")

	if(redColor !== null && greenColor !== null && blueColor !==null && alphaColor !==null){
		red.value = redColor
		green.value = greenColor
		blue.value = blueColor
		alpha.value = alphaColor

		setScreenBgColor(redColor, greenColor, blueColor, alphaColor)
		setTextColor(red.value, green.value, blue.value, alpha.value, alphaLabel)
	}
}
getLocalSkinBgColor()

function setScreenBgColor(redColor, greenColor, blueColor, alphaColor){
	wrapper.style.background = `rgba(${redColor}, ${greenColor}, ${blueColor}, ${alphaColor})`
	redLabel.style.background = `rgba(${redColor}, 0, 0, 1)`
	greenLabel.style.background = `rgba(0, ${greenColor}, 0, 1)`
	blueLabel.style.background = `rgba(0, 0, ${blueColor}, 1)`
	alphaLabel.style.background = `rgba(0, 0, 0, ${alphaColor})`
}

function setTextColor(redColor, greenColor, blueColor, alphaColor){
	if(alphaColor<=0.3){
		wrapper.style.color = "#777";
		alphaLabel.style.color = "#777";
		skin_bottom.style.background = "rgba(0, 0, 0, .2)"
	}
	if(alphaColor >0.3 && redColor > 200){
		error_text.style.color = "#000"
	}else{error_text.style.color = "#f00"}
	if(alphaColor>0.3){
		wrapper.style.color = "#fff";
		alphaLabel.style.color = "#777";
		skin_bottom.style.background = "rgba(255, 255, 255, 0.2)"
	}
	if(alphaColor>0.3 && redColor>230 && greenColor>230 && blueColor>230){wrapper.style.color = "#ccc"}
	if(alphaColor>0.3 && redColor>255/2 && greenColor>255/2 && blueColor>255/2){wrapper.style.color = "#ccc"}
	if(alphaColor>0.3 && redColor>255/2 && greenColor>255/2){wrapper.style.color = "#777"}
	if(alphaColor>0.3 && greenColor>255/2 && blueColor>255/2){wrapper.style.color = "#777"}
}

//remove image
remove_image_btn.addEventListener("click", removeBgImage)
function removeBgImage(){
	localStorage.removeItem("skin_bg_image");
}

//back arrow
skinArrow.addEventListener("click", backToHomePage)

function backToHomePage(){
	wrapper.className = "wrapper"
}