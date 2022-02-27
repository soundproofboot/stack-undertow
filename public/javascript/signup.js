async function signUp(e) {
  e.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
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
      document.location.replace('/dashboard');
    } else console.log(response.statusText);
  }
}

document.querySelector('.signup-form').addEventListener('submit', signUp);