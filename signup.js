document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;

  if (localStorage.getItem('username') === newUsername) {
    alert('Username already exists. Please choose a different username.');
  } else {
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);
    alert('Account created successfully! Please log in.');
    window.location.href = 'login.html';
  }
});
