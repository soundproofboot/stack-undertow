async function createPost(e) {
  e.preventDefault();
  console.log('click create button');
  const title = document.querySelector('#post-title').value.trim();
  const text = document.querySelector('#post-text-textarea').value.trim();
  console.log(`${title} and ${text}`)
  if (title && text) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        post_title: title,
        post_text: text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      console.log(response.statusText);
    }
  }
}

document.querySelector('.post-form').addEventListener('submit', createPost);