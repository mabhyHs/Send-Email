//Variables
const btnEnviar = document.querySelector('#enviar');

eventListeners();
function eventListeners(){
    document.addEventListener('DMContentLoaded'. iniciarApp);
}


//Funciones
function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed','oparity-50');
}


