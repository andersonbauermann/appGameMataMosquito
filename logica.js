
let altura = 0
let largura = 0
function ajustaTelaJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}

ajustaTelaJogo()

function posicaoRandom() {
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
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
