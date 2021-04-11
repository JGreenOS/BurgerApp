//Handlers for DOM
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
    console.info('DOM loaded');
}

//Use the button to UPDATE the status
 const changeEatBtns = document.querySelectorAll('.change-eat');

//Event listener for create burger button
 if(changeEatBtns) {
    changeEatBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            const newEat = e.target.getAttribute('data-neweat');

            const newEatState = {
                devoured: newEat,
            };

            fetch(`/api/burgers/${id}`, {
                method: 'PUT', 
                headers: {
                    Accept: 'application/json', 
                },

            body:JSON.stringify(newEatState),    
            }).then((response) => {
                if(response.ok) {
                    console.log(`changed burger to: ${newEat}`);
                    location.reload('/');
                } else {
                    alert(`Something went wrong! Whoops`);
                }
            });
        });
    });
}

//create button for the burgers
const createBurgerBtn = document.getElementById('create-form');

if(createBurgerBtn) {
    createBurgerBtn.addEventListener('submit', (e) => {
    e.preventDefault();

    const newBurger = {
        name: document.getElementById('burger').value.trim(),
    };
 //create the burgers
    fetch('/api/burgers', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newBurger),
       
// serialize the JSON
    }).then(() => {
        document.getElementById('burger').value = '';
    
        console.log('Created a new burger - Enjoy!');
        location.reload();
        });
    }

    )}
})