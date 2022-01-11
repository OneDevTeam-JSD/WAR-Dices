var ATA = 0;
var DEF = 0;
const LIMITE = 3;

function ordenar (a, b) {
    return b - a;
}

function rowDice () {
    return Math.floor((Math.random() * (6))+ 1);
}

function rowOne () {
    console.log("ONLY ONE");

    ATA = document.getElementById("redDices").value;
    DEF = document.getElementById("yellowDices").value;

    let log = `ATA [${ATA}] x [${DEF}] DEF <br>`;
    let quantidadeDados = (ATA < DEF) ? ATA : DEF;

    console.log(`QD: ${quantidadeDados}`);

    let vetATA = [];
    let vetDEF = [];

    for (let i = 0; i < ATA && i < LIMITE; i++) {
        let aux = rowDice();
        vetATA.push(aux);
    }
    for (let i = 0; i < DEF && i < LIMITE; i++) {
        let aux = rowDice();
        vetDEF.push(aux);
    }

    console.log(`Dados ATA: ${vetATA}`);
    console.log(`Dados DEF: ${vetDEF}`);

    vetATA.sort(ordenar);
    vetDEF.sort(ordenar);

    log += `ATA: ${vetATA} <br>`;
    log += `DEF: ${vetDEF} <br>`;
    console.log(`Dados ATA ordenados: ${vetATA}`);
    console.log(`Dados DEF ordenados: ${vetDEF}`);

    for (let i = 0; i < quantidadeDados && i < LIMITE; i++) {
        if (vetATA[i] > vetDEF[i])
            DEF--;
        else 
            ATA--;
    }

    log += `Resultado: ATA [${ATA}] x [${DEF}] DEF <br>`;
    let resultado = `[ Ataque: ${ATA} | Defesa: ${DEF} ]`;

    let campoLog = document.getElementById("logs").innerHTML += log;
    let campo = document.getElementById("p-resultado").innerText = resultado;

    document.getElementById("redDices").value = ATA;
    document.getElementById("yellowDices").value = DEF;

}

function rowAll () {

    console.log("ALL IN");    

    ATA = document.getElementById("redDices").value;
    DEF = document.getElementById("yellowDices").value;

    let log = `ATA [${ATA}] x [${DEF}] DEF <br>`;

    while (ATA > 0 && DEF > 0) {

        let quantidadeDados = (ATA < DEF) ? ATA : DEF;

        console.log(`QD: ${quantidadeDados}`);

        let vetATA = [];
        let vetDEF = [];

        for (let i = 0; i < ATA && i < LIMITE; i++) {
            let aux = rowDice();
            vetATA.push(aux);
        }
        for (let i = 0; i < DEF && i < LIMITE; i++) {
            let aux = rowDice();
            vetDEF.push(aux);
        }

        console.log(`Dados ATA: ${vetATA}`);
        console.log(`Dados DEF: ${vetDEF}`);

        vetATA.sort(ordenar);
        vetDEF.sort(ordenar);

        log += `ATA: ${vetATA} <br>`;
        log += `DEF: ${vetDEF} <br>`;

        console.log(`Dados ATA ordenados: ${vetATA}`);
        console.log(`Dados DEF ordenados: ${vetDEF}`);

        for (let i = 0; i < quantidadeDados && i < LIMITE; i++) {
            if (vetATA[i] > vetDEF[i])
                DEF--;
            else 
                ATA--;
        }

        log += `ATA [${ATA}] x [${DEF}] DEF <br>`;
    
    }

    log += `Resultado: ATA [${ATA}] x [${DEF}] DEF <br>`;
    let resultado = `[ Ataque: ${ATA} | Defesa: ${DEF} ]`;

    let campoLog = document.getElementById("logs").innerHTML += log;
    let campo = document.getElementById("p-resultado").innerText = resultado;

    document.getElementById("redDices").value = ATA;
    document.getElementById("yellowDices").value = DEF;

}

function clear () {
    document.getElementById("redDices").value = 0;
    document.getElementById("yellowDices").value = 0;
    let resultado = `[ Ataque: - | Defesa: - ]`;
    let campo = document.getElementById("p-resultado").innerText = resultado;
    let campoLog = document.getElementById("logs").innerHTML = "";

}

document.getElementById("btn-onlyOne").addEventListener("click", rowOne);
document.getElementById("btn-allIn").addEventListener("click", rowAll);
document.getElementById("btn-clear").addEventListener("click", clear);