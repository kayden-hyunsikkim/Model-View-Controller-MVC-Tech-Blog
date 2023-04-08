
const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/tech`, {
      method: 'UPDATE',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    console.log(response.status);

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/tech/${id}`, {
      method: 'DELETE',
    });
    console.log(response);
    console.log(response.status);

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};


document
  .querySelector('.update')
  .addEventListener('submit', updateform);


document
  .querySelector('.delete')
  .addEventListener('click', delButtonHandler);






function updateform () {
  const hide = document.querySelector('.update');
  hide.setAttribute('style', 'display: none');

}