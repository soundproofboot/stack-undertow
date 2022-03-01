async function commentForm(e) {
  e.preventDefault();

  // pull text from page and post id from end of address bar
  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length -1
  ];

  // if text has been entered
  if (comment_text) {
    // make api call to create the new comment
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      console.log(response.statusText);
    }
  }
};

// add listener to comment form
document.querySelector('.comment-form').addEventListener('submit', commentForm);