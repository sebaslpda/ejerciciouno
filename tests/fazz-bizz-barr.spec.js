function multiploDeTres(numero){
    return (numero % 3) === 0;
}

function multiploDeCinco(numero){
    return (numero % 5) === 0;
}

function multiploDeSiete(numero){
    return (numero % 7) === 0;
}

function prueba(numero){
   let resultado = ""
   
    if (multiploDeTres(numero)){
        resultado = " Fazz";
    }
    if (multiploDeCinco(numero)){
        resultado = resultado + " Bizz";
    }
    if (multiploDeSiete(numero)){
        resultado = resultado + " Barr";
    }
   if (resultado === ""){
       return numero
   }
        return resultado.trimLeft()
    }
 