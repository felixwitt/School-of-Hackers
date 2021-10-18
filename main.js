var currentPlayer = 'O';

function klick(id) {
    if (currentPlayer === 'X') {
        currentPlayer = 'O'
        getElementById(id).innerHTML = 'O'
        getElementById(id).disabled = true
        checkFinish()
    } else {
        currentPlayer = 'X'
        getElementById(id).innerHTML = 'X'
        getElementById(id).disabled = true
        checkFinish()
    }
}

function checkFinish() {
    if (getElementById("b1").innerHTML === currentPlayer && getElementById("b2").innerHTML === currentPlayer && getElementById("b3").innerHTML === currentPlayer) {
        setResultText(currentPlayer)
        disableAll()
    } else if (getElementById("b4").innerHTML === currentPlayer && getElementById("b5").innerHTML === currentPlayer && getElementById("b6").innerHTML === currentPlayer) {
        setResultText(currentPlayer)
        disableAll()
    } else if (getElementById("b7").innerHTML === currentPlayer && getElementById("b8").innerHTML === currentPlayer && getElementById("b9").innerHTML === currentPlayer) {
        setResultText(currentPlayer)
        disableAll()
    } else if (getElementById("b1").innerHTML === currentPlayer && getElementById("b4").innerHTML === currentPlayer && getElementById("b7").innerHTML === currentPlayer) {
        setResultText(currentPlayer)
        disableAll()
    } else if (getElementById("b2").innerHTML === currentPlayer && getElementById("b5").innerHTML === currentPlayer && getElementById("b8").innerHTML === currentPlayer) {
        setResultText(currentPlayer)
        disableAll()
    } else if (getElementById("b3").innerHTML === currentPlayer && getElementById("b6").innerHTML === currentPlayer && getElementById("b9").innerHTML === currentPlayer) {
        setResultText(currentPlayer)
        disableAll()
    } else if (getElementById("b1").innerHTML === currentPlayer && getElementById("b5").innerHTML === currentPlayer && getElementById("b9").innerHTML === currentPlayer) {
        setResultText(currentPlayer)
        disableAll()
    } else if (getElementById("b3").innerHTML === currentPlayer && getElementById("b5").innerHTML === currentPlayer && getElementById("b7").innerHTML === currentPlayer) {
        setResultText(currentPlayer)
        disableAll()
    }
}

function getElementById(id) {
    return document.getElementById(id)
}

function disableAll() {
    getElementById("b1").disabled = true
    getElementById("b2").disabled = true
    getElementById("b3").disabled = true
    getElementById("b4").disabled = true
    getElementById("b5").disabled = true
    getElementById("b6").disabled = true
    getElementById("b7").disabled = true
    getElementById("b8").disabled = true
    getElementById("b9").disabled = true
}

function enableAll() {
    getElementById("b1").disabled = false
    getElementById("b2").disabled = false
    getElementById("b3").disabled = false
    getElementById("b4").disabled = false
    getElementById("b5").disabled = false
    getElementById("b6").disabled = false
    getElementById("b7").disabled = false
    getElementById("b8").disabled = false
    getElementById("b9").disabled = false
}

function reset() {
    enableAll()
    getElementById("result").innerHTML = null
    getElementById("b1").innerHTML = null
    getElementById("b2").innerHTML = null
    getElementById("b3").innerHTML = null
    getElementById("b4").innerHTML = null
    getElementById("b5").innerHTML = null
    getElementById("b6").innerHTML = null
    getElementById("b7").innerHTML = null
    getElementById("b8").innerHTML = null
    getElementById("b9").innerHTML = null
    currentPlayer = 'O'
}

function setResultText(winner) {
    getElementById("result").innerHTML = 'Das Spiel ist vorbei! ' + winner + ' hat gewonnen!'
}
