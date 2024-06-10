/*!
 * © 2024 Arnab Paul. All rights reserved.
 * This file is part of Mega Tech Arn_x.b.
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

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
  