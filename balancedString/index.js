//checkString es una funcion que recibe un String y chequea si esta formateado correctamente 
// en terminos de parentesis. Esto es que cada parentesis de apertura tenga su correspondiente de
// cerrado. Tambien tiene en cuenta que no se puede estar cerrando un parentesis si nunca se abrio uno.

function checkString(input){
    //Primero realizamos unos chequeos...
    if (typeof(input)!= 'string'){
        return false;
    }else{
        if (input.length < 2){
            return false;
        }else{
            //Contabilizamos los parentesis
            let counter = 0;
            for(let i = 0; i < input.length; i++){
                if(input[i] == '('){
                    counter++
                }else if (input[i] == ')'){
                    counter--
                    if (counter < 0){
                        //Si cerramos mas de lo que abrimos, lo consideramos un error
                        return false
                    }
                }
            }
            //Solo si estamos balanceados al terminar devolvemos true
            return (counter == 0) ? true : false
        }
    }
}

const inputs = [122,'','((())','(adsaada(asdads)asdada)','((()',')()(','((()()))']
inputs.forEach(element => {
    console.log('El output con el input ', element, ' es : ', checkString(element));
});

