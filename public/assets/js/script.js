
document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.info('DOM loaded');
  }

//Use the button to UPDATE the status
 const changeEatBtns = document.querySelectorAll('.change-eaten');
// console.log(changeEatBtns);

//Event listener for create burger b
 if (changeEatBtns) {
    changeEatBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            const newEat = e.target.getAttribute(' ');
            console.log('what is id?', id);
            console.log('what is newEat value?', newEat);
console.log("what is newEat right now before newEatState", newEat);
            const newEatState = {
                eaten: newEat === '1' ? false : true
                //eaten : newEat,        
            };
          console.log("newEatState is", newEatState);
          console.log("newEat is", newEat);
            fetch(`/api/burger/:${id}`, {
                method: 'PUT', 
                headers: {
                    Accept: 'application/json', 
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(newEatState),    
            }).then((response) => {
                if (response.ok) {
                    console.log(`changed burger to: ${newEat}`);
                    location.reload('/');
                } else {
                    alert('Something went wrong! Whoops');
                }
            });
        });
    });
  }

//create button for the burgers
const createBurgerBtn = document.getElementById('create-form');

if (createBurgerBtn) {
    createBurgerBtn.addEventListener('submit', (e) => {
    e.preventDefault();

    const newBurger = {
        burger_name: document.getElementById('ba').value.trim(),
        eaten: document.getElementById('eaten').checked,
    };
 //create the burgers
    fetch('/api/burger', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBurger),
       
// serialize the JSON
    }).then(() => {
        document.getElementById('ba').value = '';
    
        console.log('Created a new burger - Enjoy!');
        location.reload();
        });
    });
}
 
})
