document.addEventListener('DOMContentLoaded', () => {
    const bingoBall = document.getElementById('bingo-ball');
    const drawnBallsList = document.getElementById('drawn-balls-list');

    function updateDisplay() {
        const drawnBalls = JSON.parse(localStorage.getItem('drawnBalls')) || [];
        const latestBall = drawnBalls[drawnBalls.length - 1];
        bingoBall.textContent = latestBall || '0';

        drawnBallsList.innerHTML = '';
        drawnBalls.forEach(ball => {
            const listItem = document.createElement('li');
            listItem.textContent = `Bola ${ball}`;
            drawnBallsList.appendChild(listItem);
        });
    }

    updateDisplay();
});
