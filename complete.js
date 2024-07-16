document.addEventListener('DOMContentLoaded', () => {
    const scorePercentage = document.getElementById('score-percentage');
    const score = localStorage.getItem('scorePercentage');
    if (score) {
      scorePercentage.textContent = score;
    }
  });
  