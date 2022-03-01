// handler for function to create new post
async function createPost(e) {
  e.preventDefault();

  // get values from form
  const title = document.querySelector('#post-title').value.trim();
  const text = document.querySelector('#post-text-textarea').value.trim();

  if (title && text) {
    // make api call to add post to db
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

// add handler to post form
document.querySelector('.post-form').addEventListener('submit', createPost);