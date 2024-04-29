//Haz tú validación en javascript acá
// Función para validar el campo de nombre
function validarNombre() {
    var nombre = document.getElementById('nombre').value;

    if(nombre.trim() === '') {
      alert('El campo de Nombre no debe estar en blanco.');
      return false;
    } else if(nombre.length > 50) {
      alert('El campo de Nombre no debe sobrepasar un máximo de 50 caracteres.');
      return false;
    } else {
      return true;
    }
  }

  // Función para validar el campo de correo electrónico
function validarEmail() {
  var email = document.getElementById('email').value;
  var formato = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Expresión regular para el formato de e-mail

  if(email.trim() === '') {
    alert('El campo de correo electrónico no debe estar en blanco.');
    return false;
  } else if(!formato.test(email)) {
    alert('Por favor, ingrese un correo electrónico válido.');
    return false;
  } else {
    return true;
  }
}

// Función para validar el campo de Asunto
function validarAsunto(){
  var asunto = document.getElementById('asunto').value
  if (asunto.trim() === '') {
    alert('El campo Asunto no debe estar en blanco.');
    return false;
  }
  
  else if (asunto.length > 50) {
    alert('El campo Asunto debe contener máximo 50 caracteres.');
    return false;
  }

  else {
    return true;
  }
}

// Función para validar el campo de Mensaje
function validarMensaje(){
  var mensaje = document.getElementById('mensaje').value
  if (mensaje.trim() === '') {
    alert('El campo mensaje no debe estar en blanco.');
    return false;
  }
  
  else if (mensaje.length > 300) {
    alert('El campo mensaje debe contener máximo 300 caracteres.');
    return false;
  }

  else {
    return true;
  }
}
//validación final de todos los campos

document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
  if (!validarNombre() || !validarEmail() || !validarAsunto() || !validarMensaje()) {
      event.preventDefault();
  } else {
      alert("Se enviaron sus datos correctamente");
  }
});
