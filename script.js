document.addEventListener('DOMContentLoaded', () => {
    const drawButton = document.getElementById('draw-button');
    const bingoBall = document.getElementById('bingo-ball');
    const drawnBallsList = document.getElementById('drawn-balls-list');
    let remainingBalls = Array.from({ length: 75 }, (_, i) => i + 1);
    let drawnBalls = [];

    function drawBall() {
        if (remainingBalls.length === 0) {
            alert('¡Ya se han sorteado todas las bolas!');
            return;
        }

        const randomIndex = Math.floor(Math.random() * remainingBalls.length);
        const ball = remainingBalls.splice(randomIndex, 1)[0];
        drawnBalls.push(ball);
        bingoBall.textContent = ball;

        const listItem = document.createElement('li');
        listItem.textContent = `Bola ${ball}`;
        drawnBallsList.appendChild(listItem);
    }

    drawButton.addEventListener('click', drawBall);
});
