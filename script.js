// Questões do quiz;
quest1 = ["Qual foi o primeiro computador totalmente programável?"]
quest2 = ["Qual foi o(a) primeiro(a) progamdor(a) do Mundo?"]
quest3 = ["Quem é considerado o pai da computação?"]
quest4 = ["Qual foi o primeiro computador pessoal moderno?"]
quest5 = ["Qual computador é conhecido como o melhor computador do mundo?"]
quest6 = ["Quando lançou o primeiro computador voltado para o uso doméstico?"]
quest7 = ["Qual a primeira linguagem de programação criada?"]
quest8 = ["Quem inventou o primeiro compilador?"]
quest9 = ["Quem inventou o World Wide Web?"]
quest10 = ["Quem idealizou o sistema Windows?"]

//Respostas correspondente a cada questão;
resp1 = ["ENIAC", "EDVAC", "Macintosh", "Apple I"] // CORRETA -> 0
resp2 = ["Margaret Hamilton","Alan Turing","Condessa de Lovelace","Bill Gates"] // CORRETA -> 2
resp3 = ["Alan Turing","Bill Gates","Steve Jobs","Charles Babbage"] // Correta -> 0
resp4 = ["Apple I","IBM 5150","EDVAC","Jaguar"] // CORRETA -> 1
resp5 = ["EDVAC","Apple I","Macintosh","Jaguar"] // CORRETA -> 3
resp6 = ["1999","1976","1981","2000"] // CORRETA -> 2
resp7 = ["Plankalkül","COBOL","Fortran","Pascal"] // CORRETA -> 0
resp8 = ["Margaret Hamilton","Grace Hopper","Alan Turing","Charles Babbage"] // CORRETA -> 1
resp9 = ["Alan Turing","Bill Gates","Tim Berners-Lee","Steve Jobs"] // CORRETA -> 2
resp10 = ["Bill Gates","Gabriel Duete","Steve Jobs","Charles Babbage"] // CORRETA -> 1

//Ordem da Questão;
ord1 = ["Questão 1/10"]
ord2 = ["Questão 2/10"]
ord3 = ["Questão 3/10"]
ord4 = ["Questão 4/10"]
ord5 = ["Questão 5/10"]
ord6 = ["Questão 6/10"]
ord7 = ["Questão 7/10"]
ord8 = ["Questão 8/10"]
ord9 = ["Questão 9/10"]
ord10 = ["Questão 10/10"]

sequenciaResposta = [ 0, 2, 0, 1, 3, 2, 0, 1, 2, 0]

// Variaveis;
var perg = document.querySelector('h2')
var ordem = document.querySelector('p')
var botaom1 = document.querySelector('button#botao1')
var botaom2 = document.querySelector('button#botao2')
var botaom3 = document.querySelector('button#botao3')
var botaom4 = document.querySelector('button#botao4')
var proxima = document.querySelector('button#ProximaQuest')
var index = document.querySelector('input#index')
var contador = 0

// Mudança inicial;
perg.innerHTML = quest1
ordem.innerHTML = ord1
botaom1.innerHTML = resp1[0]
botaom2.innerHTML = resp1[1]
botaom3.innerHTML = resp1[2]
botaom4.innerHTML = resp1[3]

//Funções;
function clicouBotao(botaoClicado) {
    let indexNumber = Number(index.value)
    let indexAnswer = sequenciaResposta[Number(index.value) - 1]

    if (botaoClicado.innerHTML == window["resp" + indexNumber][indexAnswer]){
        botaoClicado.style.backgroundColor = 'rgb(13, 220, 13)'
        botaoClicado.style.color = 'black'
        contador += 1
    }else{
        botaoClicado.style.backgroundColor = 'red'
        botaoClicado.style.color = 'black'
    }

    document.getElementById('ProximaQuest').style.visibility = 'visible'
    document.getElementById('ProximaQuest').style.display = 'inline'
    
    botaom1.setAttribute('disabled','disabled')
    botaom2.setAttribute('disabled','disabled')
    botaom3.setAttribute('disabled','disabled')
    botaom4.setAttribute('disabled','disabled')
}
function limpaBotao(){
    botaom1.removeAttribute('disabled')
    botaom2.removeAttribute('disabled')
    botaom3.removeAttribute('disabled')
    botaom4.removeAttribute('disabled')
    botaom1.style.backgroundColor = 'white'
    botaom2.style.backgroundColor = 'white'
    botaom3.style.backgroundColor = 'white'
    botaom4.style.backgroundColor = 'white'
    botaom1.style.color = 'black'
    botaom2.style.color = 'black'
    botaom3.style.color = 'black'
    botaom4.style.color = 'black'
}

function proximaQuestao(){
    index.value = Number(index.value) + 1
    limpaBotao()
    perg.innerHTML = window["quest" + index.value]
    ordem.innerHTML = window["ord" + index.value]
    botaom1.innerHTML = window["resp" + index.value][0]
    botaom2.innerHTML = window["resp" + index.value][1]
    botaom3.innerHTML = window["resp" + index.value][2]
    botaom4.innerHTML = window["resp" + index.value][3]
    document.getElementById('ProximaQuest').style.visibility = 'hidden'
    document.getElementById('ProximaQuest').style.display = 'none'

}
