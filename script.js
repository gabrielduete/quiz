// Questões do quiz;
quest1 = ["Qual foi o primeiro computador totalmente programável?"]
quest2 = ["Qual foi o(a) primeiro(a) progamdor(a) do Mundo?"]
quest3 = ["Quem é considerado o pai da computação?"]
quest4 = ["Qual foi o primeiro computador pessoal moderno?"]
quest5 = ["Qual computador é conhecido como o melhor computador do mundo?"]
quest6 = [""]
quest7 = [""]
quest8 = [""]
quest9 = [""]
quest10 = [""]

//Respostas correspondente a cada questão;
resp1 = ["ENIAC", "EDVAC", "Macintosh", "Apple I"] // CORRETA -> 0
resp2 = ["Margaret Hamilton","Alan Turing","Condessa de Lovelace","Bill Gates"] // CORRETA -> 2
resp3 = ["Alan Turing","Bill Gates","Steve Jobs","Charles Babbage"] // Correta -> 0
resp4 = ["Apple I","IBM 5150","EDVAC",""] // CORRETA -> 3
resp5 = ["EDVAC","Apple I","Macintosh","Jaguar"] // CORRETA -> 4
resp6 = ["","","",""] //
resp7 = ["","","",""] //
resp8 = ["","","",""] //
resp9 = ["","","",""] //
resp10 = ["","","",""] //

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

// Variaveis;
var perg = document.querySelector('h2')
var ordem = document.querySelector('p')
var botaom1 = document.querySelector('button#botao1')
var botaom2 = document.querySelector('button#botao2')
var botaom3 = document.querySelector('button#botao3')
var botaom4 = document.querySelector('button#botao4')
var proxima = document.querySelector('button#ProximaQuest')
var checaBotaoClicado = false


// Mudança inicial;
perg.innerHTML = quest1
ordem.innerHTML = ord1
botaom1.innerHTML = resp1[0]
botaom2.innerHTML = resp1[1]
botaom3.innerHTML = resp1[2]
botaom4.innerHTML = resp1[3]

//Funções;
function clicouBotao(botaoClicado,array=resp1,indiceCerto=0){
    botaom1.value = array[0]
    botaom2.value = array[1]
    botaom3.value = array[2]
    botaom4.value = array[3]
    if (botaoClicado.value == array[indiceCerto]){
        botaoClicado.style.backgroundColor = 'rgb(13, 220, 13)'
        botaoClicado.style.color = 'black'

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
    botaom1.setAttribute('enable','enable')
    botaom2.setAttribute('enable','enable')
    botaom3.setAttribute('enable','enable')
    botaom4.setAttribute('enable','enable')
    botaom1.style.backgroundColor = 'white'
    botaom2.style.backgroundColor = 'white'
    botaom3.style.backgroundColor = 'white'
    botaom4.style.backgroundColor = 'white'
    botaom1.style.color = 'black'
    botaom2.style.color = 'black'
    botaom3.style.color = 'black'
    botaom4.style.color = 'black'
}

function proximaQuestao(botaoClicado){
    limpaBotao()
    perg.innerHTML = quest2
    ordem.innerHTML = ord2
    botaom1.innerHTML = resp2[0]
    botaom2.innerHTML = resp2[1]
    botaom3.innerHTML = resp2[2]
    botaom4.innerHTML = resp2[3]
    clicouBotao(botaoClicado,resp2,2)
}
