# xepelinTests

En este repositorio van a encontrar las implementaciones de las pruebas tecnicas

## balancedStrings

Consiste en una funcion que define si un string esta balanceado o no en terminos de parentesis.
Las reglas basicas que evalua es que cada parentesis de apertura tenga su correspondiente de cerrado,
y que no se cierren parentesis sin abrirlos previamente.

### Uso

Una vez en la carpeta, ejecutar

```bash
node index.js
```

Como resultado se observara la ejecucion de la funcion con unos casos de prueba.

### Explicacion

Se recorre el string de forma secuencia, almacenando en un contador la cantidad de parentesis que se van detectando.
Sumando 1 si es un parentesis de apertura, restando 1 si es un parentesis de cierre. Ese contador debe ser 0 el finalizar, y no debe ser
negativo en el transcurso de la ejecucion.

```bash
node index.js
```

Como resultado se observara la ejecucion de la funcion con unos casos de prueba.

## findAndMultiply

Consiste en una funcion que busca dentro de un array de numeros, dos numeros que sumen 2022 y devuelve su producto.
En caso de que no se pueda devolver un numero, se devuelve false.

### Uso

Una vez en la carpeta, ejecutar

```bash
node index.js
```

### Explicacion

Primero se ordena el array de menor a mayor. Luego se recorre el array secuencialmente, sumando el numero actual con cada uno de los anteriores para ver
si se puede encontrar una solucion. Si no hya una combinacion posible, se avanza otro numero hasta finalizar. En caso de que el nuevo numero, sumado al 
primer numero sean mayor a 2022, se da por terminada la busqueda. 

## ratesNotification

Consiste en una aplicación web, que luego de acceder mediante un login, permite realizar modificaciones sobre un google sheet.
En caso de realizar una modificacion de tasa, la misma se informa automaticamente via mail.

### Uso

Una vez en la carpeta, ejecutar

```bash
node index.js
```

Abrir un explorador y abrir la direccion http://localhost:3000/

### Public url

La aplicacion se expuso utilizando netlify. La misma se puede encontrar en la direccion

https://eloquent-truffle-312352.netlify.app/

Al encontrarse con problemas de redireccionamiento en el deploy, se disponibilizo sin necesidad de loggeo la siguiente ruta, para poder hacer pruebas
mas completas.

https://eloquent-truffle-312352.netlify.app/main

El link de acceso al google sheet utilizado es

https://docs.google.com/spreadsheets/d/1u_I9XmEbgONQ3qtCiSRfnEZfo8nEFumeufaB2f-1sXU/edit?usp=sharing

### Explicacion

El problema se puede dividir en distintas estapas. La primera consiste en un loggeo. El mismo es simple y poco seguro, pero buscar brindar una minima
seguridad. Se podria mejorar fuertemente la seguridad en este sentido. Una vez validado, se avanza hacia la pantalla en donde se encuentra embebido el 
google sheet. El mismo se puede modificar por completo, aunque solo se enviara una notificacion por mail en caso de una actualizacion de tasa. 
Esa tercra parte se resolvio desde la extension de App scripts.
