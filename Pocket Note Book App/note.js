// get all the necessary DOM elements
let text = document.querySelector(".text")
let btn = document.querySelector(".btn")
let resultArea = document.querySelector(".resultArea")
let fullPage = document.querySelector(".fullPageTitle")
let page = document.querySelector(".page")

// Add event, click to the btn
btn.addEventListener("click", btnclick)


// get a callback function in the addEventListener(btnclick)
function btnclick(){

		let getText = text.value.trim();
	// check if the textDiv is empty
	if(getText == ""){
	 	return false
	}else{

						// create a div with a class of resultMore
						let resultMore = document.createElement("div")
						// give div a class and call it resultMore
						 resultMore.className= ("resultMore")
						// create two span with classes of result and more respectively
						let result = document.createElement("span")
						result.className = ("result")
						let more = document.createElement("span")
						more.className = ("more")

						// append these two spans to divForResultMore
						resultMore.appendChild(result)
						resultMore.appendChild(more)

						// create two more spans with classes of edit and del
						let edit = document.createElement("span")
						edit.className = ("edit")
						let del = document.createElement("span")
						del.className = ("del")

						// create another div and name it resultDiv and append resultMore, edit, del into it
						 let resultDiv = document.createElement("div")
						 resultDiv.className = ("resultDiv")
						 resultDiv.appendChild(resultMore)
						 resultDiv.appendChild(edit)
						 resultDiv.appendChild(del)

						 // append resultDiv to resultArea
						 resultArea.appendChild(resultDiv)


			// if the maxlength of the text is more than 50, replace the remaining text with elipsis and add rea more
			let maxlength = 50;
			 if(getText.length > maxlength){
				let shortText = getText.slice(0, 50-1)
								text.value = "";
				// append the shortText into result div
				 result.innerHTML = shortText + "..."
				 // style resultMore
				 result.style.cssText = "text-align:left"
				 more.innerHTML = "Read More"
				 // style more
					more.style.cssText = "background:blue;"
				 edit.innerHTML = "Edit"
				 del.innerHTML = "Delete"

					// Add eventlistener, click to more button to add the text in the book shelf to full page
					more.addEventListener("click", moreclick)

					function moreclick(){
						// create a div with a class of pageDelBtn, create another div with a class, fullPageText, and another with a class, delBtn. append delBtn and fullPageText in pageDelBtn. Append pageDelBtn to page and add text from the bookshelf to the fullPageText

						let pageDelBtn = document.createElement("div")
						pageDelBtn.className = ("pageDelBtn")

						let delBtn = document.createElement("div")
						delBtn.className = ("delBtn")
						console.log(delBtn)
						// add textNode to delBtn
						delBtn.innerHTML = "&times;"
						// style delBtn
						delBtn.style.cssText = "color:#ff0000; font-size:2em; font-weight:bold; width:25px; height:25px; display:flex; justify-content:center; align-items:center; cursor:pointer; padding:0px"
						let fullPageText = document.createElement("textarea")
						console.log(fullPageText)
						fullPageText.className = ("fullPageText")

						// style fullPageText
						fullPageText.style.cssText = "background: #201e1e;width:100%;padding:20px; min-height:100vh; resize:none; margin:5px auto;color:#fff;box-shadow: -2px -2px 3px teal, 2px 2px 3px red, inset -2px -2px 3px teal, inset 2px 2px 3px red;word-wrap:break-word;word-break: break-all;color:red;"

						pageDelBtn.appendChild(delBtn)
						pageDelBtn.appendChild(fullPageText)
						page.appendChild(pageDelBtn)

						// add the text from bookshelf to fullPagetext
						fullPageText.innerHTML = getText

						delBtn.addEventListener("click", function(){
							let pgtext = "Do you want to delete this page?"
							confirm(pgtext)
							pageDelBtn.innerHTML = ""
							delBtn.style.cssText = "visibility:hidden;"
						});
					}

			}else{
				result.innerHTML =getText
								text.value = "";
				 edit.innerHTML = "Edit"
				 del.innerHTML = "Delete"
			}							
	}		
}


// delete function
// edit function