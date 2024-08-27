document.addEventListener('DOMContentLoaded', () => {
    const resetButton = document.getElementById('reset-button');
    const adminDrawnBallsList = document.getElementById('admin-drawn-balls-list');
    let remainingBalls = Array.from({ length: 75 }, (_, i) => i + 1);
    let drawnBalls = [];

    function resetGame() {
        remainingBalls = Array.from({ length: 75 }, (_, i) => i + 1);
        drawnBalls = [];
        adminDrawnBallsList.innerHTML = '';
    }

    resetButton.addEventListener('click', resetGame);
});
