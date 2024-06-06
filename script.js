// Questao 2
let caixa = document.getElementById("caixa")
let ver = document.getElementById("exibir")

function mostrar()
{
    ver.innerHTML= "ola, "+ caixa.value +" tudo bem?"
}

//Questao 3
 var metros = document.getElementById("metros")
 var ta = 100
 var sim = document.getElementById("sim")

 function transforma()
 {
    sim.innerHTML = parseInt(metros.value) * ta
 }

 //Questao 4

 


 //Questao 5
let numero = document.getElementById("numero")
let outro = document.getElementById("outro")
let maior= document.getElementById("maior")

function resposta()
{
    if(numero.value > outro.value)
        {
            maior.innerHTML= outro.value
        }

        else
        {
            maior.innerHTML = numero.value
        }
}

//Questao 6

//Questao 7

var m = 0
while (m <= 100)
    {
        console.log(m)
        m = m + 1
    }

//Questao 8

var p = 0
while (p <= 50)
    {
        console.log(p)
        p = p + 5
    }

//Questao 9

var a = 100
while (a >= 0)
    {
        console.log(a)
        a = a - 10
    }
