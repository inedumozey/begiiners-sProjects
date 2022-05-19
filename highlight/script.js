const textWrapper = document.querySelector('.text-wrapper');
const form = document.querySelector('form');
const search = document.querySelector('.search');
const del = document.querySelector('.del');


form.addEventListener('submit', (e)=>{
	e.preventDefault();
	const textArea = document.querySelector('textarea')
	if(textArea.value === ''){alert('Insert Text')}
	else{
		//save in local storage
		localStorage.setItem('storeText', textArea.value.trim())
		getLocalStorage()
		textArea.value = ""
	}
})

//get local Storage
function getLocalStorage(){
	const localText = localStorage.getItem('storeText');
	if(localText !==null ){
		let textsArr = localText.split(' ');
		textsArr.forEach(textArr=>{
			textWrapper.innerHTML += `
				<span>${textArr}</span>
			`
		})
	}
}
getLocalStorage()

//delete Local Storage
del.addEventListener('click', ()=>{
	localStorage.removeItem('storeText')
	textWrapper.innerHTML = ""
})

function filterText(){

	search.addEventListener('input', function(e){
		let march = this.value.trim().toLowerCase();

		Array.from(textWrapper.children).forEach(text=>{
			if(text.innerHTML.toLowerCase().includes(march) !== false){
				text.style.color = 'red'
			}
			else{
				text.style.color = 'black'
			}
		})
		if(march === ""){
			Array.from(textWrapper.children).forEach(text=>{
				text.style.color = 'black'
			})
		}
	})

}
filterText()
