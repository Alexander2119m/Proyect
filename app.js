// Agregar event listeners a los enlaces
document.getElementById("register-link").addEventListener("click", function(){
    document.querySelector(".login-box").style.display = "none";
    document.querySelector(".register-box").style.display = "block";
    window.location.href = "register.html";
});

document.getElementById("login-link").addEventListener("click", function(){
    document.querySelector(".register-box").style.display = "none";
    document.querySelector(".login-box").style.display = "block";
});


const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const signupForm = document.getElementById("signup-form");
const signupName = document.getElementById("signup-name");
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");
const errorMessage = document.getElementById("error-message");



// Inicio de sesión
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginEmail.value;
  const password = loginPassword.value;
  // Comprobación de correo electrónico y contraseña
  // Aquí se puede utilizar una API o una base de datos para comprobar si el correo electrónico y la contraseña son correctos.
  if (email === "usuario@ejemplo.com" && password === "contraseña") {
    alert("Inicio de sesión exitoso.");
  } else {
    errorMessage.textContent = "Correo electrónico o contraseña incorrectos.";
  }
});

// Registrar un "event listener" en el formulario de registro que escuche el evento "submit".
signupForm.addEventListener("submit", (e) => {
  // Prevenir el comportamiento por defecto del formulario (enviar los datos y recargar la página).
  e.preventDefault();
  // Recuperar los valores ingresados por el usuario en los campos de nombre, correo electrónico y contraseña.
  const name = signupName.value;
  const email = signupEmail.value;
  const password = signupPassword.value;
  // Comprobar si alguno de los campos está vacío. Si es así, mostrar un mensaje de error y salir de la función.
  if (!name || !email || !password) {
    errorMessage.textContent = "Todos los campos son obligatorios.";
    return false;
  } else {
    // Si todos los campos tienen valores, redirigir al usuario a la página de registro.
    
  }

  // Comprobar si el formato del nombre es válido. Si no lo es, mostrar un mensaje de error y salir de la función.
  const patron = /^[A-Z][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]+$/;
  if (patron.test(name)) {
    errorMessage.textContent = "El nombre es válido";
  } else {
    errorMessage.textContent = "El nombre es inválido";
    return;
  }

  // Comprobar si el formato del correo electrónico es válido. Si no lo es, mostrar un mensaje de error y salir de la función.
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    errorMessage.textContent = "Correo electrónico inválido.";
    return;
  }

  // Comprobar si el correo electrónico ya existe. Si es así, mostrar un mensaje de error y salir de la función.
  // En este caso, simplemente se comprueba si el correo electrónico es igual al de ejemplo.
  if (email === "usuario@ejemplo.com") {
    errorMessage.textContent = "El correo electrónico ya existe.";
    return;
  }

  // Si todo está bien, mostrar un mensaje de éxito al usuario utilizando la función "alert".
  alert("Registro exitoso.");
});






