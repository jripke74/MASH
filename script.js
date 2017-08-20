function random_number(num) { // new function called random_choice that takes one parameter, num (or a number)
    // Get a random number between 0 and a passed-in number
    var num = num || 4; // if no number passed default to 4
	return Math.floor(Math.random() * num); // Round the answer down (floor)
    //of a random number between 0 and 1 and mltiply it by a number. Then return a value and exit the function.
}

function mash_choice() {
	var mash = ['mansion', 'apartment', 'shack', 'house'];
	var randomNum = random_number(4);
	return mash[randomNum];
}

function get_answer(category) {
	var choices = [];
	var selector = 'input[name="' + category + '[]"]';
	var inputs = document.querySelectorAll(selector);
	var answer;
	for (var i = 0; i < inputs.length; i++) {
		answer = inputs[i].value;
		if (answer !== '') {
			choices.push(answer);
		}
	}
	return choices[random_number(choices.length)];
}

function fill_in_answers(answers) {
	var home = document.querySelector('#home');
	var profession = document.querySelector('#profession');
	var pet = document.querySelector('#pet');
	var location = document.querySelector('#location');
	home.innerText = answer['mash'];
	profession.innerText = answers['profession'];
	pet.innerText = answers['pet'];
	location.innerText = answers['location'];
	home.innerText = answers.mash;
	profession.inputs = answers.profession;
	pet.innerText = answers.pet;
	location.innerText = answers.location;
}

function handle_submission(evt) {
	evt.preventDefault(); // Stop the form from reloading the page
	evt.stopPropagation();

	var answers = {
		'mash': mash_choice(),
		'profession': get_answer('profession'),
		'pet': get_answer('pet');
		'location': get_answer('location');
	}
	fill_in_answers(answers);

	var answer_div = document.querySelector('#answers');
	answer_div.classList.add('show');
}

var form = document.querySelector('#mash');
form.addEventListener('submit', handle_submission);
