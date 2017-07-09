var ceil = document.getElementsByClassName('game-item'),
    reset = document.getElementById('reset-game'),
    message = document.getElementById('message'),
    player = 'X',
    stepCount = 0,
    winCombinations = [
        [1, 2, 3],
        [1, 4, 7],
        [1, 5, 9],
        [2, 5, 8],
        [3, 4, 6],
        [3, 5, 7],
        [4, 5, 6],
        [7, 8, 9]
    ],
    dataX = [],
    dataO = [];

for (var i = 0; i < ceil.length; i++) {
    ceil[i].addEventListener('click', currentStep);
}

function currentStep() {
    var num = +this.getAttribute('data-ceil');
    if (!this.textContent) {
        this.innerText = player;
        (player === 'X') ? dataX.push(num) && this.classList.add('x'): dataO.push(num) && this.classList.add('o');
        if ((dataX.length > 2 || dataO > 2) && (checkWin(dataO, num) || checkWin(dataX, num))) {
            for (var i = 0; i < ceil.length; i++) {
                ceil[i].removeEventListener('click', currentStep);
            }
            return (message.innerText = 'Победил игрок ' + player)
        }
        changePlayer();
        stepCount++;
        (stepCount === 9) ? (message.innerText = 'Ничья') : (message.innerText = 'Ходит игрок ' + player);
    }
}

function changePlayer() {
    player === 'X' ? (player = 'O') : (player = 'X');
}

reset.addEventListener('click', function () {
    for (var i = 0; i < ceil.length; i++) {
        ceil[i].innerText = '';
        ceil[i].addEventListener('click', currentStep);
        ceil[i].classList.remove('x', 'o');
    }
    dataX = [];
    dataO = [];
    player = 'X';
    stepCount = 0;
    message.innerText = 'Ходит игрок ' + player;
});

function checkWin(arr, number) {
    for (var w = 0, wLen = winCombinations.length; w < wLen; w++) {
        var winArr = winCombinations[w],
            count = 0;
        if (winArr.indexOf(number) !== -1) {
            for (var k = 0, kLen = winArr; k < winArr.length; k++) {
                if (arr.indexOf(winArr[k]) !== -1) {
                    count++;
                    if (count === 3) {
                        return true;
                    }
                }
            }
            count = 0;
        }
    }
}