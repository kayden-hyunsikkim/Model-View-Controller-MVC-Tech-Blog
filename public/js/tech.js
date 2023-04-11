



const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/tech`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //console.log(response);
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
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);


if (document.querySelector('.project-list')) {
  document.addEventListener('click', delButtonHandler);
}


document
  .querySelector(".newpost")
  .addEventListener('click', function newpostHandler() {

    const postform = document.querySelector(".postform");
    postform.setAttribute("style", "border: 5px solid black;, display: block");
    
    const newpost = document.querySelector(".newpost");
    newpost.setAttribute("style", "display: none");
  });

