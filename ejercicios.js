var nombre = prompt("Bienvenido al custionario de la Primavera.\nEscribe tu nombre: ");
var res1 = prompt("¿Como se liama al primer día de la Primavera? \nA: Primer Día de la Primavera \nB: Equinoccio de Primavera \nC: Equinoccio de Invierno");
if (res1 == "B"){
    res1 = 25;
}else if(resl == "A"){
    res1 = 0;
}else if(res1 == "C"){
    res1 = 0;
}else{
    alert(nombre+", esa no es uan opcion valida")
}

var res2 = prompt("¿Qúe sucede en el Polo Norte cuando llega la Primavera? \nA: 6 meses de luz diurna ininterrumpida \nB: 6 meses de oscuridad inimterrumpida \nC: 6 meses de alternancia de luz y oscuridad");
if (res2 == "A"){
    res2 = 25;
}else if(res2 == "B"){
    res2 = 0;
}else if(res2 == "C"){
    res2 = 0;
}else{
    alert(nombre+", esa no es uan opcion valida")
}

var res3 = prompt("¿En qué mes empieza la Primavera en el Hemisferio Norte? \nA: Setiembre \nB: Junio \nC. Marzo");
if (res3 == "C"){
    res3 = 25;
}else if(res3 == "A"){
    res3 = 0;
}else if(res3 == "B"){
    res3 = 0;
}else{
    alert(nombre+", esa no es uan opcion valida")
}

var res4 = prompt("¿Qué es la Fiesta de la Primavera en China? \nA: La Navidad \nB: El Año Nuevo \nC. Fiestas Patrias de China");
if (res4 == "B"){
    res4 = 25;
}else if(res4 == "A"){
    res4 = 0;
}else if(res4 == "C"){
    res4 = 0;
}else{
    alert(nombre+", esa no es uan opcion valida")
}

var total = resl + res2 + res3 + res4

document.write(nombre+", conseguiste un puntaje de: "+total)