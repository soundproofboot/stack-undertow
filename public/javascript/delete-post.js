async function deletePost(e) {

  e.preventDefault();

  // get id from address bar
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  // api call to delete route to remove post from db
  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
  });

  // redirect user to their dashboard after delete
  if (response.ok) document.location.replace('/dashboard');
  else console.log(response.statusText);
}

// add handler to delete button
document.querySelector('.delete-post-btn').addEventListener('click', deletePost);