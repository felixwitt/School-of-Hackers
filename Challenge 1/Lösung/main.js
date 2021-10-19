var currentPlayer = 'O';

function klick(id) {
    if (currentPlayer === 'X') {
        currentPlayer = 'O'
        document.getElementById(id).innerHTML = 'O'
        document.getElementById(id).disabled = true
        checkFinish()
    } else {

    }
}

function checkFinish() {
    if (getElementById("b1").innerHTML === 'X' && getElementById("b2").innerHTML === 'X' && getElementById("b3").innerHTML === 'X') {
        document.getElementById("result").innerHTML = 'Das Spiel ist vorbei! ' + winner + ' hat gewonnen!'
    }
}

function reset() {
}
