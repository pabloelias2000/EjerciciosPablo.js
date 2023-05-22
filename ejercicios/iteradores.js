// 1.- Muestrame los elementos del iterador
// 2.- Iterar un array de números y devolverme el valor * 2;
// 3.- Mostrarme los índices del array que vas a iterar

 //1.- Muestrame los elementos del iterador
/*
let Myname = ["Pablo","Elias","Gutierrez"];
let iteradorPablo = Myname[Symbol.iterator]();

for (const Cadena of iteradorPablo) {
  console.log(Cadena);
}
*/
//2- iterar un array de numeros y devolver el valor *2
/*
const Mynumber = [100,200,300,400,500,600];
const Itera= Mynumber[Symbol.iterator]();

for (const Mynumber of Itera){
    console.log(Mynumber*2);
}*/
//3- Mostrarme los indices del array que vas a iterar

/*let refrescos= ["Cocacola", "Pepsi", "Savoy","Wll","Wisky"];

for (let Cadena = 0; 
    Cadena< refrescos.length;
     Cadena++){
    console.log("indice: "+ Cadena + " - " +refrescos[Cadena]);}*/