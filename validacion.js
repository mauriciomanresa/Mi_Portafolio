document.addEventListener("DOMContentLoaded", function () {
  var form = document.forms["form"];
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtengo los valores del formulario.
    var nombre = form["nombre"].value.trim();
    var telefono = form["telefono"].value.trim();
    var email = form["email"].value.trim();
    var mensaje = form["mensaje"].value.trim();

    // Valido los campos obligatorios.
    var errors = [];
    if (nombre === "") {
      errors.push("Por favor, ingresa tu nombre.");
    }
    if (email === "") {
      errors.push("Por favor, ingresa tu correo electrónico.");
    } else if (!isValidEmail(email)) {
      errors.push("Por favor, ingresa un correo electrónico válido.");
    }

    // Si hay errores, los muestro y detengo el proceso.
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    // Genero un archivo con los datos del formulario.
    var formData =
      "Nombre: " +
      nombre +
      "\n" +
      "Teléfono: " +
      telefono +
      "\n" +
      "Correo electrónico: " +
      email +
      "\n" +
      "Mensaje: " +
      mensaje;

    // Creo un blob con los datos del formulario.
    var blob = new Blob([formData], { type: "text/plain" });

    // Creo un objeto URL para el blob.
    var url = URL.createObjectURL(blob);

    // Creo un enlace para descargar el archivo.
    var link = document.createElement("a");
    link.href = url;
    link.download = "formulario_data.txt";
    document.body.appendChild(link);
    link.click();

    // Limpio el formulario después de enviar.
    form.reset();
  });
});

// Valido el formato de email.
function isValidEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
