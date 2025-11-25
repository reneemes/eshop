const submitBtn = document.getElementById('submit-btn');
const commentBox = document.getElementById('comment-box');
const characterOutput = document.getElementById('character-output');

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');

const errorBox = document.querySelector('.error-message');

characterOutput.textContent = '0 / 500';

function openNav() {
  document.getElementById('mobile-nav').style.width = '250px';
}

function closeNav() {
  document.getElementById('mobile-nav').style.width = '0';
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  validateForm();
})

commentBox.addEventListener('input', () => {
  const currentLength = commentBox.value.length;
  characterOutput.textContent = `${currentLength} / 500`;
});

function validateForm() {
  if (
    firstName.value == '' ||
    lastName.value == '' ||
    email.value == '' ||
    commentBox.value == ''
  ) {
    e.preventDefault();
    errorBox.textContent = 'Please fill out all required forms.';
  } else {
    alert('Thank you for reaching out to Bagel Bites! We will get back to you shortly.');
    clearForm();
  }
}

function clearForm() {
  firstName.value = '';
  lastName.value = '';
  email.value = '';
  commentBox.value = '';
}