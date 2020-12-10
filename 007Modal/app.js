modalBtn = document.querySelector('.modal-btn');
modal = document.querySelector('.modal-overlay');
closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click',function(){
    modal.classList.add('open-modal');
});

closeBtn.addEventListener('click',function(){
    modal.classList.remove('open-modal');
});