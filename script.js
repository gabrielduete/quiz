// Questões do quiz.
quest1 = ["Qual foi o primeiro computador totalmente programável?"]
quest2 = [" Qual foi o(a) primeiro(a) progamdor(a) do Mundo?"]
quest3 = ["Quem é considerado o pai da computação?"]
quest4 = ["Qual foi o primeiro computador pessoal moderno?"]
quest5 = [""]
quest6 = [""]
quest7 = [""]
quest8 = [""]
quest9 = [""]
quest10 = [""]

//Respostas correspondente a cada questão. -> 
resp1 = ["ENIAC", "EDVAC", "Macintosh", "Apple I"] // CORRETA -> 0
resp2 = ["Margaret Hamilton","Alan Turing","Condessa de Lovelace","Bill Gates"] // CORRETA -> 2
resp3 = ["Alan Turing","Bill Gates","Steve Jobs","Charles Babbage"] // Correta -> 0
resp4 = ["Apple I","IBM 5150","EDVAC",""] //
resp5 = ["","","",""] //
resp6 = ["","","",""] //
resp7 = ["","","",""] //
resp8 = ["","","",""] //
resp9 = ["","","",""] //
resp10 = ["","","",""] //

//Ordem da Questão /
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

// Variaveis
var perg = document.querySelector('h2')
var ordem = document.querySelector('p')
var botaom1 = document.querySelector('button#botao1')
var botaom2 = document.querySelector('button#botao2')
var botaom3 = document.querySelector('button#botao3')
var botaom4 = document.querySelector('button#botao4')
var proxima = document.querySelector('button#ProximaQuest')
var checaBotaoClicado = false


//Funções

function teste(){
    perg.innerHTML = quest1
    ordem.innerHTML = ord1
    botaom1.innerHTML = resp1[0]
    botaom2.innerHTML = resp1[1]
    botaom3.innerHTML = resp1[2]
    botaom4.innerHTML = resp1[3]

}

function clicouBotao(botaoClicado){
    botaom1.value = resp1[0]
    botaom2.value = resp1[1]
    botaom3.value = resp1[2]
    botaom4.value = resp1[3]
    if (botaoClicado.value == resp1[0]){
        document.querySelector('button#botao1').style.backgroundColor = 'rgb(13, 220, 13)'
    }else{
        botaoClicado.style.backgroundColor = 'red'
    }
    document.getElementById('ProximaQuest').style.visibility = 'visible'
    document.getElementById('ProximaQuest').style.display = 'inline'
}

