async function editPost(e) {
  e.preventDefault();

  // grab values from page, id from address bar
  const title = document.querySelector('input[name="post-title"]').value.trim();
  const text = document.querySelector('textarea[name="post-text"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length-1
  ];

  // api call to update the post in the db
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      post_title: title,
      post_text: text
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // redirect to user's dashboard
  if (response.ok) document.location.replace('/dashboard');
  else console.log(response.statusText);
}

// add handler to form
document.querySelector('.post-form').addEventListener('submit', editPost);