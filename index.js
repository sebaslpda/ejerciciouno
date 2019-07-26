function multiploDeTres(numero){
    return (numero % 3) === 0;
}

function multiploDeCinco(numero){
    return (numero % 5) === 0;
}

function multiploDeSiete(numero){
    return (numero % 7) === 0;
}

function multiploDeTresYCinco(numero){
    return (numero % 3) && (numero % 5);
}

function multiploDeTresYSiete(numero){
    return (numero % 3) && (numero % 7);
}

function multiploDeCincoYSiete(numero){
    return (numero % 5) && (numero % 7);
}
function multiploDeTresCincoYSiete(numero){
    return (numero % 3) && (numero % 5) && (numero % 7);
}

function prueba(numero){
       let resultado = "";

       if (multiploDeTresCincoYSiete(numero)){
            return "Fazz Birr Barr";
        }
        if (multiploDeTresYCinco(numero)){
            return "Fazz Birr";
        }
        if (multiploDeTresYSiete(numero)){
            return "Fazz Barr";
        }
        if (multiploDeCincoYSiete(numero)){
            return "Birr Barr"
        }
        if (multiploDeTres(numero)){
            resultado = "Fazz";
        }
        if (multiploDeCinco(numero)){
            resultado =  "Bizz";
        }
        if (multiploDeSiete(numero)){
            resultado = "Barr";
        }
         if (resultado === ""){
            return numero;
         }      
        else {
            return resultado;
        }

      }