window.onload = function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const loginButton = document.getElementById('loginButton');
    const usernameDisplay = document.getElementById('username_login');
  
    if (loggedInUser) {
      loginButton.style.display = 'none';
      usernameDisplay.style.display = 'inline';
      usernameDisplay.textContent = loggedInUser;
    } else {
      loginButton.style.display = 'inline';
      usernameDisplay.style.display = 'none';
    }
  
    usernameDisplay.addEventListener('click', function() {
      localStorage.removeItem('loggedInUser');
      window.location.href = 'index.html';
    });
  }
  