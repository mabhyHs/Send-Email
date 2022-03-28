//Variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');

//Variables campo Form
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const asunto = document.querySelector('#asunto');

eventListeners();
function eventListeners(){
    //cargar contenido cuando app inicia
    document.addEventListener('DMContentLoaded', iniciarApp);

    //campos de form 
    email.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);


}

//Funciones
function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed','oparity-50');
}

//Valida formulario
function validarFormulario(e){

    if(e.target.value.length > 0 ){
        //Elimina la alerta de error
        const error = document.querySelector('p.error');
        error.remove();

        e.target.classList.remove('border','border-red-500');
        e.target.classList.add('border','border-green-500');        

    }else{
        e.target.classList.remove('border','border-green-500');
        e.target.classList.add('border','border-red-500');//Se agregan clases de Tailwind, sería igual con css puro
        mostrarError('Todos los campos son obligatorios');
    }

    if(e.target.type === 'email'){ //validación de mail con type para verificar que lo que están ingresando es un emal
        const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if( er.test( e.target.value )){
            const error = document.querySelector('p.error');
            error.remove();    
            e.target.classList.remove('border','border-red-500');
            e.target.classList.add('border','border-green-500');         
        
        } else{
            e.target.classList.remove('border','border-green-500');
            e.target.classList.add('border','border-red-500');
            mostrarError('Email no válido');       
         }
    }
}

function mostrarError( mensaje ){
    const mensajeError= document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center','error');

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){ //para evitar que siga saliendo el alert cuando ya apareció una vez
        formulario.appendChild(mensajeError);
    }

}

