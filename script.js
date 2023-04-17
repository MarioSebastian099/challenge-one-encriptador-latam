document.getElementById("texto").focus();
  
  function encriptar(texto) {
    let resultado = texto.toLowerCase();
    resultado = resultado.replace(/\s+/g, " ");
    resultado = resultado.replace(/e/g, "enter");
    resultado = resultado.replace(/i/g, "imes");
    resultado = resultado.replace(/a/g, "ai");
    resultado = resultado.replace(/o/g, "ober");
    resultado = resultado.replace(/u/g, "ufat");
    return resultado;
  }
  
  function desencriptar(texto) {
    let resultado = texto.toLowerCase();
    resultado = resultado.replace(/\s+/g, " ");
    resultado = resultado.replace(/enter/g, "e");
    resultado = resultado.replace(/imes/g, "i");
    resultado = resultado.replace(/ai/g, "a");
    resultado = resultado.replace(/ober/g, "o");
    resultado = resultado.replace(/ufat/g, "u");
    return resultado;
  }
  
  function copiarResultado() {
    const resultado = document.getElementById("resultado");
    resultado.select();
    document.execCommand("copy");
    resultado.value = "";
    document.getElementById("texto").value = "";
    document.getElementById("texto").focus();
  }
  
  function procesarTexto(event) {
    const texto = document.getElementById("texto").value;
    let resultado = "";
    const opcion = event.target.dataset.opcion;
    if (/[^a-z\s]/.test(texto)) {
      alert("Introduzca solamente letras en minúsculas y sin acentos");
      document.getElementById("texto").value = "";
      document.getElementById("resultado").value = "";
      document.getElementById("texto").focus();
      return;
    }
    if (opcion === "encriptar") {
      resultado = encriptar(texto);

    } else {
      resultado = desencriptar(texto);
    }
    document.getElementById("resultado").value = resultado;

  }
  
  const botones = document.querySelectorAll('.opcion');
  botones.forEach(boton => {
    boton.addEventListener('click', procesarTexto);
  });
  
  document.getElementById("copiar").addEventListener("click", copiarResultado);
