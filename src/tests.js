function tests(cifra, deslocamento, palavraCifrada) {
    let result = cifrar(deslocamento, cifra);

    if (result === palavraCifrada) {
        console.log("teste aprovado!", cifra, "===", palavraCifrada);
    }
    else {
        console.error("teste reprovado!", cifra, "!==", palavraCifrada);
    }
}

tests('teste com número 1', 1, "uftuf dpn oúnfsp 1"); 
tests('teste com letra minuscula', 1, "uftuf dpn mfusb njovtdvmb");  
tests('teste com letra MAIUSCULA', 1, "uftuf dpn mfusb NBJVTDVMB");
tests('teste com deslocamento alto', 100, "paopa yki zaohkywiajpk whpk");
tests('teste com deslocamento negativo', -1, "sdrsd bnl cdrknbzldmsn mdfzshun");
tests('teste com simbolos @#%$&', 1, "uftuf dpn tjncpmpt @#%$&");
tests('teste com letras com acento áéõíã', 1, "uftuf dpn mfusbt dpn bdfoup áéõíã");

