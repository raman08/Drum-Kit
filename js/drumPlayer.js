// Function to play sound
function playSound(e) {

	// Using the querySelector to find the element with associated data.
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

	// Finding the key element.
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

	const head = document.querySelector(".head");


	// If there is no audio element associated with the key process then return.
	if (!audio)
		return;

	//Revind the audio to the start.
	audio.currentTime = 0;

	//Playing the audio element.
	audio.play();

	//Adding the transition effect to the keys
	key.classList.add('playing');
	head.classList.add('playing_head');

}

//Function to remove transition
function removeTransition(e) {

	//If there is no transformation the skip
	if (e.propertyName !== 'transform')
		return;

	const head = document.querySelector(".head");

	// Removing the transformation
	this.classList.remove('playing');
	head.classList.remove('playing_head')

}

//Finding the audio element associated with the key precess.
window.addEventListener('keydown', playSound);

// Storing all the keys
const keys = document.querySelectorAll('.key');

// Looping to all the keys and removing the transition if there is any
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
