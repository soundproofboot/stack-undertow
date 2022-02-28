async function editPost(e) {
  e.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const text = document.querySelector('textarea[name="post-text"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length-1
  ];

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

  if (response.ok) document.location.replace('/dashboard');
  else console.log(response.statusText);
}

document.querySelector('.post-form').addEventListener('submit', editPost);