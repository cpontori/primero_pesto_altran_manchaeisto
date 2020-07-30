//1) Crean nodo con comanndo > npm inti -Y
// crea el packege.json

const greet = name=>   '"hola ' + name;


//Para hacer peticion instalo modulo, este va a quedar como una dependencia
//Intalo con linea  > npm install axios
//En el packege. json  se agrega como dependencia, cuando bajemos el modulo tambien se 
// bajara el axios

const axios = require('axios');

//JsonPlaseHolder - Devuelve datos para pruebas -- https://jsonplaceholder.typicode.com/

const users  = async () =>   {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=2');
    //console.log(res);

    //res tiene mucha informacion, el data tiene los datos
    return res.data;
}  

//Exporto las funciones
module.exports = {
    users,
    greet

}

//me devuelve la promesa porque lo corre sincro
//console.log(users());
//users().then(res => console.log(res));

//Para probarlo 
//node es un servicio para probar Js
//node src/index.js         


//npm version 1.0.1 --cambia la version

//Me informa conque usario estoy logeuado en npm
//npm whoami    

//nmp login  -> para loguear cuenta

//nmp publish publica el modulo  --> El nombre del proyecto tiene que ser uniconpm publish 


//Lo subo a guthub .gitignore la carpeta node_modules