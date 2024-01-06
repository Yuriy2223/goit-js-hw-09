const form = document.querySelector('.feedback-form');
const { email: inputEmail, message: inputMessage } = form.elements;

let formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

inputEmail.value =
  formData.email && typeof formData.email === 'string'
    ? formData.email.trim()
    : '';
inputMessage.value =
  formData.message && typeof formData.message === 'string'
    ? formData.message.trim()
    : '';

form.addEventListener('input', ({ target }) => {
  formData[target.name] = target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (inputEmail.value.trim() && inputMessage.value.trim()) {
    console.log(formData);

    inputEmail.value = '';
    inputMessage.value = '';
    formData = {};
    localStorage.removeItem('feedback-form-state');
  } else {
    alert('Please fill out both fields of the form before submitting.');
  }
});
