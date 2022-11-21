const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const asuntoValue = asunto.value.trim();
    const mensajeValue = mensaje.value.trim();

    //validando nombre
    if(usernameValue === '') {
        setError(username, 'Se requiere un nombre');
    }  else if (usernameValue.length < 3) {
        setError(username, 'Porfavor ingrese un nombre válido.')
    }
    else {
        setSuccess(username);
    }
    
    //validando correo
    if(emailValue === '') {
        setError(email, 'Se requiere un correo');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Proporcione un correo válido');
    } else {
        setSuccess(email);
    }

    //validando asunto
    if(asuntoValue === '') {
        setError(asunto, 'Se requiere un asunto');
    } else if (asuntoValue.length < 3) {
        setError(asunto, 'Porfavor ingrese un aunto válido.')
    }
    else {
        setSuccess(asunto);
    }
    
    //validando mensaje
    if(mensajeValue === '') {
        setError(mensaje, 'Se requiere un mensaje');
    }else if (mensajeValue.length < 3) {
        setError(mensaje, 'Porfavor ingrese un mensaje válido.')
    }else {
        setSuccess(mensaje);
    }

};
