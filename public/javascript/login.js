async function signUp(e){
  e.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (response.ok) {
      console.log('success');
      document.location.replace('/dashboard');
      
    }
    else console.log(response.statusText);
  }
};

async function login(e) {
  e.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) document.location.replace('/dashboard');
    else console.log(response.statusText);
  }
}

document.querySelector('.signup-form').addEventListener('submit', signUp);
document.querySelector('.login-form').addEventListener('submit', login);