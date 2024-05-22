//Changing DOM with closure

function changeMode(size, weight, transform, background, color) {
	return function() {
		document.body.style.fontSize = size;
		document.body.style.fontWeight = weight;
		document.body.style.textTransform = transform;
		document.body.style.backgroundColor = background;
		document.body.style.color = color;
	};
}

function main() {
	let spooky = changeMode('9px', 'bold', 'uppercase', 'pink', 'green');
	let darkMode = changeMode('12px', 'bold', 'capitalize', 'black', 'white');
	let screamMode = changeMode('12px', 'normal', 'lowercase', 'white', 'black');

	// Création de l'élément paragraphe
const paragraph = document.createElement('p');

// Ajout du texte au paragraphe
const textNode = document.createTextNode('Welcome Holberton!');
paragraph.appendChild(textNode);

// Ajout du paragraphe au corps de la page
document.body.appendChild(paragraph);

const button = document.createElement('button');
const buttonNode = document.createTextNode('Spooky');
button.appendChild(buttonNode);
button.addEventListener('click', spooky); // Ajout du gestionnaire d'événements
document.body.appendChild(button);

const button2 = document.createElement('button');
const buttonNode2 = document.createTextNode('Dark mode');
button2.appendChild(buttonNode2);
button2.addEventListener('click', darkMode);
document.body.appendChild(button2);

const button3 = document.createElement('button');
const buttonNode3 = document.createTextNode('Scream mode');
button3.appendChild(buttonNode3);
button3.addEventListener('click', screamMode);
document.body.appendChild(button3);
}

main();
