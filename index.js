window.addEventListener('load', function() {
    seleccionar();
    jugar();
});

const span = document.querySelectorAll('span');
const div = document.querySelectorAll('div');
const ul = document.querySelectorAll('ul');
const li = document.querySelectorAll('li');
const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
let jugadasPC = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let par = 0;
let pc = 0;
let pcXO='';
let jugadorXO;
let ganador=0;
let empatador=0;
let empiezasTu=true;

const comprovacion = (elemento) => {
    if (h1.textContent === '' && pc === 0) {
        if (jugadorXO==='O' && li[elemento].textContent === "" ) {
            li[elemento].insertAdjacentHTML('afterbegin', 'O');
            jugadorXO = 'X';
    }else {if (jugadorXO==='X' && li[elemento].textContent === "") {
            li[elemento].insertAdjacentHTML('afterbegin', 'X');
            jugadorXO = 'O';
            }
        }  
    }
    if (h1.textContent === '' && pc > 0) {
        if (jugadorXO==='O' && li[elemento].textContent === "" ) {
            li[elemento].insertAdjacentHTML('afterbegin', 'O');
            jugadasPC.splice(jugadasPC.indexOf(elemento),1);
    }else if (jugadorXO==='X' && li[elemento].textContent === "") {
            li[elemento].insertAdjacentHTML('afterbegin', 'X');
            jugadasPC.splice(jugadasPC.indexOf(elemento),1);
            }
    }
    let termina=0;
    li.forEach((element) => {
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
    let randonJuega = Math.floor(Math.random() * jugadasPC.length);
    if (pc>=1) {
        comprovacionPC(jugadasPC[randonJuega], pcXO);
    }
}
const comprovacionPC = (elemento, valorXO) => {
    if (empatador!==1 && ganador!==1) {
    if (h1.textContent === '' && valorXO === 'O') {
            li[elemento].insertAdjacentHTML('afterbegin', 'O');
            jugadasPC.splice(jugadasPC.indexOf(elemento),1);
    }else if (li[elemento].textContent === "" && valorXO === 'X') {
            li[elemento].insertAdjacentHTML('afterbegin', 'X');
            jugadasPC.splice(jugadasPC.indexOf(elemento),1);          
        }
    }
    
    let termina=0;
    li.forEach((element) => {
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
}
const comprobarGanar = () => {
    if ((li[0].textContent==="X" && li[1].textContent==="X" && li[2].textContent==="X")
    || (li[3].textContent==="X" && li[4].textContent==="X" && li[5].textContent==="X")
    || (li[6].textContent==="X" && li[7].textContent==="X" && li[8].textContent==="X")
    || (li[0].textContent==="X" && li[3].textContent==="X" && li[6].textContent==="X")
    || (li[1].textContent==="X" && li[4].textContent==="X" && li[7].textContent==="X")
    || (li[2].textContent==="X" && li[5].textContent==="X" && li[8].textContent==="X")
    || (li[0].textContent==="X" && li[4].textContent==="X" && li[8].textContent==="X")
    || (li[6].textContent==="X" && li[4].textContent==="X" && li[2].textContent==="X")) {
        return 'X'
    }
    if ((li[0].textContent==="O" && li[1].textContent==="O" && li[2].textContent==="O")
    || (li[3].textContent==="O" && li[4].textContent==="O" && li[5].textContent==="O")
    || (li[6].textContent==="O" && li[7].textContent==="O" && li[8].textContent==="O")
    || (li[0].textContent==="O" && li[3].textContent==="O" && li[6].textContent==="O")
    || (li[1].textContent==="O" && li[4].textContent==="O" && li[7].textContent==="O")
    || (li[2].textContent==="O" && li[5].textContent==="O" && li[8].textContent==="O")
    || (li[0].textContent==="O" && li[4].textContent==="O" && li[8].textContent==="O")
    || (li[6].textContent==="O" && li[4].textContent==="O" && li[2].textContent==="O")) {
        return 'O'
    }   
}
const ganar = () => {
    if (comprobarGanar() === 'X') {
        h1.classList.remove("invisible");
        h1.insertAdjacentHTML('afterbegin', 'Gano el jugador X')
        ganador = 1;
    }
    if (comprobarGanar() === 'O') {
        h1.classList.remove("invisible");
        h1.insertAdjacentHTML('afterbegin', 'Gano el jugador O')
        ganador = 1;
    }
}
const empate = () => {
    h1.classList.remove("invisible");
    h1.insertAdjacentHTML('afterbegin', 'Empate')
    empatador=1;
}
const seleccionarXO = (tresCuatro) => {
    if (tresCuatro === 3 && par === 0) {
    span[3].classList.add("seleccionado");
    span[4].classList.add('none');
    jugadorXO = 'X';
    } else if (tresCuatro === 4 && par === 0) {
    span[4].classList.add("seleccionado");
    span[3].classList.add('none');
    jugadorXO = 'O';
    }
    
}
const desapareceSpan = () => {
    let i = 0
    span.forEach(element => {
        element.classList.add('none');
    });
    p[0].classList.add('none');
    p[1].classList.add('none');
    div[6].classList.remove('invisible')
}
const seleccionar = () => {
    let juegasConUnCompi=0;
    span[0].addEventListener("click", () => {
        span[0].classList.add("none");
        span[1].classList.add("none");
        span[2].classList.add("none");
        div[4].classList.remove("invisible");
        pc = 1;
    })
    span[1].addEventListener("click", () => {
        span[0].classList.add("none");
        span[1].classList.add('none');
        span[2].classList.add("none");
        div[4].classList.remove("invisible");
    })
    span[2].addEventListener("click", () => {
        span[0].classList.add("none");
        span[1].classList.add("none");
        span[2].classList.add("none");
        div[4].classList.remove("invisible");
        ul[0].classList.remove('none');
        ul[1].classList.remove('none');
        ul[2].classList.remove('none');
        juegasConUnCompi=1
        
    })
    span[3].addEventListener("click", () => {
        //Este es X
        seleccionarXO(3);
        if (pc === 1) {
            div[6].classList.remove('invisible');
            pcXO= 'X';
        }
        if (juegasConUnCompi === 1) {
            p[2].insertAdjacentHTML('afterbegin', `Comienza el compi con ${jugadorXO}`);
            desapareceSpan();
        }
    })
    span[4].addEventListener("click", () => {
        //Este es O
        seleccionarXO(4);
        if (pc === 1) {
            div[6].classList.remove('invisible');
            pcXO = 'O';
        }
        if (juegasConUnCompi === 1) {
            p[2].insertAdjacentHTML('afterbegin', `Comienza el compi con ${jugadorXO}`);
            desapareceSpan();
        }
    })
    span[5].addEventListener('click', () => {
        //este es Computadora
        span[5].classList.add("seleccionado");
        span[6].classList.add('invisible');
        juegaPC();
        if (pc>=1) {
            ul[0].classList.remove('none');
            ul[1].classList.remove('none');
            ul[2].classList.remove('none');
            desapareceSpan();
            p[2].insertAdjacentHTML('afterbegin', `Comienza la computadora con ${pcXO}`)
        }
        pc = 2;
    })
    span[6].addEventListener('click', () => {
        //Este es Tu
        if (pcXO==='X') {
            jugadorXO = 'X';
            pcXO='O';
            empiezasTu=false;
        }
        if (pcXO==='O' && empiezasTu) {
            jugadorXO = 'O';
            pcXO='X';
        }
        span[6].classList.add("seleccionado");
        span[5].classList.add('invisible');
        if (pc>=1) {
            ul[0].classList.remove('none');
            ul[1].classList.remove('none');
            ul[2].classList.remove('none');
            desapareceSpan();
            p[2].insertAdjacentHTML('afterbegin', `Comienza tu con ${jugadorXO}`)
        }
    })
}

const jugar = () =>{
    li[0].addEventListener('click', () => {
        comprovacion(0); 
    })
    li[1].addEventListener('click', () => {
        comprovacion(1);   
    })
    li[2].addEventListener('click', () => {
        comprovacion(2) 
    })
    li[3].addEventListener('click', () => {
        comprovacion(3)
    })
    li[4].addEventListener('click', () => {
        comprovacion(4)
    })
    li[5].addEventListener('click', () => {
        comprovacion(5)
    })
    li[6].addEventListener('click', () => {
        comprovacion(6)
    })
    li[7].addEventListener('click', () => {
        comprovacion(7)
    })
    li[8].addEventListener('click', () => {
        comprovacion(8)
    })
}
const primeraJugada = (a) =>{
    let randonEmpiza = Math.floor(Math.random() * 4)
    if (pc !== 4 && a === 'X') {
        if (randonEmpiza === 0) {
            li[0].insertAdjacentHTML('afterbegin', 'X');
            jugadasPC.splice(0,1);
            pc = pc + 2;
        }
        if (randonEmpiza === 1) {
            li[2].insertAdjacentHTML('afterbegin', 'X');
            pc = pc + 2;
            jugadasPC.splice(2,1);
        }
        if (randonEmpiza === 2) {
            li[6].insertAdjacentHTML('afterbegin', 'X');
            pc = pc + 2;
            jugadasPC.splice(6,1);
        }
        if (randonEmpiza === 3) {
            li[8].insertAdjacentHTML('afterbegin', 'X');
            pc = pc + 2;
            jugadasPC.splice(8,1);
        }
        jugadorXO='O'
    }

    if (pc !== 4 && a === 'O') {
        if (randonEmpiza === 0) {
            li[0].insertAdjacentHTML('afterbegin', 'O');
            pc = pc + 2;
            jugadasPC.splice(0,1);
        }
        if (randonEmpiza === 1) {
            li[2].insertAdjacentHTML('afterbegin', 'O');
            pc = pc + 2;
            jugadasPC.splice(2,1);
        }
        if (randonEmpiza === 2) {
            li[6].insertAdjacentHTML('afterbegin', 'O');
            pc = pc + 2;
            jugadasPC.splice(6,1);
        }
        if (randonEmpiza === 3) {
            li[8].insertAdjacentHTML('afterbegin', 'O');
            pc = pc + 2;
            jugadasPC.splice(8,1);
        }
        jugadorXO='X';
    } 
    par++;
}
const juegaPC = () => {
    let randonJuega = Math.floor(Math.random() * jugadasPC.length)
    if (pcXO === 'X') {
        if (jugadasPC.length>0 && par ===0) {
            primeraJugada('X');

        }else if (par >= 1) {
            comprovacionPC(randonJuega);
        }

    }
    if (pcXO === 'O') {
        primeraJugada('O');
    }
}