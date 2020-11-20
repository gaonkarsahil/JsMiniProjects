let count = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        elementClasses = e.currentTarget.classList;
        
        //Since there are only 3 buttons we are not checking for reset and directly using it in else part.
        if(elementClasses.contains('decrease')){
            count--;
        } else if(elementClasses.contains('increase')){
            count++;
        } else{
            count = 0;
        }

        value.textContent = count;

        if(count < 0){
            value.style.color = 'red';
        } else if(count > 0){
            value.style.color = 'green';
        } else {
            value.style.color = 'black';
        }
    });
});