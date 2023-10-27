let numero1 = parseInt(prompt("Ingrese un número: "));
let numero2 = parseInt(prompt("Ingrese otro número: "));

if(numero1 > numero2){
    document.write(`El ${numero1} es el número más grande.`);
} else if(numero1 < numero2){
    document.write(`El ${numero2} es el número más grande.`);
}else{
    document.write("Ambos números son iguales.");
}