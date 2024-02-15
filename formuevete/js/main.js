function validateForm() {
    // This clears previous error messages
    clearErrors();

    // The validation logic
    // If any field is empty
    const nombre = document.getElementById("nombre").value;
    if (nombre === "") {
        displayError("nombreError", "Por favor, escribe el nombre.");
        return false;
    }

    const apellidos = document.getElementById("apellidos").value;
    if (apellidos === "") {
        displayError("apellidosError", "Por favor, escribe los apellidos.");
        return false;
    }

    const edad = document.getElementById("edad").value;
    if (edad === "") {
        displayError("edadError", "Por favor, pone su edad.");
        return false;
    }

    const fecha = document.getElementById("fecha").value;
    if (fecha === "") {
        displayError("fechaError", "Por favor, pone su fecha.");
        return false;
    }

    const telefono = document.getElementById("telefono").value;
    if (telefono === "") {
        displayError("telefonoError", "Por favor, escribe su número de teléfono.");
        return false;
    }

    const correo = document.getElementById("correo").value;
    if (correo === "") {
        displayError("correoError", "Por favor, escribe su correo electrónica.");
        return false;
    }

    const ciudad = document.getElementById("ciudad").value;
    if (ciudad === "") {
        displayError("ciudadError", "Por favor, escribe la ciudad.");
        return false;
    }

    const municipio = document.getElementById("municipio").value;
    if (municipio === "") {
        displayError("municipioError", "Por favor, escribe el municipio.");
        return false;
    }

    const cp = document.getElementById("cp").value;
    if (cp === "") {
        displayError("cpError", "Por favor, escribe el código postal.");
        return false;
    }

    const direccion = document.getElementById("direccion").value;
    if (direccion === "") {
        displayError("direccionError", "Por favor, escribe la dirección.");
        return false;
    }
    // If all validations pass, submit the form
    return true;
}


// This displays an alert with the error message
function displayError(errorId, errorMessage) {
    const errorElement = document.getElementById(errorId);
    errorElement.innerHTML = errorMessage;

    // Color and Font
    errorElement.style.color = "red";
    errorElement.style.fontWeight = "bold";

    // This scrolls to the top of the page after an error
    window.scrollTo(0, 0);
    alert("Ha habido un error.");
}

const formulario = document.getElementById("schoolForm");
formulario.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
        displaySuccessMessage();
    }
});


//Success Message and clearing all errors
function displaySuccessMessage() {
    const successElement = document.getElementById("successMessage");
    successElement.innerHTML = "Enviado correctamente.";

    // It resets the form
    const formulario = document.getElementById("schoolForm");
    formulario.reset();

    window.scrollTo(0, 0);

    // It sets a timer to make the success message disappear after 1 minute
    setTimeout(function() {
        successElement.innerHTML = "";
    }, 60000);
}


function clearErrors() {
    // Clears all error messages
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(function (element) {
        element.innerHTML = "";
    });
}
