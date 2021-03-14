var xhr = new XMLHttpRequest()

var form = document.querySelector("form")

var textarea = document.getElementsByTagName('textarea')
for (let i = 0; i < textarea.length; i++) {
	textarea[i].style.height = "0"
	textarea[i].style.height = textarea[i].scrollHeight - "5" + "px"
	textarea[i].addEventListener('input', onInput)
	}

function submit() {
	formData = new FormData(form)

	xhr.open("POST", "")
	xhr.send(formData)
	}

function onInput() {
	this.style.height = "0"
	this.style.height = this.scrollHeight - "5" + "px"
	submit()
	}

function add() {
	var id = Math.floor(Math.random() * 100000)
	var container = document.createElement("div")
	container.id = id
	container.innerHTML = 
		`<div id="${id}" class="fadeInDown">
			<input type="checkbox" id="${id}_checkbox">
			<label for="${id}_checkbox" class="container">
				<span class="checkmark"></span>
			</label>
			<textarea class="content" name="${id}" cols="40" rows="1">To do</textarea>
			<i class="remove fa fa-times" onclick="remove('${id}')"></i>
			<br>
		</div>`
	document.getElementById("Note").appendChild(container)
	var current = document.querySelector(`textarea[name="${id}"]`)
	current.addEventListener('input', onInput)
	submit()
	}
  
function remove(id) {
	document.getElementById(id).className = "fadeOutDown"
	setTimeout(function(){
		document.getElementById(id).className = "hidden"
		document.querySelector(`textarea[name="${id}"]`).value = ""
		submit()
		}, 1000)
	}