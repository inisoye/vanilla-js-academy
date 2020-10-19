/* matches polyfill */
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}

const passwordFields = Array.from(
  document.querySelectorAll('input[type="password"]')
);

const togglePasswordVisibility = (checkbox, passwordIds) => {
  passwordFields.forEach((passwordField) => {
    passwordIds.forEach((passwordId) => {
      if (passwordField.matches(passwordId)) {
        checkbox.checked
          ? (passwordField.type = 'text')
          : (passwordField.type = 'password');
      }
    });
  });
};

window.addEventListener('click', (event) => {
  if (event.target.id === 'show-password') {
    togglePasswordVisibility(event.target, ['#password']);
  }
  if (event.target.id === 'show-passwords') {
    togglePasswordVisibility(event.target, [
      '#current-password',
      '#new-password',
    ]);
  }
});
