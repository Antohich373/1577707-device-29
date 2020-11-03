/*Карта*/
let contactsMaps = document.querySelector('.contacts-maps');
let popupMap = document.querySelector('.modal-map');

/*Форма*/
let contactsButton = document.querySelector('.contacts-button');
let popupForm = document.querySelector('.modal-forms');


/*Закрытие окнон*/
let closeModalMap = document.querySelector('.close-modal-map');
let closeModalForm = document.querySelector('.close-modal');

let name = popupForm.querySelector('.input-name')
let text = popupForm.querySelector('.letter')


let form = document.querySelector('.modal-form')

/*ошибка при не заполненом поле*/
form.addEventListener('submit', function(evt){
    if(!name.value){
        evt.preventDefault();
        popupForm.classList.add('modal-form-eror');
        name.classList.add('eror-input')
    }
});

form.addEventListener('submit', function(evt){
    if(!text.value){
        evt.preventDefault();
        popupForm.classList.add('modal-form-eror');
        text.classList.add('eror-input')
    }
});

/*Появление карты*/
contactsMaps.addEventListener('click', function(evt){
    evt.preventDefault();
    popupMap.classList.add('modal-map-showe');
});
/*Закрытие карты*/
closeModalMap.addEventListener('click', function(evt){
    evt.preventDefault();
    popupMap.classList.remove('modal-map-showe');
});

/*Появление формы*/
contactsButton.addEventListener('click', function(evt){
    evt.preventDefault();
    popupForm.classList.add('modal-form-showe');
});
/*Закрытие формы*/
closeModalForm.addEventListener('click', function(evt){
    evt.preventDefault();
    popupForm.classList.remove('modal-form-showe');
    popupForm.classList.remove('modal-form-eror');
    name.classList.remove('eror-input');
    text.classList.remove('eror-input')
});

/*закрытие popup кнопкой esc*/
window.addEventListener('keydown', function(evt){
    if(evt.keyCode === 27){
        evt.preventDefault();
       if(popupMap.classList.contains('modal-map-showe') || popupForm.classList.contains('modal-form-showe')){
        popupMap.classList.remove('modal-map-showe');
        popupForm.classList.remove('modal-form-showe');
       }  
    }   
});
