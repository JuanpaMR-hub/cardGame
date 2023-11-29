let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let deck = [];

function randomPick() {
    let randomInt = Math.floor(Math.random() * 9);
    let randomcard = cards[randomInt];
    return randomcard;
}

function removeCards(cardToRemove){
    let newDeck = []
    for(let i=0;i<deck.length;i++){
        console.log("Valor de i: "+i)
        if(deck[i] == cardToRemove){
            deck.splice(i,1);
            i--;
        }


    }
}

function turn(card) {
    let passed = false;
    do {
        let answer = Number(prompt(`| ${card} |\n-----------------\n${deck}`));
        if (deck.includes(answer) && (answer<card)) {
            passed = true;
            removeCards(answer);

        }else if(deck.includes(answer) && (answer>=card)){
            alert("Ese numero es mayor o igual");
        } else if (answer == 0) {
            deck.push(randomPick());
        }else{
            alert("Esa carta no está en tu mazo");
        }

    } while (passed == false);

}


function startGame() {



    //Iniciar el mazo
    for (let i = 0; i < 3; i++) {
        deck.push(randomPick());
    }

    //Turno del jugador
    do {
        let displayedCard = randomPick();
        if(displayedCard>1){
            turn(displayedCard);
        }else{
            displayedCard=randomPick();
        }
        

    }while(deck.length>0);
    alert("Felicidades! Has ganado");
    

}



alert("Bienvenido al Carecaca!")
alert(`¿Como se juega?
Se mostrará en pantalla un numero, debajo de este estará tu "mazo"
El objetivo es elegir un carta mas baja de la que está presentada en pantalla
Ejemplo:
Si en pantalla es un 8, necesitamos poner un 7 o cualquier numero bajo este`)
alert("Otro dato importante!\nSi no tienes un numero que sea mas bajo, escriba 0 y sacarás otra carta")

startGame();