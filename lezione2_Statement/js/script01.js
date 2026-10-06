//Operatore di assegnazione = (assegna un valore ad una variabile)
let nomeScuola = "I&L";

//Operatori matematici
// + duplice natura: 1. operatore di somma 2. operatore di concatenazione di stringhe
let nome = "Anna";
let saluto = "Ciao";
console.log(saluto + " " + nome); //Ciao Anna

let num1 = 5;
let num2 = 8;

let somma = num1+num2; //13
console.log(somma);
//-
let differenza = num1 - num2;
console.log(differenza);
//*
let molt = num1 * num2;
console.log(molt);
// /
let div = num1 / num2;
console.log(div);

//Operatori di incremento e decremento
let num3 = 10;
let num4 = 5;

// += permettono di aggiungere un valore alla stessa variabile. Incrementando la variabile di un certo valore
//num3 = num3 + num4;
num3 += num4;
num3 += 6;
num3 += 2;

console.log(num3);

//come verrebbe con le stringhe
let parola1 = "Ciao";
let parola2 = "Buongiorno";
let parola3 = "Addio";

parola1 += parola2;
parola1 += parola3;
console.log(parola1); //sto aggiungendo un pezzo a parola1. Non sto creando una nuova variabile

//Posso fare -= , *=, /= solo con i numeri e NON con le stringhe
num3 -= 3;
console.log(num3);

num3 *= 6;
console.log(num3);

num3 /= 20;
console.log(num3);

//Operatori ++ e -- (incremento e decremento di 1 unità)
let num5 = 8;
console.log(num5++); //operatore di postincremento (prima legge poi incrementa)
console.log(num5);

let num6 = 10;
console.log(num6--); //10
console.log(num6); //9

//Messo davanti la variabile diventa operatore di pre incremento/decremento
let num7 = 15;
console.log(++num7);//16
console.log(num7); //16

let num8 = 20;
console.log(--num8);









