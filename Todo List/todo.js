
let go = document.querySelector(".go")
let btnMove = document.querySelector(".btnMove")

window.addEventListener("load", move)
function move(){
	go.classList.toggle("rotate")
	go.addEventListener("transitionend", ()=>{
		go.classList.toggle("add")
	})
}


	let todo_input = document.querySelector(".todo_input");
	let add_btn = document.querySelector(".todo_input_add_btn");
	let todoListContainer = document.querySelector(".todo_list_container");
	let error_text1 = document.querySelector(".error_text1");
	let error_text2 = document.querySelector(".error_text2");
	let filter = document.querySelector(".filter ");
	let list;
	let todo;
	let del;
	let checked;


add_btn.addEventListener("click", ()=>{
	if(todo_input.value === ""){
		error_text1.innerHTML ="Enter todo text"
		error_text2.innerHTML = ""
	}
	else if(todo_input.value.length > 30){
		error_text2.innerHTML ="Todo text must not be greater than 30 characters"
		error_text1.innerHTML =""
	}
	else if(todo_input.value !==""){
		error_text1.innerHTML = ""
		error_text2.innerHTML = ""
		getTodoInput()
	}
})
todoListContainer.addEventListener("click", delete_check_todo)
filter.addEventListener("click", filterTode)

	function getTodoInput(){
	list = document.createElement("div")
	list.classList.add("list")
	let listFrag  =document.createDocumentFragment()

	todo = document.createElement("div")
	todo.classList.add("todo")
	listFrag.append(todo)
	todo.innerHTML = todo_input.value;
					todo_input.value = ""

	checked = document.createElement("div")
	checked.classList.add("checked")
	let checkedFrag  =document.createDocumentFragment()
		let checked_line1 = document.createElement("div")
		checked_line1.classList.add("checked_line")
		checked_line1.classList.add("checked_line1")

		let checked_line2 = document.createElement("div")
		checked_line2.classList.add("checked_line")
		checked_line2.classList.add("checked_line2")
			checkedFrag.append(checked_line1)
			checkedFrag.append(checked_line2)
			checked.append(checkedFrag)
	listFrag.append(checked)

	del =document.createElement("div")
	del.classList.add("del")
	let delFrag  =document.createDocumentFragment()
		let del_line1 = document.createElement("div")
		del_line1.classList.add("del_line")
		del_line1.classList.add("del_line1")

		let del_line2 = document.createElement("div")
		del_line2.classList.add("del_line")
		del_line2.classList.add("del_line2")
			delFrag.append(del_line1)
			delFrag.append(del_line2)
			del.append(delFrag)
	listFrag.append(del)

list.append(listFrag)
todoListContainer.prepend(list)

}

function delete_check_todo(e){
	if(e.target.classList[0] === "del"){
		e.target.parentElement.classList.add("add_fall_animation")
		e.target.parentElement.addEventListener("transitionend", ()=>{
			e.target.parentElement.remove()
		})
	}
	if(e.target.classList[0] === "del_line"){
		e.target.parentElement.parentElement.classList.add("add_fall_animation")
		e.target.parentElement.parentElement.addEventListener("transitionend", ()=>{
			e.target.parentElement.parentElement.remove()
		})
	}
	if(e.target.classList[0] === "checked"){
		e.target.parentElement.classList.toggle("add_shake_animation")
		e.target.parentElement.classList.toggle("add_line_through")
	}
	if(e.target.classList[0] === "checked_line"){
		e.target.parentElement.parentElement.classList.toggle("add_shake_animation")
		e.target.parentElement.parentElement.classList.toggle("add_line_through")
	}
}

function filterTode(e){

	const todos = todoListContainer.childNodes;
	todos.forEach(todo=>{
		if(e.target.value === "all"){
			todo.style.display="flex"
		}
		if(e.target.value === "completed"){
			if(todo.classList.contains("add_shake_animation")){
				todo.style.display ="flex"
			}else{todo.style.display="none"}
		}
		if(e.target.value === "uncompleted"){
			if(!todo.classList.contains("add_shake_animation")){
				todo.style.display ="flex"
			}else{todo.style.display="none"}
		}
	})
}




add_btn.addEventListener("click", ()=>{
	let todos = [];
	localStorage.setItem("to", todo.innerHTML)
	todos.push(localStorage.getItem("to"))
})