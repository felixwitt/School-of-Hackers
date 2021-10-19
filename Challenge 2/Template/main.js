var currentPlayer = 'O';

function klick(id) {
    if (currentPlayer === 'X') {
        currentPlayer = 'O'
        document.getElementById(id).innerHTML = 'O'
        document.getElementById(id).disabled = true
        checkFinish()
    } else {
        currentPlayer = 'X'
        document.getElementById(id).innerHTML = 'X'
        document.getElementById(id).disabled = true
        checkFinish()
    }
}

function checkFinish() {
    if (document.getElementById("b1").innerHTML === 'X' && document.getElementById("b2").innerHTML === 'X' && document.getElementById("b3").innerHTML === 'X') {
        document.getElementById("result").innerHTML = 'Das Spiel ist vorbei! X hat gewonnen!'
    } else if (document.getElementById("b4").innerHTML === 'X' && document.getElementById("b5").innerHTML === 'X' && document.getElementById("b6").innerHTML === 'X') {
        document.getElementById("result").innerHTML = 'Das Spiel ist vorbei! X hat gewonnen!'
    } else if (document.getElementById("b7").innerHTML === 'X' && document.getElementById("b8").innerHTML === 'X' && document.getElementById("b9").innerHTML === 'X') {
        document.getElementById("result").innerHTML = 'Das Spiel ist vorbei! X hat gewonnen!'
    } else if (document.getElementById("b1").innerHTML === 'X' && document.getElementById("b4").innerHTML === 'X' && document.getElementById("b7").innerHTML === 'X') {
        document.getElementById("result").innerHTML = 'Das Spiel ist vorbei! X hat gewonnen!'
    } else if (document.getElementById("b2").innerHTML === 'X' && document.getElementById("b5").innerHTML === 'X' && document.getElementById("b8").innerHTML === 'X') {
        document.getElementById("result").innerHTML = 'Das Spiel ist vorbei! X hat gewonnen!'
    } else if (document.getElementById("b3").innerHTML === 'X' && document.getElementById("b6").innerHTML === 'X' && document.getElementById("b9").innerHTML === 'X') {
        document.getElementById("result").innerHTML = 'Das Spiel ist vorbei! X hat gewonnen!'
    } else if (document.getElementById("b1").innerHTML === 'X' && document.getElementById("b5").innerHTML === 'X' && document.getElementById("b9").innerHTML === 'X') {
        document.getElementById("result").innerHTML = 'Das Spiel ist vorbei! X hat gewonnen!'
    } else if (document.getElementById("b3").innerHTML === 'X' && document.getElementById("b5").innerHTML === 'X' && document.getElementById("b7").innerHTML === 'X') {
        document.getElementById("result").innerHTML = 'Das Spiel ist vorbei! X hat gewonnen!'
    } else if (document.getElementById("b1").innerHTML === 'O' && document.getElementById("b2").innerHTML === 'O' && document.getElementById("b3").innerHTML === 'O') {
        document.getElementById("result").innerHTML = 'Das Spiel ist vorbei! O hat gewonnen!'
    } else if (document.getElementById("b4").innerHTML === 'O' && document.getElementById("b5").innerHTML === 'O' && document.getElementById("b6").innerHTML === 'O') {
        document.getElementById("result").innerHTML = 'Das Spiel ist vorbei! O hat gewonnen!'
    } else if (document.getElementById("b7").innerHTML === 'O' && document.getElementById("b8").innerHTML === 'O' && document.getElementById("b9").innerHTML === 'O') {
        document.getElementById("result").innerHTML = 'Das Spiel ist vorbei! O hat gewonnen!'
    } else if (document.getElementById("b1").innerHTML === 'O' && document.getElementById("b4").innerHTML === 'O' && document.getElementById("b7").innerHTML === 'O') {
        document.getElementById("result").innerHTML = 'Das Spiel ist vorbei! O hat gewonnen!'
    } else if (document.getElementById("b2").innerHTML === 'O' && document.getElementById("b5").innerHTML === 'O' && document.getElementById("b8").innerHTML === 'X') {
        document.getElementById("result").innerHTML = 'Das Spiel ist vorbei! O hat gewonnen!'
    } else if (document.getElementById("b3").innerHTML === 'O' && document.getElementById("b6").innerHTML === 'O' && document.getElementById("b9").innerHTML === 'O') {
        document.getElementById("result").innerHTML = 'Das Spiel ist vorbei! O hat gewonnen!'
    } else if (document.getElementById("b1").innerHTML === 'O' && document.getElementById("b5").innerHTML === 'O' && document.getElementById("b9").innerHTML === 'O') {
        document.getElementById("result").innerHTML = 'Das Spiel ist vorbei! O hat gewonnen!'
    } else if (document.getElementById("b3").innerHTML === 'O' && document.getElementById("b5").innerHTML === 'O' && document.getElementById("b7").innerHTML === 'O') {
        document.getElementById("result").innerHTML = 'Das Spiel ist vorbei! O hat gewonnen!'
    }
}

function reset() {
}
