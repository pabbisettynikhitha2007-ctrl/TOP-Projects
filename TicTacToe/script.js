const rows = 3;
const cols = 3;
let gameboard = Array.from(new Array(rows), () => new Array(cols).fill(null));
const GameBoard = {
    player1: {
        name: "p1",
        gameboard: gameboard
    },

    player2: {
        name: "p2",
        gameboard: gameboard
    }

};
let winner;
let won = false;
let val = 'X';
let win = document.body.querySelector("#win");
const restartbtn = document.body.querySelector("#restart")
let clicked = Array.from(new Array(rows), () => new Array(cols).fill(false));
const displayController = () => {
    const boardContainer = document.createElement("div");
    boardContainer.id = "board";
    document.body.appendChild(boardContainer);

    gameboard.forEach((row, rowInd) => {
        row.forEach((col, colInd) => {
            const box = document.createElement("div")
            box.setAttribute('index', colInd);
            box.classList.add("box");
            boardContainer.appendChild(box);

            box.addEventListener("click", () => {
                if (val == 'X' && clicked[rowInd][colInd] == false) {
                    gameboard[rowInd][colInd] = 'O'
                    val = 'O'
                    clicked[rowInd][colInd] = true;
                }
                else if (val == 'O' && clicked[rowInd][colInd] == false) {
                    gameboard[rowInd][colInd] = 'X'
                    val = 'X'
                    clicked[rowInd][colInd] = true;
                }
                box.textContent = gameboard[rowInd][colInd]
                winner = calculatewinner()
                win.textContent = winner;
                console.log(winner)
                const restart = () => {
                    for (let i = 0; i < 3; i++) {
                        for (let j = 0; j < 3; j++) {
                            gameboard[i][j] = null;
                            box.textContent = ""
                            clicked[rowInd][colInd] = false;
                        }

                    }
                }
                restartbtn.addEventListener("click", () => {
                    restart();
                })
            })
        })
        const br = document.createElement("br")
        document.body.appendChild(br)
    });
}
displayController(); // can use IIFE


const calculatewinner = () => {
    for (let i = 0; i < 3; i++) {
        if (gameboard[i][0] == gameboard[i][1] && gameboard[i][1] == gameboard[i][2] && gameboard[i][0] != null) {
            won = true;
            return gameboard[i][0]
        }
    }
    for (let j = 0; j < 3; j++) {
        if (gameboard[0][j] == gameboard[1][j] && gameboard[1][j] == gameboard[2][j] && gameboard[0][j] != null) {
            return gameboard[0][j]
        }
    }
    if (gameboard[0][0] == gameboard[1][1] && gameboard[1][1] == gameboard[2][2]) {
        return gameboard[0][0]
    }
    else if (gameboard[0][2] == gameboard[1][1] && gameboard[1][1] == gameboard[2][0]) {
        return gameboard[0][2]
    }
}



































// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         const box = document.createElement("div")
//         box.classList.add("box");
//         document.body.appendChild(box);
//     }
//     const br = document.createElement("div");
//     document.body.appendChild(br)
// }