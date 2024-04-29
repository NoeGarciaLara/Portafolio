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
      alert('Nombre validado correctamente.');
      return true;
    }
  }
  
  document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    if(!validarNombre()) {
      event.preventDefault();
     }
  });

  // Función para validar el campo de correo electrónico
function validarEmail() {
  var email = document.getElementById('email').value;
  var formato = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Expresión regular para el formato de e-mail

  // Verificar que el campo no esté vacío y que cumpla con el formato de e-mail
  if(email.trim() === '') {
    alert('El campo de correo electrónico no debe estar en blanco.');
    return false;
  } else if(!formato.test(email)) {
    alert('Por favor, ingrese un correo electrónico válido.');
    return false;
  } else {
    alert('Correo electrónico validado correctamente.');
    return true;
  }
}

document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
  if(!validarEmail()) {
    event.preventDefault();
   }
});

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
    alert('Asunto validado correctamente.');
    return true;
  }
}

document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
  if(!validarAsunto()) {
    event.preventDefault();
   }
});