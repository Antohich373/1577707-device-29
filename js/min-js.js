let contactsMaps=document.querySelector(".contacts-maps"),popupMap=document.querySelector(".modal-map"),contactsButton=document.querySelector(".contacts-button"),popupForm=document.querySelector(".modal-forms"),closeModalMap=document.querySelector(".close-modal-map"),closeModalForm=document.querySelector(".close-modal"),name=popupForm.querySelector(".input-name"),text=popupForm.querySelector(".letter"),form=document.querySelector(".modal-form");form.addEventListener("submit",function(e){name.value||(e.preventDefault(),popupForm.classList.add("modal-form-eror"),name.classList.add("eror-input"))}),form.addEventListener("submit",function(e){text.value||(e.preventDefault(),popupForm.classList.add("modal-form-eror"),text.classList.add("eror-input"))}),contactsMaps.addEventListener("click",function(e){e.preventDefault(),popupMap.classList.add("modal-map-showe")}),closeModalMap.addEventListener("click",function(e){e.preventDefault(),popupMap.classList.remove("modal-map-showe")}),contactsButton.addEventListener("click",function(e){e.preventDefault(),popupForm.classList.add("modal-form-showe")}),closeModalForm.addEventListener("click",function(e){e.preventDefault(),popupForm.classList.remove("modal-form-showe"),popupForm.classList.remove("modal-form-eror"),name.classList.remove("eror-input"),text.classList.remove("eror-input")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),(popupMap.classList.contains("modal-map-showe")||popupForm.classList.contains("modal-form-showe"))&&(popupMap.classList.remove("modal-map-showe"),popupForm.classList.remove("modal-form-showe")))});