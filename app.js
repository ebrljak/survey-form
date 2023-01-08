const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const age = document.getElementById('number');

const question1 = document.querySelector('input[name="choice"]:checked').value;
const question2 = document.querySelector('input[name="choice1"]:checked').value;

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const nameValue = name.value.trim();
	const emailValue = email.value.trim();
    const ageValue = age.value.trim();
	
	if(nameValue === '') {
		setErrorFor(name, 'Name cannot be blank');
	} else {
		setSuccessFor(name);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

    if (ageValue === '') {
        setErrorFor(age, 'Age cannot be blank');
    } else {
        setSuccessFor(age);
    }
	
}


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
