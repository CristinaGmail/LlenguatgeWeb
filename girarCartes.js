
const cartaAmunt = (element) => {
  element.src = element.title;
}
const cartaAvall = (element) => {
  element.src = "img/coberta.png";
}
const girarCarta = (element) => {
  if (element.src.includes("coberta.png")) element.src = element.title;
  else element.src = "img/coberta.png";
}

const girarTotes = (com) => {
	let elementsImg = document.querySelectorAll('.carta');
	elementsImg.forEach(function(element) {
	  if (com == 'amunt') cartaAmunt(element);
	  else if (com == 'avall') cartaAvall(element);
	  else girarCarta(element);
	});
}

window.onload = function(){
	let cartes = document.querySelectorAll('.carta');
	cartes.forEach(function(carta){
	  carta.addEventListener(
		'click',
		() => girarCarta(carta)
	  )
	});
	document
	  .getElementById('boto1')
	  .addEventListener(
		'click',
		() => girarTotes()
	  );
	document
	  .getElementById('boto2')
	  .addEventListener(
		'click',
		() => girarTotes('amunt')
	  );
	document
	  .getElementById('boto3')
	  .addEventListener(
		'click',
		() => girarTotes('avall')
	  ); 
}