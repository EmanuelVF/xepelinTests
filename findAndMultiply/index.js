//findAndMultiply es una funcion que recibe un Array numerico y chequea que si dos numeros del array suman
// 2022, devuelve su producto.

function findAndMultiply(input){
    //Primero realizamos unos chequeos...
    if (!(input instanceof Array)){
        return false;
    }else{
        if (input.length < 2){
            return false;
        }else{
            //Al ordenar el arreglo, nos evitamos iterar de mas en caso de que no se pueda conseguir el resultado.
            let sortedInput = input.slice().sort((a,b)=>a-b)
            for(let i = 1; i < sortedInput.length; i++){
                //Si ya no hay una combinacion posible retornamos false.
                if((sortedInput[i] + sortedInput[0]) > 2022){
                    return false
                }
                //Iteramos todas las combinaciones
                for(let j = 0; j < i; j++){
                    if( sortedInput[i] + sortedInput [j] == 2022){
                        return sortedInput[i] * sortedInput[j]
                    }
                }
            }
            //Si ninguna combinacion funciono, retornamos false.
            return false
        }
    }
}

const inputs = [122,'',[1], [1,5, 1012, 1010] ,[1,5, 1010, 1012], [1,5, 100, 102], [1,-1, 2222, 102, 10000,1000000,10000],[1,-1, 2022, 0, 102, 10000,1000000,10000]];
inputs.forEach(element => {
    console.log('El output con el input ', element, ' es : ', findAndMultiply(element));
});

