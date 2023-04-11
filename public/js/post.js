
const newFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#comment').value.trim();
  const id = event.target.getAttribute('data-techid');
  console.log(id);

  if (comment) {
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/tech/${id}`);
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
    //console.log(response);
    console.log(response.status);

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};



document
  .querySelector('.comment')
  .addEventListener('click', newFormHandler);
  
document
  .querySelector('.delete')
  .addEventListener('click', delButtonHandler);


document
  .querySelector(".update")
  .addEventListener('click', function newpostHandler() {

    const postform = document.querySelector(".postform");
    postform.setAttribute("style", "border: 5px solid black;, display: block");
    }
  
    
    
    );



  document
  .querySelector(".comment")
  .addEventListener('click', function newcommentHandler() {

    const comment = document.querySelector(".comment");
    comment.setAttribute("style", "border: 5px solid black;, display: block");
    
  
  });
