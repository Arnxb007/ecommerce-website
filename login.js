document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;
  
    const storedUser = localStorage.getItem('username');
    const storedPass = localStorage.getItem('password');
  
    if (username === storedUser && password === storedPass) {
      alert('Login successful!');
      localStorage.setItem('loggedInUser', username);
      window.location.href = 'index.html';
    } else {
      alert('Wrong username or password.');
    }
  });
  