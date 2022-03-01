async function login(e) {
  e.preventDefault();

  // get info from form
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    // api call to login user
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    // send user to their dashboard
    if (response.ok) document.location.replace('/dashboard');
    else console.log(response.statusText);
  }
}

// add handler to login form
document.querySelector('.login-form').addEventListener('submit', login);