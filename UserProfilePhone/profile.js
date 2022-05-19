//get the dom elements
let create_account_wrapper = document.querySelector(".create_account_wrapper");
let sign_up = document.querySelector(".sign_up");
let log_in = document.querySelector(".log_in");
let backToUser_btn = document.querySelector(".backToUser_btn");
let next_btn = document.querySelector(".next_btn");
let userBtn = document.querySelector(".userBtn");
let previous_btn = document.querySelector(".previous_btn");
let submitBtn = document.querySelector(".submit_btn")
let wrapperPage_1 = document.querySelector(".User_wrapper_page_1");
let wrapperPage_2 = document.querySelector(".User_wrapper_page_2");
let log_in_input = document.querySelector(".log_in_input");
let login_In = document.querySelector(".login_In");
let backTocreate_account_wrapper_btn = document.querySelector(".backTocreate_account_wrapper_btn");
let user_dashboard = document.querySelector(".user_dashboard");
let view = document.querySelector(".view");
let userPanel = document.querySelector(".userPanel");
let userNotice = document.querySelector(".userNotice");

let firstName = document.querySelector("#fname");
let lastName = document.querySelector("#lname");
let age = document.querySelector("#age");
let maleGender = document.querySelector("#male");
let femaleGender = document.querySelector("#female");
let otherGender = document.querySelector("#other");
let height = document.querySelector("#height");
let phone_1 = document.querySelector("#phone_1");
let phone_2 = document.querySelector("#phone_2");
let country = document.querySelector("#country");
let state = document.querySelectorAll(".state");
let city = document.querySelector("#city");
let bio = document.querySelector("#bio");
let image_input = document.querySelector("#image_input");
let image_wrapper = document.querySelector(".image_wrapper");
let passport = document.querySelector(".passport");

let fnameError = document.querySelector(".fnameError");
let lnameError = document.querySelector(".lnameError");
let ageError = document.querySelector(".ageError");
let heightError = document.querySelector(".heightError");
let numberError = document.querySelector(".numberError");
let countryError = document.querySelector(".countryError");
let stateError = document.querySelector(".stateError");
let cityError = document.querySelector(".cityError");
let genderError = document.querySelector(".genderError");
let empty_state = document.querySelector(".empty_state");
let ghana_state = document.querySelector(".ghana_state");
let congo_state = document.querySelector(".congo_state");
let nig_state = document.querySelector(".nig_state");
let zam_state = document.querySelector(".zam_state");
let usa_state = document.querySelector(".usa_state");
let userTable = document.querySelector(".userTable");
let userLoginData = document.querySelector("#login_input");


sign_up.addEventListener("click", openCreateUserProfile)
function openCreateUserProfile(){
	create_account_wrapper.classList.add("hide_create_account_wrapper")
	wrapperPage_1.classList.add("show_User_wrapper_page_1")
}

login_In.addEventListener("click", openLoginArea)
function openLoginArea(){
	log_in_input.classList.add("show_log_in_input");
	create_account_wrapper.classList.add("hide_create_account_wrapper");

}

backTocreate_account_wrapper_btn.addEventListener("click", back_to_Create_User_Profile)
function back_to_Create_User_Profile(){
	log_in_input.classList.remove("show_log_in_input");
	create_account_wrapper.classList.remove("hide_create_account_wrapper")
}

log_in.addEventListener("click", openUserDashBoard);
function openUserDashBoard(){
	let requiredNumber = JSON.parse(localStorage.getItem("userprofileRequire"))[5]
	if(userLoginData.value === requiredNumber){
		log_in_input.classList.remove("show_log_in_input");
		user_dashboard.classList.add("show_user_dashboard");
	}
	else{alert("Check your Login Credential")}
		userLoginData.value = "";
}

userBtn.addEventListener("click", back_to_log_in_input)
function back_to_log_in_input(){
	user_dashboard.classList.remove("show_user_dashboard");
	log_in_input.classList.add("show_log_in_input");
}


//validate and store
function validateCountry(){
	window.addEventListener("load", ()=>{	
			congo_state.classList.add("hid_state")
			ghana_state.classList.add("hid_state")
			zam_state.classList.add("hid_state")
			nig_state.classList.add("hid_state")
			usa_state.classList.add("hid_state")
			empty_state.classList.remove("hid_state")
			empty_state.classList.add("inactive")
		 })

	country.addEventListener("change", ()=>{
		if(country.value === "Empty" || country.value === "empty"){ 	
			congo_state.classList.add("hid_state")
			ghana_state.classList.add("hid_state")
			zam_state.classList.add("hid_state")
			nig_state.classList.add("hid_state")
			usa_state.classList.add("hid_state")
			empty_state.classList.remove("hid_state")
			empty_state.classList.add("inactive")
		 }
		else if(country.value === "Congo" || country.value === "congo"){ 	
			congo_state.classList.remove("hid_state")
			ghana_state.classList.add("hid_state")
			zam_state.classList.add("hid_state")
			nig_state.classList.add("hid_state")
			usa_state.classList.add("hid_state")
			empty_state.classList.add("hid_state")
		 }
		else if(country.value === "Ghana" || country.value === "ghana"){ 	
			congo_state.classList.add("hid_state")
			ghana_state.classList.remove("hid_state")
			zam_state.classList.add("hid_state")
			nig_state.classList.add("hid_state")
			usa_state.classList.add("hid_state")
			empty_state.classList.add("hid_state")
		 }
		else if(country.value === "Nigeria" || country.value === "nigeria"){ 	
			congo_state.classList.add("hid_state")
			ghana_state.classList.add("hid_state")
			zam_state.classList.add("hid_state")
			nig_state.classList.remove("hid_state")
			usa_state.classList.add("hid_state")
			empty_state.classList.add("hid_state")
		 }
		 else if(country.value === "Zimbabwe" || country.value === "zimbabwe"){ 	
			congo_state.classList.add("hid_state")
			ghana_state.classList.add("hid_state")
			zam_state.classList.remove("hid_state")
			nig_state.classList.add("hid_state")
			usa_state.classList.add("hid_state")
			empty_state.classList.add("hid_state")
		 }
		  else if(country.value === "USA" || country.value === "usa"){ 	
			congo_state.classList.add("hid_state")
			ghana_state.classList.add("hid_state")
			zam_state.classList.add("hid_state")
			nig_state.classList.add("hid_state")
			usa_state.classList.remove("hid_state")
			empty_state.classList.add("hid_state")
		 }
	})
 
}validateCountry()

submitBtn.addEventListener("click", submitValidInputToStorage);
 function submitValidInputToStorage(){
 	alert("Submited successfully")

 	log_in_input.classList.add("show_log_in_input");
	wrapperPage_2.classList.remove("show_User_wrapper_page_2");


	if(firstName.value === ""){
		fnameError.classList.add("active");
	}else{
		fnameError.classList.remove("active");
		storeRequireData(firstName.value)
		firstName.value = ""
	}

	if(lastName.value === ""){
		lnameError.classList.add("active");
	}else{
		lnameError.classList.remove("active");
		storeRequireData(lastName.value)
		lastName.value = ""
	}

	if(age.value ===""){
		ageError.classList.add("active");
	}else{
		ageError.classList.remove("active");
		storeRequireData(age.value)
		age.value = ""
	}

	if(maleGender.checked===true || femaleGender.checked===true|| otherGender.checked===true){
		genderError.innerHTML = "";
	if(maleGender.checked===true){storeRequireData("Male")}
	if(femaleGender.checked===true){storeRequireData("Female")}
	if(otherGender.checked===true){storeRequireData("Other")}
	}else{
		genderError.innerHTML = "Select a Gender!";
	}

	if(height.value ===""){
		heightError.classList.add("active");
	}else{
		heightError.classList.remove("active");
		storeRequireData(height.value)
		height.value = ""
	}

	if(phone_1.value ===""){
		numberError.classList.add("active");
	}else{
		numberError.classList.remove("active");
		storeRequireData(phone_1.value)
		phone_1.value = ""
	}
	//option mobile number
	if(phone_2.value !==""){
		storeOptionalPhoneNum(phone_2.value);
		phone_2.value = ""
	}

	if(country.value ==="" || country.value ===null || country.value ===undefined || country.value === "Empty" || country.value ==="empty"){
		countryError.classList.add("active");
	}else{
		countryError.classList.remove("active");
		storeRequireData(country.value)
		country.value = ""
	}

	//option bio
	if(bio.value !==""){
		storeBioMessage(bio.value)
		bio.value = ""
	}

	image_wrapper.innerHTML = ""

}

function uploadImage(){
	image_input.addEventListener("change", ()=>{
		let reader = new FileReader();
		reader.readAsDataURL(image_input.files[0]);
		reader.addEventListener("load", ()=>{
			storeImage(reader.result);
			let image = new Image();
			image.src = reader.result;
			image_wrapper.append(image)
			image.classList.add("img")
		})
	})
}uploadImage()


function verifyBeforeNext(){

	if(firstName.value === ""){
		fnameError.classList.add("active");
	}else{
		fnameError.classList.remove("active");		
	}

	if(lastName.value === ""){
		lnameError.classList.add("active");
	}else{
		lnameError.classList.remove("active");
	}

	if(height.value ===""){
		heightError.classList.add("active");
	}else{
		heightError.classList.remove("active");
	}

	if(phone_1.value ===""){
		numberError.classList.add("active");
	}else{
		numberError.classList.remove("active");
	}

	if(age.value ===""){
		ageError.classList.add("active");
	}else{
		ageError.classList.remove("active");
	}

	if(maleGender.checked===true || femaleGender.checked===true|| otherGender.checked===true){
		genderError.innerHTML = "";
	}else{
		genderError.innerHTML = "Select a Gender!";
	}
}



//next buttton to open the second page
//the next button will function if the required input are not empty
next_btn.addEventListener("click", openNextPage)
function openNextPage(){
	if(firstName.value !=="" && lastName.value !=="" && age.value !=="" && (maleGender.checked===true || femaleGender.checked===true || otherGender.checked===true) && height.value !=="" && phone_1.value !==""){
			wrapperPage_1.classList.remove("show_User_wrapper_page_1");
			wrapperPage_2.classList.add("show_User_wrapper_page_2");
	}
	verifyBeforeNext()
}


//prev button to open the previous page
previous_btn.addEventListener("click", openPrevPage)
function openPrevPage(){
	wrapperPage_1.classList.add("show_User_wrapper_page_1")
	wrapperPage_2.classList.remove("show_User_wrapper_page_2")
}




//store data in local storage
function storeRequireData(requireData){
	//store empty array if userprofileRequire value is null
	if(localStorage.getItem("userprofileRequire") === null){
		localStorage.setItem("userprofileRequire", "[]");
	}
	//get the stored empty array in JSON format
	let requireDataArray = JSON.parse(localStorage.getItem("userprofileRequire"));
	//push the requireData from user to the empty array
	requireDataArray.push(requireData);
	//save the requireDataArray containing all the requireData in the local storage in JSON format
	localStorage.setItem("userprofileRequire", JSON.stringify(requireDataArray));
}

function storeBioMessage(bioData){
	//store empty array if userprofileBio value is null
	if(localStorage.getItem("userprofileBio") === null){
		localStorage.setItem("userprofileBio", "[]");
	}
	//get the stored empty array in JSON format
	let bioMessageArray = JSON.parse(localStorage.getItem("userprofileBio"));
	//push the bioData from user to the empty array
	bioMessageArray.push(bioData);
	//save the bioMessageArray containing all the bioData in the local storage in JSON format
	localStorage.setItem("userprofileBio", JSON.stringify(bioMessageArray));
}

function storeImage(imageData){
	//store empty array if userprofileImage value is null
	if(localStorage.getItem("userprofileImage") === null){
		localStorage.setItem("userprofileImage", "[]");
	}
	//get the stored empty array in JSON format
	let imageDataArray = JSON.parse(localStorage.getItem("userprofileImage"));
	//push the imageData from user to the empty array
	imageDataArray.push(imageData);
	//save the imageDataArray containing all the imageData in the local storage in JSON format
	localStorage.setItem("userprofileImage", JSON.stringify(imageDataArray));
}


function storeOptionalPhoneNum(optionPhone){
	//store empty array if userprofileOptionPhoneNum value is null
	if(localStorage.getItem("userprofileOptionPhoneNum") === null){
		localStorage.setItem("userprofileOptionPhoneNum", "[]");
	}
	//get the stored empty array in JSON format
	let optionPhoneDataArray = JSON.parse(localStorage.getItem("userprofileOptionPhoneNum"));
	//push the optionPhone from user to the empty array
	optionPhoneDataArray.push(optionPhone);
	//save the optionPhoneDataArray containing all the optionPhone in the local storage in JSON format
	localStorage.setItem("userprofileOptionPhoneNum", JSON.stringify(optionPhoneDataArray));
}


//get stored data//////////////////////////
function getoptionPhoneDataArray(){
	if(localStorage.getItem("userprofileOptionPhoneNum") === null){
		localStorage.setItem("userprofileOptionPhoneNum", "[]");
	}
	//get the stored empty array in JSON format
	let optionPhoneDataArray = JSON.parse(localStorage.getItem("userprofileOptionPhoneNum"));
	let [optionPhone_2] = optionPhoneDataArray;
	userTable.rows[6].cells[1].innerHTML = optionPhone_2
}

function getImage(){
	//store empty array if userprofileImage value is null
	if(localStorage.getItem("userprofileImage") === null){
		localStorage.setItem("userprofileImage", "[]");
	}
	//get the stored empty array in JSON format
	let imageDataArray = JSON.parse(localStorage.getItem("userprofileImage"));
	let [passport_] = imageDataArray
	passport.src = passport_
}

function getBioMessage(){
	//store empty array if userprofileBio value is null
	if(localStorage.getItem("userprofileBio") === null){
		localStorage.setItem("userprofileBio", "[]");
	}
	//get the stored empty array in JSON format
	let bioDataArray = JSON.parse(localStorage.getItem("userprofileBio"));
	let [message] = bioDataArray
	userTable.rows[9].cells[1].innerHTML = message
}

function getRequireData(){
	//store empty array if userprofileRequire value is null
	if(localStorage.getItem("userprofileRequire") === null){
		localStorage.setItem("userprofileRequire", "[]");
	}
	//get the stored empty array in JSON format
	let requireDataArray = JSON.parse(localStorage.getItem("userprofileRequire"));
	let [fname, lname, dob, gender, height, mobile_1, contry] = requireDataArray
		userTable.rows[0].cells[1].innerHTML = fname;
		userTable.rows[1].cells[1].innerHTML = lname;
		userTable.rows[2].cells[1].innerHTML = dob;
		userTable.rows[3].cells[1].innerHTML = gender;
		userTable.rows[4].cells[1].innerHTML = height;
		userTable.rows[5].cells[1].innerHTML = mobile_1;
		userTable.rows[7].cells[1].innerHTML = contry;
}

view.addEventListener("click", viewProfile)
function viewProfile(){
	userPanel.classList.add("show_userPanel");
	userNotice.innerHTML =""
	getoptionPhoneDataArray();
	getImage();
	getBioMessage();
	getRequireData();
	view.classList.add("show_view")
}

backToUser_btn.addEventListener("click", backToUser)
function backToUser(){
	wrapperPage_1.classList.remove("show_User_wrapper_page_1")
	create_account_wrapper.classList.remove("hide_create_account_wrapper")
	user_dashboard.classList.remove("show_user_dashboard");
	view.classList.remove("show_view");
	userNotice.innerHTML = "Hover on the panel to view dashboard";
	userPanel.classList.remove("show_userPanel");
	
}