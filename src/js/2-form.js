const form = document.querySelector('.feedback-form');
const { email: inputEmail, message: inputMessage } = form.elements;

const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

inputEmail.value = formData.email || '';
inputMessage.value = formData.message || '';

form.addEventListener('input', ({ target }) => {
  formData[target.name] = target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  console.log(formData);

  inputEmail.value = '';
  inputMessage.value = '';
  localStorage.removeItem('feedback-form-state');
});
