const {form} = document.forms
function retrieveFormValue(event) {
	event.preventDefault();
	const{name} = form;
	let values = {
		name: name.value,
	};

	let myName = values.name;
	console.log(values);

	console.log(myName);
	let firstLetter = myName.charAt()

	if (firstLetter == "j" || firstLetter =="J") {
		console.log(myName +" "+ "Goodbye");
		alert(myName +" "+ "Goodbye")
	}else{
		console.log(myName +" "+ "Hello");
		alert(myName +" "+ "Hello")
	}
}

form.addEventListener('submit', retrieveFormValue)
//console.log(values.charAt())


