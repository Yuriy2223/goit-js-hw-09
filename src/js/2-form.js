// Отримуємо форму та її елементів
const form = document.querySelector('.feedback-form');
const { email: inputEmail, message: inputMessage } = form.elements;

// Створення порожнього об'єкта
const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

// Встановлення значень полів форми
inputEmail.value = formData.email || '';
inputMessage.value = formData.message || '';

// Додавання обробника подій для події input
form.addEventListener('input', ({ target }) => {
  // Збереження значень полів у об'єкті formData та локальному сховищі
  formData[target.name] = target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Додавання обробника подій для події submit
form.addEventListener('submit', evt => {
  // Запобігання стандартної поведінки форми
  evt.preventDefault();

  console.log(formData);

  // Очищення полів форми та локального сховища
  inputEmail.value = '';
  inputMessage.value = '';
  localStorage.removeItem('feedback-form-state');
});
