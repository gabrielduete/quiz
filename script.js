// Questões do quiz.
quest1 = ["Qual foi o primeiro computador totalmente programável?"]
quest2 = [" Qual foi o(a) primeiro(a) progamdor(a) do Mundo?"]
quest3 = [""]
quest4 = [""]
quest5 = [""]
quest6 = [""]
quest7 = [""]
quest8 = [""]
quest9 = [""]
quest10 = [""]

//Respostas correspondente a cada questão. -> 
resp1 = ["ENIAC", "EDVAC", "Macintosh", "Apple I"]
resp2 = []
resp3 = []
resp4 = []
resp5 = []
resp6 = []
resp7 = []
resp8 = []
resp9 = []
resp10 = []

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


function teste(){
    var perg = document.querySelector('h2')
    var ordem = document.querySelector('p')
    var res1 = document.querySelector('button#botao1')
    var res2 = document.querySelector('button#botao2')
    var res3 = document.querySelector('button#botao3')
    var res4 = document.querySelector('button#botao4')

    perg.innerHTML = quest1
    ordem.innerHTML = ord1
    res1.innerHTML = resp1[0]
    res2.innerHTML = resp1[1]
    res3.innerHTML = resp1[2]
    res4.innerHTML = resp1[3]
}