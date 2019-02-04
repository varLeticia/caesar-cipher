function chamarDecifrar() {
  deslocamento = document.getElementById('textoDeslocamento').value;
  cifra = document.getElementById("textoDecifrar").value;
  document.getElementById("textoCifrar").value = decifrar(deslocamento, cifra);
}

function chamarCifrar() {
  deslocamento = document.getElementById('textoDeslocamento').value;
  cifra = document.getElementById("textoCifrar").value;
  document.getElementById("textoDecifrar").value = cifrar(deslocamento, cifra);
}

function cifrar(numero, cifra) {
  numero = parseInt(numero)
  let result = "", code = 0;

  for (var i = 0; i < cifra.length; i++) {
    if (cifra.charCodeAt(i) >= 65 && cifra.charCodeAt(i) <= 90) {
      code = (((cifra.charCodeAt(i) - 65) + numero % 26) + 26) % 26 + 65;
    }
    else if (cifra.charCodeAt(i) >= 97 && cifra.charCodeAt(i) <= 122) {
      code = (((cifra.charCodeAt(i) - 97) + numero % 26) + 26) % 26 + 97;   
     }
    else {
      code = cifra.charCodeAt(i);
    }
    result = result + String.fromCharCode(code);
  }

  return result;

}

function decifrar(numero, cifra) {
  numero = parseInt(numero);
  let result = "", code = 0;

  for (var i = 0; i < cifra.length; i++) {
    if (cifra.charCodeAt(i) >= 65 && cifra.charCodeAt(i) <= 90) {
      code = (((cifra.charCodeAt(i) - 65) - numero % 26) + 26) % 26 + 65;
    }
    else if (cifra.charCodeAt(i) >= 97 && cifra.charCodeAt(i) <= 122) {
      code = (((cifra.charCodeAt(i) - 97) - numero % 26) + 26) % 26 + 97;
    }
    else {
      code = cifra.charCodeAt(i);
    }
    result = result + String.fromCharCode(code);
  }

  return result;

}







