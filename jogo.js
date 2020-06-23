
var altura = 0
var largura = 0
var vidas = 1 
var tempo = 30
var criaMosquitoTempo = 2000
var mortes = 0

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'easy') {
	criaMosquitoTempo = 2000
}else if (nivel === "normal") {
	criaMosquitoTempo = 1500
}else if (nivel === "hard") {
	criaMosquitoTempo = 1000
	tempo = 60
}

function ajustaTamanhoPalcoJogo (){
	 altura = window.innerHeight
	 largura = window.innerWidth
	 console.log(altura,largura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
	tempo -=1
	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criamosca)
		window.location.href = 'vitoria.html'
	}else{
	document.getElementById('cronometro').innerHTML = tempo
	}
}, 1000)

function posicaoRandomica() {

	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		if(vidas > 4) {
			window.location.href ='fim_de_jogo.html'
		}else{
			document.getElementById('v'+vidas).src= "imagens/coracao_vazio.png"
			vidas ++
		}
	}
	var posicaoX = Math.floor(Math.random() * largura)-200
	var posicaoY = Math.floor(Math.random() * altura)-200

	posicaoX = posicaoX < 0 ? 0 :posicaoX
	posicaoY = posicaoY < 0 ? 0 :posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento hmtl
	var  mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX +'px'
	mosquito.style.top = posicaoY +'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()

	} 

	document.body.appendChild(mosquito)
	console.log(tamanhoAleatorio())
}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random()*4)
	
	switch(classe) {
		case 0:
		 return 'mosquito1'

		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
		case 3:
			return 'mosquito4'

	}
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random()*2)
	
	switch(classe) {
		case 0:
		 	return 'ladoA'

		case 1:
			return 'ladoB'
	}

}