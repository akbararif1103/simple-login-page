const inputs = document.querySelectorAll(".input");

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

const hidePass = document.querySelector(".bxs-hide");
const inputPass = document.querySelector('input[type="password"]');


// let eyeicon = document.getElementById("eyeicon");
// let password = document.getElementById("password");

// eyeicon.onclick = function(){
// 	if(password.type =="password" ){
// 		password.type = "text";
// 		eyeicon.src ="eye-open.png";
// 	}else{
// 		password.type = "password";
// 		eyeicon.src = "eye-close.png";
// 	}
// }


hidePass.addEventListener("click", () => {
  hidePass.classList.toggle("bxs-show");
  const type =
    inputPass.getAttribute("type") === "password" ? "text" : "password";
  inputPass.setAttribute("type", type);
});

const linkRegist = document.getElementById('linkRegist');
linkRegist.innerText = 'Regist Here';
linkRegist.innerHTML = '<strong> Regist Here </strong>'

const linkDissable = document.getElementById('championship');
linkDissable.setAttribute('disabled','disabled');
linkDissable.style.color = '#999';

// const elemenBaru = document.createElement("h5");
// elemenBaru.innerText = 'FAQ & Help';
// elemenBaru.innerHTML = '<a href="http://google.com">FAQ & Help</a>';
// const linkElement = elemenBaru.querySelector('a');
// linkElement.style.color = '#999';
// const awal = document.getElementById("linkRegist");
// awal.appendChild(elemenBaru);

const elemenBaru = document.createElement("h5");
elemenBaru.innerText = 'FAQ & Help';
elemenBaru.innerHTML = '<a href="http://google.com"><small>FAQ & Help<small></a>';
const linkElement = elemenBaru.querySelector('a');
linkElement.style.color = '#999';
const awal = document.getElementById("links");
awal.appendChild(elemenBaru);