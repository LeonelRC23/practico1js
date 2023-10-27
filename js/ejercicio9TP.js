let frase = prompt("Ingrese una frase: ");
let resultado = "";

for(let i = 0; i < frase.length; i++){
    if(frase[i] == "a" || frase[i] == "e" || frase[i] == "i" || frase[i] == "o" || frase[i] == "u"){
        resultado = resultado + frase[i];
    }
}

document.write("El resultado generado es: " + resultado);