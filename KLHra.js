let kostka1
let kostka2;
let kostka3;
let kostka4;
let kostka5;
let kostka6;
let celkovahodkostek = 0;

let bodyh1 = 0;
let bodyh2 = 0;

let JUDGEMENT;
let pnl2 = 0;

let konechry = Math.floor((Math.random() * 3) + 2);
console.log("pocet kol",konechry);

function Vrzeni() {

    document.write('<audio src="Screenrecorder-2025-05-27-07-19-29-842(0).mp3" id="hudba" loop></audio>');
    const HUDBA = document.getElementById("hudba");
    HUDBA.play();

    kostka1 = Math.floor((Math.random() * 5) + 1);
    kostka2 = Math.floor((Math.random() * 5) + 1);
    kostka3 = Math.floor((Math.random() * 5) + 1);
    kostka4 = Math.floor((Math.random() * 5) + 1);
    kostka5 = Math.floor((Math.random() * 5) + 1);
    kostka6 = Math.floor((Math.random() * 5) + 1);

    switch (kostka1) {
        case 1:
            document.write('<img id="kostka1" src="kostka%201.png" alt="chyba1">');
            break;
        case 2:
            document.write('<img id="kostka1" src="kostka%202.png" alt="chyba1">');
            break;
        case 3:
            document.write('<img id="kostka1" src="kostka%203.png" alt="chyba1">');
            break;
        case 4:
            document.write('<img id="kostka1" src="kostka%204.png" alt="chyba1">');
            break;
        case 5:
            document.write('<img id="kostka1" src="kostka%205.png" alt="chyba1">');
            break;
        case 6:
            document.write('<img id="kostka1" src="kostka%206.png" alt="chyba1">');
            break;
        default:

            break;
    }

    switch (kostka2) {
        case 1:
            document.write('<img id="kostka2" src="kostka%201.png" alt="chyba1">');
            break;
        case 2:
            document.write('<img id="kostka2" src="kostka%202.png" alt="chyba1">');
            break;
        case 3:
            document.write('<img id="kostka2" src="kostka%203.png" alt="chyba1">');
            break;
        case 4:
            document.write('<img id="kostka2" src="kostka%204.png" alt="chyba1">');
            break;
        case 5:
            document.write('<img id="kostka2" src="kostka%205.png" alt="chyba1">');
            break;
        case 6:
            document.write('<img id="kostka2" src="kostka%206.png" alt="chyba1">');
            break;
        default:

            break;
    }

    switch (kostka3) {
        case 1:
            document.write('<img id="kostka3" src="kostka%201.png" alt="chyba1">');
            break;
        case 2:
            document.write('<img id="kostka3" src="kostka%202.png" alt="chyba1">');
            break;
        case 3:
            document.write('<img id="kostka3" src="kostka%203.png" alt="chyba1">');
            break;
        case 4:
            document.write('<img id="kostka3" src="kostka%204.png" alt="chyba1">');
            break;
        case 5:
            document.write('<img id="kostka3" src="kostka%205.png" alt="chyba1">');
            break;
        case 6:
            document.write('<img id="kostka3" src="kostka%206.png" alt="chyba1">');
            break;
        default:

            break;
    }

    switch (kostka4) {
        case 1:
            document.write('<img id="kostka4" src="kostka%201.png" alt="chyba1">');
            break;
        case 2:
            document.write('<img id="kostka4" src="kostka%202.png" alt="chyba1">');
            break;
        case 3:
            document.write('<img id="kostka4" src="kostka%203.png" alt="chyba1">');
            break;
        case 4:
            document.write('<img id="kostka4" src="kostka%204.png" alt="chyba1">');
            break;
        case 5:
            document.write('<img id="kostka4" src="kostka%205.png" alt="chyba1">');
            break;
        case 6:
            document.write('<img id="kostka4" src="kostka%206.png" alt="chyba1">');
            break;
        default:

            break;
    }

    switch (kostka5) {
        case 1:
            document.write('<img id="kostka5" src="kostka%201.png" alt="chyba1">');
            break;
        case 2:
            document.write('<img id="kostka5" src="kostka%202.png" alt="chyba1">');
            break;
        case 3:
            document.write('<img id="kostka5" src="kostka%203.png" alt="chyba1">');
            break;
        case 4:
            document.write('<img id="kostka5" src="kostka%204.png" alt="chyba1">');
            break;
        case 5:
            document.write('<img id="kostka5" src="kostka%205.png" alt="chyba1">');
            break;
        case 6:
            document.write('<img id="kostka5" src="kostka%206.png" alt="chyba1">');
            break;
        default:

            break;
    }
    switch (kostka6) {
        case 1:
            document.write('<img id="kostka6" src="kostka%201.png" alt="chyba1">');
            break;
        case 2:
            document.write('<img id="kostka6" src="kostka%202.png" alt="chyba1">');
            break;
        case 3:
            document.write('<img id="kostka6" src="kostka%203.png" alt="chyba1">');
            break;
        case 4:
            document.write('<img id="kostka6" src="kostka%204.png" alt="chyba1">');
            break;
        case 5:
            document.write('<img id="kostka6" src="kostka%205.png" alt="chyba1">');
            break;
        case 6:
            document.write('<img id="kostka6" src="kostka%206.png" alt="chyba1">');
            break;
        default:

            break;
    }

    celkovahodkostek = kostka1 + kostka2 + kostka3 + kostka4 + kostka5 + kostka6;
    console.log(celkovahodkostek);

    document.write('<button id="potvrdit" type="button" onclick="odstranbutton()">POTVRDIT</button>');

    console.log(kostka1, kostka2, kostka3, kostka4, kostka5, kostka6);

    document.write('<link rel="stylesheet" href="KHcss.css">');

}

function odstranbutton(){

    const myDiv = document.getElementById("potvrdit");
    const parent = myDiv.parentNode;
    parent.removeChild(myDiv);

    odstrankostky1();
}

function odstrankostky1(){

        const myDiv = document.getElementById("kostka1");
        const parent = myDiv.parentNode;
        parent.removeChild(myDiv);

        odstrankostky2();
}

function odstrankostky2(){

    const myDiv = document.getElementById("kostka2");
    const parent = myDiv.parentNode;
    parent.removeChild(myDiv);

    odstrankostky3();
}

function odstrankostky3(){

    const myDiv = document.getElementById("kostka3");
    const parent = myDiv.parentNode;
    parent.removeChild(myDiv);

    odstrankostky4();
}

function odstrankostky4(){

    const myDiv = document.getElementById("kostka4");
    const parent = myDiv.parentNode;
    parent.removeChild(myDiv);

    odstrankostky5();
}

function odstrankostky5(){

    const myDiv = document.getElementById("kostka5");
    const parent = myDiv.parentNode;
    parent.removeChild(myDiv);

    odstrankostky6();
}

function odstrankostky6(){

    const myDiv = document.getElementById("kostka6");
    const parent = myDiv.parentNode;
    parent.removeChild(myDiv);

    document.write('<button id="hrac2zacina" type="button" onclick="hrac1zadava()">ROZSUDEK</a></button>');
}

function hrac1zadava() {

    const myDiv = document.getElementById("hrac2zacina");
    const parent = myDiv.parentNode;
    parent.removeChild(myDiv);

    let pnl;
    let odpoved = parseInt(prompt("Hodnota kostek je rovna 0, pokuď se číslo rovná: "));

    pnl = celkovahodkostek - odpoved;

    if (pnl === 0) {
        JUDGEMENT = 1;
        console.log("ANO");
    } else {
        JUDGEMENT = 0;
        console.log("NE");
    }

    document.write('<p id="Ano1">Říká Lhář pravdu...</p><button id="Ano2" type="button" onclick="ano()">ANO</button>');
    document.write('<p id="Ne1">nebo lež?</p><button id="Ne2" type="button" onclick="ne()">NE</button>');
}
  function ano() {
    pnl2 = 0;
    hrac2zadava();
  }

  function ne() {
      pnl2 = 1;
      hrac2zadava();
  }

  function odstranano(){
      const myDiv = document.getElementById("Ano2");
      const parent = myDiv.parentNode;
      parent.removeChild(myDiv);

      odstranne();
  }

function odstranne(){
    const myDiv = document.getElementById("Ne2");
    const parent = myDiv.parentNode;
    parent.removeChild(myDiv);

    odstranano2();
}

function odstranano2(){
    const myDiv = document.getElementById("Ano1");
    const parent = myDiv.parentNode;
    parent.removeChild(myDiv);

    odstranne2();
}

function odstranne2(){
    const myDiv = document.getElementById("Ne1");
    const parent = myDiv.parentNode;
    parent.removeChild(myDiv);

    dalsikolo();
}

  function hrac2zadava() {

    if (JUDGEMENT === 1) {
        console.log("pravda");
        if (pnl2 === 0) {
            bodyh2++;

            document.write('<p id="hrac2dostalbod1">HÁDAČ DOSTAL BOD</p>');

            console.log("Hrac2 dostal bod");
            console.log(bodyh2);
        } else {
            bodyh1++;

            document.write('<p id="hrac1dostalbod1">LHÁŘ DOSTAL BOD</p>');

            console.log("Hrac1 dostal bod");
            console.log(bodyh1);
        }
    } else {
        console.log("lez");
        if (pnl2 !== 1) {
            bodyh1++;

            document.write('<p id="hrac1dostalbod2">LHÁŘ DOSTAL BOD</p>');

            console.log("Hrac1 dostal bod");
            console.log(bodyh1);
        } else {
            console.log("pravda");
            bodyh2++;

            document.write('<p id="hrac2dostalbod2">HÁDAČ DOSTAL BOD</p>');

            console.log("Hrac2 dostal bod");
            console.log(bodyh2);
        }
    }

    if (bodyh1 === konechry) {
        console.log("Hrac1 vyhral");
        hrac1vyhral();
    } else if (bodyh2 === konechry){
        console.log("Hrac2 vyhral");
        hrac2vyhral();
    } else {
        odstranano();
        console.log("dalsi kolo");
    }

    const HUDBA = document.getElementById("hudba");
    HUDBA.play();
}

function dalsikolo(){
    if (vyhra === 0) {
        document.write('<button id="dalsik" type="button" onclick="h1b1()">DRUHÉ KOLO</button>');
    } else h1b1();
}

function h1b1() {
    if (pnl2 === 1 && JUDGEMENT === 1) {
        const myDiv = document.getElementById("hrac1dostalbod1");
        const parent = myDiv.parentNode;
        parent.removeChild(myDiv);
    }

    h2b1();
}

function h2b1() {
    if (pnl2 === 0 && JUDGEMENT === 1) {
        const myDiv = document.getElementById("hrac2dostalbod1");
        const parent = myDiv.parentNode;
        parent.removeChild(myDiv);
    }

    h1b2();
}

function h1b2() {
    if (pnl2 === 0 && JUDGEMENT === 0) {
        const myDiv = document.getElementById("hrac1dostalbod2");
        const parent = myDiv.parentNode;
        parent.removeChild(myDiv);
    }

    h2b2();
}

function h2b2() {
    if (pnl2 === 1 && JUDGEMENT === 0) {
    const myDiv = document.getElementById("hrac2dostalbod2");
    const parent = myDiv.parentNode;
    parent.removeChild(myDiv);
    }

    if (vyhra === 0) {
        odstrandruhek();
    }
}

function odstrandruhek() {
    const myDiv = document.getElementById("dalsik");
    const parent = myDiv.parentNode;
    parent.removeChild(myDiv);

    Vrzeni();
}

let vyhra = 0;
function hrac1vyhral(){
    vyhra++;
    odstranano();
    document.write('<p id="h1v">LHÁŘ VYHRÁL</p>');
    document.write('<button type="button" onclick="window.location.href=\'index.html\'">ZPÁTKY DO MENU</button>');
}

function hrac2vyhral(){
    vyhra++;
    odstranano();
    document.write('<p id="h2v">HÁDAČ VYHRÁL</p>');
    document.write('<button type="button" onclick="window.location.href=\'index.html\'">ZPÁTKY DO MENU</button>');
}