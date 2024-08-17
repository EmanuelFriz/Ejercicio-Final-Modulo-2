$(document).ready(function() {
    $('#formulario-contacto').submit(function(event) {
        event.preventDefault();
        var nombre = $('#nombre').val();
        var email = $('#email').val();
        var mensaje = $('#mensaje').val();
        
        if (nombre === '' || email === '' || mensaje === '') {
            $('#resumen').html('<div class="alert alert-danger" role="alert">Por favor, complete todos los campos.</div>');
        } else {
            $('#resumen').html('<h3>Resumen de la información</h3>' +
                                '<p>Nombre: ' + nombre + '</p>' +
                                '<p>Correo electrónico: ' + email + '</p>' +
                                '<p>Mensaje: ' + mensaje + '</p>');
        }
    });
});