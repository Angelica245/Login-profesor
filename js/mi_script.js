function acceso(){

  var usuario = document.getElementById('usuario').value;
  var contraseña = document.getElementById('contraseña').value;

  if (usuario == "a@g.com" && contraseña == "12345") {
    alert("Hola "+ usuario);
  } else{
    alert("ERROR. Usuario o contraseña incorrectos.");
  }
}
