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

/* for (let index = 0; index < selMode; index++) {
    document.querySelectorAll(".cella")[index].onclick = e => {
        let selDiv = e.target
        console.log(document.querySelector(".cella"))
        if (bomblist.includes(parseInt(selDiv.innerHTML))) {
           
            for (let index = 1; index <= selMode; index++) {
                const element = document.getElementsByClassName("cella")[index - 1]
                console.log(index, element)
                if (bomblist.includes(parseInt(element.innerHTML))) {
                    element.style.backgroundColor = "red";
                    console.log("yes")

                }

            }

        }
        else {
            selDiv.style.backgroundColor = "cyan";
            console.log("no")

        }
    }
} */

let endgame;
for (let index = 0; index < selMode; index++) {
    let element = document.querySelectorAll(".cella")[index]
    element.addEventListener("click", function addColor(event) {
        let selDiv = document.querySelectorAll(".cella")[index]
        if (bomblist.includes(parseInt(selDiv.innerHTML))) {
            for (let index = 1; index <= selMode; index++) {
                const element = document.getElementsByClassName("cella")[index - 1];
                if (bomblist.includes(parseInt(element.innerHTML))) {
                    element.style.backgroundColor = "red";
                    console.log("yes")
                    endgame = false;
                }
            }
        }
        else {
            selDiv.style.backgroundColor = "cyan";
            console.log("no")
        }
        if (endgame == false) {
            for (let index = 0; index < selMode; index++) {
                let element = document.querySelectorAll(".cella")[index];
                element.removeEventListener("click", addColor, true);
            }
        }
    })

}
