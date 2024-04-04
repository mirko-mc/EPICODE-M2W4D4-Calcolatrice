function prendoDato(dato) {
    /**
     * il primo carattere è - o numero?
     * N avvisa utente
     * S c'è qualcosa?
     *      N feedback
     *      S c'è già operatore?
     *          N inserisco operatore
     *          S sovrascrivo operatore
     */
    switch (dato) {
        case "+":
            break;
        case "-":
            break;
        case "*":
            break;
        case "/":
            let currentValue = document.getElementById("schermo").value;
            if (currentValue !== 0) {
                // se il valore finisce col segno
                if (currentValue.endsWith("+") || currentValue.endsWith("-") || currentValue.endsWith("*") || currentValue.endsWith("/")) {
                    // rimuovi il segno
                    let modValue = currentValue.slice(0, -1);
                    document.getElementById("schermo").value = modValue + dato;
                } else {
                    document.getElementById("schermo").value += dato;
                }
            } else if (dato === "-") {
                document.getElementById("schermo").value += dato;
            }
            break;
        default:
            document.getElementById("schermo").value += dato;
            break;
    }
}

function operazione() {
    // math.evaluate lo usiamo tramite la libreria MathJS
    document.getElementById("schermo").value = math.evaluate(document.getElementById("schermo").value)
    // document.getElementById("schermo").value = eval(document.getElementById("schermo").value)
}

function cancella() {
    document.getElementById("schermo").value = "";
}
