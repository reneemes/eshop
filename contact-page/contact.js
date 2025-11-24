const submitBtn = document.getElementById('submit-btn');
const commentBox = document.getElementById('comment-box');
const characterOutput = document.getElementById('character-output');

characterOutput.textContent = '0 / 500';

function openNav() {
  document.getElementById('header-nav').style.width = '250px';
}

function closeNav() {
  document.getElementById('header-nav').style.width = '0';
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
})

commentBox.addEventListener('input', () => {
  const currentLength = commentBox.value.length;
  characterOutput.textContent = `${currentLength} / 500`;
});
