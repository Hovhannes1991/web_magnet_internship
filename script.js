// rotate images

let buttons  = Array.from(document.getElementsByClassName('rotate-btn'));


function rotate(){
	event.currentTarget.parentNode.parentNode.parentNode.classList.toggle('rotate')
}

buttons.forEach( (btn) => {
	btn.addEventListener('click', rotate)
} )