const destinos = {

"Tokio":{
ropa:"Chaqueta ligera",
temp:"18°C",
clima:"Nublado"
},

"Madrid":{
ropa:"Ropa fresca",
temp:"28°C",
clima:"Soleado"
},

"Toronto":{
ropa:"Abrigo",
temp:"10°C",
clima:"Frío"
}

};

const destino =
document.getElementById("destino");

destino.addEventListener(
"change",
actualizarDestino
);

function actualizarDestino(){

const datos =
destinos[
destino.value
];

document.getElementById(
"ropa"
).innerHTML =
datos.ropa;

document.getElementById(
"temperatura"
).innerHTML =
datos.temp;

document.getElementById(
"estadoClima"
).innerHTML =
datos.clima;

}

document.getElementById(
"calcular"
).addEventListener(
"click",
()=>{

const peso =
Number(
document.getElementById(
"peso"
).value
);

const costo =
peso * 5000;

document.getElementById(
"costo"
).innerHTML =

"Costo: $" +
costo.toLocaleString();

});

actualizarDestino();
