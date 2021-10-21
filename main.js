const mode = prompt("inserisci la difficoltà a cui vuoi giocare: 1-facile(100 caselle) 2-media(81 caselle) 3-difficile(49 caselle)")
let selMode = 0;
const containerGrid = document.querySelector(".container");
if (mode == 1) {
    selMode = 100;
}

else if (mode == 2) {
    selMode = 81;
}

else if (mode == 3) {
    selMode = 49;
}



else {
    window.alert("non hai inserito una difficoltà valida!")
}

function calcLine(selMode) {
    for (let i = 0; i < 100; i++) {
        if (selMode / i == i) {
            return i;
        }
    }
}

for (let index = 1; index <= selMode; index++) {
    const divGrid = document.createElement("div")
    divGrid.className = "cella"
    let line = calcLine(selMode)
    divGrid.style.width = `calc(100% / ${line})`


    containerGrid.append(divGrid);
    divGrid.innerHTML = index;

}

function generateBombs() {
    const bombs = [];
    for (let index = 0; index < 16; index++) {
        const bombitems = Math.floor(Math.random() * selMode) + 1;
        if (!(bombs.includes(bombitems))) {
            bombs.push(bombitems)
        }
        else {
            index--;
        }
    }
    return bombs;
}

const bomblist = generateBombs();

let endgame;

for (let index = 0; index < selMode; index++) {
    let elemento = document.querySelectorAll(".cella")[index]
    elemento.addEventListener("click", function addColor(e) {
        let counter = 0;
        let selDiv = document.querySelectorAll(".cella")[index]
        if (bomblist.includes(parseInt(selDiv.innerHTML))) {
            for (let index = 1; index <= selMode; index++) {
                const element = document.getElementsByClassName("cella")[index - 1];
                if (bomblist.includes(parseInt(element.innerHTML))) {
                    element.style.backgroundColor = "red";
                    endgame = false;
                    const text = document.getElementById("you_lose")
                    text.innerHTML = "Mi dispiace, hai perso!"
                    text.className = "text_f"
                }
            }
        }
        else {
            selDiv.style.backgroundColor = "cyan";
            counter = counter + 1;
        }
        if (counter == (selMode - 16)) {
            const text = document.getElementById("you_lose")
            text.innerHTML = "complimenti, hai vinto!"
            text.className = "text_v"
        }
        if (endgame == false) {
            if (elemento.style.backgroundColor == "cyan") {
                elemento.style.backgroundColor = "white"
            }
            for (let index = 0; index < selMode; index++) {
                elemento.removeEventListener("click", addColor);
            }
        }
    })
}

