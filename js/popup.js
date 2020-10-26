let contactsMaps = document.querySelector('.contacts-maps');
let popupMap = document.querySelector('.modal-map');

let contactsButton = document.querySelector('.contacts-button');
let popupForm = document.querySelector('.modal-forms');

let closeModalMap = document.querySelector('.close-modal-map');
let closeModalForm = document.querySelector('.close-modal');

contactsMaps.addEventListener('click', function(evt){
    evt.preventDefault();
    popupMap.classList.add('modal-map-showe');
});

closeModalMap.addEventListener('click', function(evt){
    evt.preventDefault();
    popupMap.classList.remove('modal-map-showe');
});

contactsButton.addEventListener('click', function(evt){
    evt.preventDefault();
    popupForm.classList.add('modal-form-showe');
});

closeModalForm.addEventListener('click', function(evt){
    evt.preventDefault();
    popupForm.classList.remove('modal-form-showe');
});

window.addEventListener('keydown', function(evt){
    if(evt.keyCode === 27){
        evt.preventDefault();
    

       if(popupMap.classList.contains('modal-map-showe') || popupForm.classList.contains('modal-form-showe')){
        popupMap.classList.remove('modal-map-showe');
        popupForm.classList.remove('modal-form-showe');
       }  
    }   
});
