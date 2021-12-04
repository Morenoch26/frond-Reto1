

function validacion() {

nombre = document.getElementById("nombre").value;
if( nombre == null || nombre.length == 0 || !/^[a-zA-Z]*$/g.test(nombre) ) {
  return false;
}



email = document.getElementById("email").value;
if(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i){
    return false;
}
}

