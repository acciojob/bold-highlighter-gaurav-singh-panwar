function highlight() {
  const boldWords = document.querySelectorAll('strong');
  boldWords.forEach((word) => {
    word.style.color = 'green';
  });
}

function return_normal() {
  const boldWords = document.querySelectorAll('strong');
  boldWords.forEach((word) => {
    word.style.color = 'black';
  });
}

const highlightLink = document.getElementById('highlightLink');
highlightLink.addEventListener('mouseover', highlight);
highlightLink.addEventListener('mouseout', return_normal);
