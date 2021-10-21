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
console.log(bomblist);



/* window.onclick = e => {
    let selDiv = e.target
    for (let index = 1; index <= selMode; index++) {
        const divGrid = document.getElementsByClassName("cella")[index - 1]
        if (divGrid == selDiv) {
            if (divGrid.classList.contains("cyan")) {
                divGrid.classList.remove("cyan")
            }
            else {
                divGrid.classList.add("cyan")
            }
        }
    }
}
 */
window.onclick = e => {
    let selDiv = e.target
    if (bomblist.includes(parseInt(selDiv.innerHTML))) {
        selDiv.style.backgroundColor = "red";
        console.log("yes")
    }
    else {
        selDiv.style.backgroundColor = "cyan";
        console.log("no")
    }
}