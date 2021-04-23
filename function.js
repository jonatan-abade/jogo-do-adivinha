
var numRandom = Math.round(Math.random() * (100 - 0) + 0)

var tentativas = 10
var arrayTry = []

var blockInfo = document.querySelector("#info")
var help = document.querySelector("#help")
var infoTry = document.querySelector("#try")
var attempts = document.querySelector("#attempts")
var btnPalpite = document.querySelector("#palpite")

document.querySelector("#numero").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        palpitar()
    }
})
function palpitar() {
    var inptNum = document.querySelector("#numero")
    var num = parseInt(inptNum.value)

    if (tentativas != 0) {
        if (validaNum(num)) {

            if (num != numRandom) {
                blockInfo.style.display = "flex"
                document.querySelector("main").style.height = "50vh"
                tentativas--
                arrayTry.push(num)
                if (num < numRandom) {
                    help.innerHTML = '<ion-icon class="information-circle" name="information-circle"></ion-icon> O número é maior'
                } else {
                    help.innerHTML = '<ion-icon class="information-circle" name="information-circle"></ion-icon> O número é menor'
                }
                attempts.innerHTML = '<ion-icon  class="locate-outline" name="locate-outline"></ion-icon> Números já tentados: { ' + arrayTry + ' }'
                infoTry.innerHTML = '<ion-icon class="heart" name="heart"></ion-icon>' + " Restam " + tentativas + " tentativas"
                inptNum.value = null
                inptNum.focus()
            } else {
                blockInfo.innerHTML = '<div class="result win"><ion-icon name="happy-outline"></ion-icon><p>Parabéns você acertou!!!<br>O número correto é ' + numRandom + '<br><button onclick="document.location.reload(true)"><ion-icon name="refresh-outline"></ion-icon>Jogar novamente</button></p></div>'
            }
        } else {
            help.innerHTML = '<ion-icon class="information-circle" name="information-circle"></ion-icon> Digite um valor valido!!!'
        }
    } else {
        blockInfo.innerHTML = '<div class="result lose"><ion-icon name="sad-outline"></ion-icon><p>Acabaram suas tentativas...<br>O número correto era ' + numRandom + '<br><button onclick="document.location.reload(true)"><ion-icon name="refresh-outline"></ion-icon>Tentar novamente</button></p></div>'

    }
}

function validaNum(n) {
    if (n != null || n != "") {
        if (n >= 0 && n <= 100) {
            return true
        }
    } else {
        return false
    }
}