//IF STATEMENT
//Sintassi di base
/**
 * if(condizione){
 *    esegui quello che si trova nel corpo dell if se la condizione è true 
 * }
 */

//DEvo valutare se il mio utente è maggiorenne. Se lo è gli do il benvenuto

let etaUser = 15;

if(etaUser >= 18){
    //il benvenuto verrà stampato solo se la condizione è true
    console.log("Ciao utente, benvenuto nella piattaforma");
}

//IF - ELSE Statement
/**
 * if(condizione){
 *     eseguito se la condizione è true
 * }else{
 *     eseguito se la condizione è false
 * }
 */

if(etaUser >= 18){
    console.log("Caro user, sei il benvenuto sulla nostra piattaforma");
}else{
    console.log("Caro user, non puoi accedere perché non sei maggiorenne");
}

//Aggiungo ancora un altro controllo
/**
 * if(condizione1){
 *      eseguita se true
 * }else if(condizione2){
 *      eseguita se condizione 2 è vera e la condizione1 è false
 * }....
 * else{
 *      eseguita se TUTTE le altre condizione sono false
 * }
 */

//Se il mio voto è maggiore di 90 -> Ottimo
//maggiore di 75 -> Buono
//maggiore di 60 -> Sufficiente
//inferiopre a 60 -> Insufficiente
// inferiore a 30 -> fai schifo
let votoFinale = 80 ;

if(votoFinale >= 90){
    console.log("Ottimo!");
}
else if(votoFinale >= 75){
    console.log("Buono !");
}
else if(votoFinale >= 60){
    console.log("Sufficiente !");
}
else {
    console.log("Insufficiente !");
}


//Gamer. C'è un gioco, per vincere bisogna avere un punteggio e un punteggio skills maggiore di una certa soglia

let punteggio = 15;
let sogliaPunteggio = 20;

let skills = 9;
let sogliaSkill = 15;

if(punteggio >= sogliaPunteggio && skills >= sogliaSkill){
    console.log("Bravo, hai vinto !");
}else{
    console.log("Mi spiace, hai perso ! GAME OVER");
}

console.log("Maggior Feedback per il gamer. Gli devo dire perché perde");

/**
 * 1. Hai vinto
 * 2. Hai perso, il tuo punteggio non raggiunge la soglia (le skill sì)
 * 3. Hai perso, le tue skills non raggiungono la soglia (il punteggio sì)
 * 4. Fai schifo, skills e punteggio non raggiungono la soglia
 */

if(punteggio >= sogliaPunteggio && skills >= sogliaSkill){
    console.log("Bravo, hai vinto !!");
}else if(punteggio < sogliaPunteggio && skills >= sogliaSkill){
    console.log("Hai perso perché il tuo punteggio non supera la soglia");
}else if(punteggio >= sogliaPunteggio && skills < sogliaSkill){
    console.log("Hai perso perché le tue skills non superano la soglia");
}else{
    console.log("Fai schifo !! Le skills e il punteggio sono sotto soglia");
}

//Piove ? Sì e porto l'ombrello altrimenti metto gli occhiali da sole

//Club privato. Si entra solo se maggiorenni e iscritti

//Esame all'università. L'esame viene superato se lo scritto e poi l'orale sono maggiori di 18. Se no supero lo scritto non vado proprio all'orale