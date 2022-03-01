async function signUp(e) {
  e.preventDefault();

  // get values from form
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    // api call to create a new user in db
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log('success');
      // send user to their dashboard after successful signup
      document.location.replace('/dashboard');
    } else console.log(response.statusText);
  }
}

// add handler to form
document.querySelector('.signup-form').addEventListener('submit', signUp);