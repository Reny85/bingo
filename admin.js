document.addEventListener('DOMContentLoaded', () => {
    const drawButton = document.getElementById('draw-button');
    const resetButton = document.getElementById('reset-button');
    const adminDrawnBallsList = document.getElementById('admin-drawn-balls-list');

    function drawBall() {
        let remainingBalls = JSON.parse(localStorage.getItem('remainingBalls')) || Array.from({ length: 75 }, (_, i) => i + 1);
        let drawnBalls = JSON.parse(localStorage.getItem('drawnBalls')) || [];

        if (remainingBalls.length === 0) {
            alert('¡Ya se han sorteado todas las bolas!');
            return;
        }

        const randomIndex = Math.floor(Math.random() * remainingBalls.length);
        const ball = remainingBalls.splice(randomIndex, 1)[0];
        drawnBalls.push(ball);

        localStorage.setItem('remainingBalls', JSON.stringify(remainingBalls));
        localStorage.setItem('drawnBalls', JSON.stringify(drawnBalls));

        updateDisplay();
    }

    function resetGame() {
        const initialBalls = Array.from({ length: 75 }, (_, i) => i + 1);
        localStorage.setItem('remainingBalls', JSON.stringify(initialBalls));
        localStorage.setItem('drawnBalls', JSON.stringify([]));

        updateDisplay();
    }

    function updateDisplay() {
        const drawnBalls = JSON.parse(localStorage.getItem('drawnBalls')) || [];
        adminDrawnBallsList.innerHTML = '';
        drawnBalls.forEach(ball => {
            const listItem = document.createElement('li');
            listItem.textContent = `Bola ${ball}`;
            adminDrawnBallsList.appendChild(listItem);
        });
    }

    drawButton.addEventListener('click', drawBall);
    resetButton.addEventListener('click', resetGame);

    updateDisplay();
});
