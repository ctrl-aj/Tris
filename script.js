var segno=['X','O'];
var turno; 
var indicatore=document.getElementById("turno");
var errore=document.getElementById("error");
var caselle=document.getElementsByClassName("casella");
var i;
const grid = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' '],
];

function newGame() {
    errore.innerHTML="";
    for(i=0;i<caselle.length;i++) {
        caselle[i].innerHTML=" ";
    }

    for(i=0;i<3;i++) {
        for(j=0;j<3;j++) {
            grid[i][j]=' ';
        }
    }
    turno=true;
    var randomloc=Math.random();
    if(randomloc < 0.5) {
        turno=true;
        indicatore.innerHTML="Turno del Giocatore";
    }
    else {
        turno=false;
        indicatore.innerHTML="Turno del Computer";
        mossaComputer();
    }
}


function setValue(obj) {
    var i=obj.getAttribute("data-i");
    var j=obj.getAttribute("data-j");
    if(turno) {
        obj.innerHTML=segno[0];
        grid[i][j]=segno[0];
        turno=false;
        indicatore.innerHTML="Turno del Computer";
        mossaComputer();
    }

    checkWin();
}

function checkWin() {
    for(i=0;i<3;i++) {
        if(grid[i][0]!=' ' && grid[i][0]==grid[i][1] && grid[i][0]==grid[i][2]) {
            alert("Vittoria");
            newGame();
        }
    }

    for(i=0;i<3;i++) {
        if(grid[0][i]!=' ' && grid[0][i]==grid[1][i] && grid[0][i]==grid[2][i]) {
            alert("Vittoria");
            newGame();
        }
    }

    if(grid[0][0]!=' ' && grid[0][0]==grid[1][1] && grid[0][0]==grid[2][2] ) {
        alert("Vittoria");
        newGame();
    }

    if(grid[0][2]!=' ' && grid[0][2]==grid[1][1] && grid[0][2]==grid[2][0] ) {
        alert("Vittoria");
        newGame();
    }
}

function moveAI() {
    for(i=0;i<3;i++) {
        for(j=0;j<3;j++) {
            if(grid[i][j]==' ') {
                var positioni=i;
                var positionj=j;
                console.log("POSITION è : ");
                console.log(positioni);
                console.log(positionj);
                grid[i][j]=segno[1];
                i=3;
                break;
            }
        }
    }

    for(i=0;i<caselle.length;i++) {
        var dataI=caselle[i].getAttribute("data-i");
        var dataJ=caselle[i].getAttribute("data-j");
        console.log("DATA è : ");
        console.log(dataI);
        console.log(dataJ);
        if(positioni==dataI && positionj==dataJ) {
            caselle[i].innerHTML=segno[1];
        }
    }
}

function mossaComputer() {
    if(!turno) {
        moveAI();
        turno=true;
        indicatore.innerHTML="Turno del Giocatore";
    }
    checkWin();
}

newGame();
