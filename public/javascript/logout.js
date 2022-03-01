async function logout() {
  // api call to destroy user's session
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    // send user back to homepage after log out
    document.location.replace('/');
  } else {
    console.log(response.statusText);
  }
};

// add handler to logout link
document.querySelector('#logout').addEventListener('click', logout);