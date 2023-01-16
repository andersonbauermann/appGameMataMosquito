
let altura = 0
let largura = 0
let vidas = 1
let tempo = 90
let nivel = window.location.search.replace('?', '')
let criaMosquitoTempo = 1500

if (nivel === 'facil') {
    criaMosquitoTempo = 1800
} else if (nivel === 'normal') {
    criaMosquitoTempo = 1400
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000
}

function ajustaTelaJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}

ajustaTelaJogo()

let cronometro = setInterval(function(){
    tempo -= 1
    if (tempo < 0) {
        clearInterval(criaMosquito)
        clearInterval(cronometro)
        window.location.href='end_game.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandom() {
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if (vidas > 3) {
            window.location.href = 'game_over.html'
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }

    let posicaoX = Math.floor(Math.random() * largura) - 100
    let posicaoY = Math.floor(Math.random() * altura) - 100
    posicaoX = posicaoX < 0 ? 0 : posicaoX 
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = `${tamanhoRandom()} ${ladoRandom()}`
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    document.body.appendChild(mosquito)

    mosquito.onclick = function() {
        this.remove()
    }
}

function tamanhoRandom() {
    var classe = Math.floor(Math.random() * 3)
    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoRandom() {
    var classe = Math.floor(Math.random() * 2)
    switch(classe) {
        case 0:
            return 'ladoA'
        case 1: 
            return 'ladoB'
    }
}
