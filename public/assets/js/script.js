document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }

    const changeBtn = document.querySelectorAll('.change-eaten');


    if(changeBtn) {
        changeBtn.forEach((button) => {
        button.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        const newburger = e.target.getAttribute('data-newburger');
        const newBurgerState = {
            eaten: newburger,
        };
        
        fetch(`api/burgers/${id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(newBurgerState),
        })
        .then((response) => {
        if (response.ok) {
            console.log(`Created ${newburger}`);
            location.reload('/');
          } else {
            alert('Something went wrong! oops');
          }
        });
      });
      
    });
}


const createBtn = document.getElementById('create-form');

  if (createBtn) {
      createBtn.addEventListener('submit', (e) => {
      e.preventDefault();


      const newBurger = {
        burger_name: document.getElementById('ca').value.trim(),
        eaten: document.getElementById('eaten').checked,
      };

  
      fetch('/api/burgers', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

      
        body: JSON.stringify(newBurger),
      }).then(() => {
      
        document.getElementById('ca').value = '';

  
        console.log('New Burger created');
        location.reload();
      });
    });
  }

  // DELETE
  const deleteBtns = document.querySelectorAll('.delete-burger');

  // Set up the event listeners for each delete button
  deleteBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');

      // Send the delete request
      fetch(`/api/burgers/${id}`, {
        method: 'DELETE',
      }).then((res) => {
        console.log(res);
        console.log(`Deleted burger: ${id}`);

        // Reload the page
        location.reload();
      });
    });
  });
});
