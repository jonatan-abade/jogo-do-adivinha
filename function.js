
var numRandom = Math.round(Math.random() * (10 - 0) + 0)

var tentativas = 10
var arrayTry = []

var infoTry = document.querySelector("#try")
var help = document.querySelector("#help")
var attempts = document.querySelector("#attempts")

function palpitar() {
    var txtNum = document.querySelector("#numero").value
    var num = parseInt(txtNum)

    if (num == numRandom) {
        window.alert("acertou")
    } else {
        tentativas--
        arrayTry.push(num)
        attempts.innerText = arrayTry
        infoTry.innerHTML = "Restam " + tentativas + " tentativas"
    }
}
