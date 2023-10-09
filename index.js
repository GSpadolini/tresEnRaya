"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
window.addEventListener('load', function () {
    seleccionar();
    jugar();
});
var span = document.querySelectorAll('span');
var div = document.querySelectorAll('div');
var ul = document.querySelectorAll('ul');
var li = document.querySelectorAll('li');
var h1 = document.querySelector('h1');
var p = document.querySelectorAll('p');
var jugadasPC = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var par = 0;
var pc = 0;
var pcXO = '';
var jugadorXO;
var ganador = 0;
var empatador = 0;
var empiezasTu = true;
var comprovacion = function (elemento) {
    if (h1.textContent === '' && pc === 0) {
        if (jugadorXO === 'O' && li[elemento].textContent === "") {
            li[elemento].insertAdjacentHTML('afterbegin', 'O');
            jugadorXO = 'X';
        }
        else {
            if (jugadorXO === 'X' && li[elemento].textContent === "") {
                li[elemento].insertAdjacentHTML('afterbegin', 'X');
                jugadorXO = 'O';
            }
        }
    }
    if (h1.textContent === '' && pc > 0) {
        if (jugadorXO === 'O' && li[elemento].textContent === "") {
            li[elemento].insertAdjacentHTML('afterbegin', 'O');
            jugadasPC.splice(jugadasPC.indexOf(elemento), 1);
        }
        else if (jugadorXO === 'X' && li[elemento].textContent === "") {
            li[elemento].insertAdjacentHTML('afterbegin', 'X');
            jugadasPC.splice(jugadasPC.indexOf(elemento), 1);
        }
    }
    var termina = 0;
    li.forEach(function (element) {
        if (element.textContent !== '') {
            termina++;
        }
    });
    if (termina >= 5 && h1.textContent === '') {
        ganar();
    }
    if (termina === 9 && h1.textContent === '' && ganador !== 1) {
        empate();
    }
    var randonJuega = Math.floor(Math.random() * jugadasPC.length);
    if (pc >= 1) {
        comprovacionPC(jugadasPC[randonJuega], pcXO);
    }
};
var comprovacionPC = function (elemento, valorXO) {
    if (empatador !== 1 && ganador !== 1) {
        if (h1.textContent === '' && valorXO === 'O') {
            li[elemento].insertAdjacentHTML('afterbegin', 'O');
            jugadasPC.splice(jugadasPC.indexOf(elemento), 1);
        }
        else if (li[elemento].textContent === "" && valorXO === 'X') {
            li[elemento].insertAdjacentHTML('afterbegin', 'X');
            jugadasPC.splice(jugadasPC.indexOf(elemento), 1);
        }
    }
    var termina = 0;
    li.forEach(function (element) {
        if (element.textContent !== '') {
            termina++;
        }
    });
    if (termina >= 5 && h1.textContent === '') {
        ganar();
    }
    if (termina === 9 && h1.textContent === '' && ganador !== 1) {
        empate();
    }
};
var comprobarGanar = function () {
    if ((li[0].textContent === "X" && li[1].textContent === "X" && li[2].textContent === "X")
        || (li[3].textContent === "X" && li[4].textContent === "X" && li[5].textContent === "X")
        || (li[6].textContent === "X" && li[7].textContent === "X" && li[8].textContent === "X")
        || (li[0].textContent === "X" && li[3].textContent === "X" && li[6].textContent === "X")
        || (li[1].textContent === "X" && li[4].textContent === "X" && li[7].textContent === "X")
        || (li[2].textContent === "X" && li[5].textContent === "X" && li[8].textContent === "X")
        || (li[0].textContent === "X" && li[4].textContent === "X" && li[8].textContent === "X")
        || (li[6].textContent === "X" && li[4].textContent === "X" && li[2].textContent === "X")) {
        return 'X';
    }
    if ((li[0].textContent === "O" && li[1].textContent === "O" && li[2].textContent === "O")
        || (li[3].textContent === "O" && li[4].textContent === "O" && li[5].textContent === "O")
        || (li[6].textContent === "O" && li[7].textContent === "O" && li[8].textContent === "O")
        || (li[0].textContent === "O" && li[3].textContent === "O" && li[6].textContent === "O")
        || (li[1].textContent === "O" && li[4].textContent === "O" && li[7].textContent === "O")
        || (li[2].textContent === "O" && li[5].textContent === "O" && li[8].textContent === "O")
        || (li[0].textContent === "O" && li[4].textContent === "O" && li[8].textContent === "O")
        || (li[6].textContent === "O" && li[4].textContent === "O" && li[2].textContent === "O")) {
        return 'O';
    }
};
var ganar = function () {
    if (comprobarGanar() === 'X') {
        h1.classList.remove("invisible");
        h1.insertAdjacentHTML('afterbegin', 'Gano el jugador X');
        ganador = 1;
    }
    if (comprobarGanar() === 'O') {
        h1.classList.remove("invisible");
        h1.insertAdjacentHTML('afterbegin', 'Gano el jugador O');
        ganador = 1;
    }
};
var empate = function () {
    h1.classList.remove("invisible");
    h1.insertAdjacentHTML('afterbegin', 'Empate');
    empatador = 1;
};
var seleccionarXO = function (tresCuatro) {
    if (tresCuatro === 3 && par === 0) {
        span[3].classList.add("seleccionado");
        span[4].classList.add('none');
        jugadorXO = 'X';
    }
    else if (tresCuatro === 4 && par === 0) {
        span[4].classList.add("seleccionado");
        span[3].classList.add('none');
        jugadorXO = 'O';
    }
};
var desapareceSpan = function () {
    var i = 0;
    span.forEach(function (element) {
        element.classList.add('none');
    });
    p[0].classList.add('none');
    p[1].classList.add('none');
    div[6].classList.remove('invisible');
};
var aparecenLosul = function () {
    ul.forEach(function (element) {
        element.classList.remove('none');
    });
};
var seleccionar = function () {
    var juegasConUnCompi = 0;
    span[0].addEventListener("click", function () {
        span[0].classList.add("none");
        span[1].classList.add("none");
        span[2].classList.add("none");
        div[4].classList.remove("invisible");
        pc = 1;
    });
    span[1].addEventListener("click", function () {
        span[0].classList.add("none");
        span[1].classList.add('none');
        span[2].classList.add("none");
        div[4].classList.remove("invisible");
    });
    span[2].addEventListener("click", function () {
        span[0].classList.add("none");
        span[1].classList.add("none");
        span[2].classList.add("none");
        div[4].classList.remove("invisible");
        juegasConUnCompi = 1;
    });
    span[3].addEventListener("click", function () {
        //Este es X
        seleccionarXO(3);
        if (pc === 1) {
            div[6].classList.remove('invisible');
            pcXO = 'X';
        }
        if (juegasConUnCompi === 1) {
            p[2].insertAdjacentHTML('afterbegin', "Comienza el compi con ".concat(jugadorXO));
            desapareceSpan();
            aparecenLosul();
        }
    });
    span[4].addEventListener("click", function () {
        //Este es O
        seleccionarXO(4);
        if (pc === 1) {
            div[6].classList.remove('invisible');
            pcXO = 'O';
        }
        if (juegasConUnCompi === 1) {
            p[2].insertAdjacentHTML('afterbegin', "Comienza el compi con ".concat(jugadorXO));
            desapareceSpan();
            aparecenLosul();
        }
    });
    span[5].addEventListener('click', function () {
        //este es Computadora
        span[5].classList.add("seleccionado");
        span[6].classList.add('invisible');
        juegaPC();
        if (pc >= 1) {
            ul[0].classList.remove('none');
            ul[1].classList.remove('none');
            ul[2].classList.remove('none');
            desapareceSpan();
            p[2].insertAdjacentHTML('afterbegin', "Comienza la computadora con ".concat(pcXO));
        }
        pc = 2;
    });
    span[6].addEventListener('click', function () {
        //Este es Tu
        if (pcXO === 'X') {
            jugadorXO = 'X';
            pcXO = 'O';
            empiezasTu = false;
        }
        if (pcXO === 'O' && empiezasTu) {
            jugadorXO = 'O';
            pcXO = 'X';
        }
        span[6].classList.add("seleccionado");
        span[5].classList.add('invisible');
        if (pc >= 1) {
            ul[0].classList.remove('none');
            ul[1].classList.remove('none');
            ul[2].classList.remove('none');
            desapareceSpan();
            p[2].insertAdjacentHTML('afterbegin', "Comienza tu con ".concat(jugadorXO));
        }
    });
};
var jugar = function () {
    li[0].addEventListener('click', function () {
        comprovacion(0);
    });
    li[1].addEventListener('click', function () {
        comprovacion(1);
    });
    li[2].addEventListener('click', function () {
        comprovacion(2);
    });
    li[3].addEventListener('click', function () {
        comprovacion(3);
    });
    li[4].addEventListener('click', function () {
        comprovacion(4);
    });
    li[5].addEventListener('click', function () {
        comprovacion(5);
    });
    li[6].addEventListener('click', function () {
        comprovacion(6);
    });
    li[7].addEventListener('click', function () {
        comprovacion(7);
    });
    li[8].addEventListener('click', function () {
        comprovacion(8);
    });
};
var primeraJugada = function (a) {
    var randonEmpiza = Math.floor(Math.random() * 4);
    if (pc !== 4 && a === 'X') {
        if (randonEmpiza === 0) {
            li[0].insertAdjacentHTML('afterbegin', 'X');
            jugadasPC.splice(0, 1);
            pc = pc + 2;
        }
        if (randonEmpiza === 1) {
            li[2].insertAdjacentHTML('afterbegin', 'X');
            pc = pc + 2;
            jugadasPC.splice(2, 1);
        }
        if (randonEmpiza === 2) {
            li[6].insertAdjacentHTML('afterbegin', 'X');
            pc = pc + 2;
            jugadasPC.splice(6, 1);
        }
        if (randonEmpiza === 3) {
            li[8].insertAdjacentHTML('afterbegin', 'X');
            pc = pc + 2;
            jugadasPC.splice(8, 1);
        }
        jugadorXO = 'O';
    }
    if (pc !== 4 && a === 'O') {
        if (randonEmpiza === 0) {
            li[0].insertAdjacentHTML('afterbegin', 'O');
            pc = pc + 2;
            jugadasPC.splice(0, 1);
        }
        if (randonEmpiza === 1) {
            li[2].insertAdjacentHTML('afterbegin', 'O');
            pc = pc + 2;
            jugadasPC.splice(2, 1);
        }
        if (randonEmpiza === 2) {
            li[6].insertAdjacentHTML('afterbegin', 'O');
            pc = pc + 2;
            jugadasPC.splice(6, 1);
        }
        if (randonEmpiza === 3) {
            li[8].insertAdjacentHTML('afterbegin', 'O');
            pc = pc + 2;
            jugadasPC.splice(8, 1);
        }
        jugadorXO = 'X';
    }
    par++;
};
var juegaPC = function () {
    var randonJuega = Math.floor(Math.random() * jugadasPC.length);
    if (pcXO === 'X') {
        if (jugadasPC.length > 0 && par === 0) {
            primeraJugada('X');
        }
        else if (par >= 1) {
            comprovacionPC(randonJuega, '');
        }
    }
    if (pcXO === 'O') {
        primeraJugada('O');
    }
};
