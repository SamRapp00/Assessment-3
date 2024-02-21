console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully!');
}

let duck = document.querysSelector("duck")

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

duck.addEventListener('mouseover', function() {
	
	console.log('Nice Hair');
}