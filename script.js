let calcBtn = document.getElementById('calc');
let resetBtn = document.getElementById('reset');

let valueP = document.getElementById('valueA');
let valuePO = document.getElementById('valueB');
let valueLq = document.getElementById('valueC');
let valueLs = document.getElementById('valueD');
let valueWq = document.getElementById('valueE');
let valueWs = document.getElementById('valueF');
let valuePn = document.getElementById('valueG');

let inputLa = document.getElementById('inputλ');
let inputU = document.getElementById('inputμ');
let inputN = document.getElementById('inputN');


function factorianNumber(n) {
    if (n == 0) {
        return 1;
    }
    return n * factorianNumber(n - 1);
}

function calcP(valueP, valuePO, s) {
    let res = (valueP / valuePO) * s;
    return res * 100;
}

function calcP0(p) {
    return (1 - (p / 100)) * 100;
}

function calcLq(s, valueP, valuePO, p0) {
    return ((1 / (factorianNumber(s - 1))) * (Math.pow(valueP / valuePO, s)) * ((valueP * valuePO) / Math.pow((s * valuePO) - valueP, 2))) * (p0 / 100);
}

function calcLs(lq, valueP, valuePO) {
    return lq + (valueP / valuePO);
}

function calcWq(valueP, valuePO) {
    return (valueP) / (valuePO * (valuePO - valueP));
}

function calcWs(ls, valueP) {
    return ls / valueP;
}

function calcPn(s, valueP, valuePO, p0) {
    return ((1 / (factorianNumber(s))) * (valueP / valuePO) * ((s * valuePO) / (Math.pow(((s * valuePO) - valueP), 2)))) * (p0 / 100)
}

function formatPercentage(value) {
    return `${value}%`;
}

calcBtn.addEventListener('click', function () {

    let inputAvalue = +document.getElementById('inputλ').value;
    let inputBvalue = +document.getElementById('inputμ').value;
    let inputCvalue = +document.getElementById('inputN').value;

    if (inputAvalue, inputBvalue, inputCvalue) {

        let p = Math.round(calcP(inputAvalue, inputBvalue, inputCvalue));
        let p0 = calcP0(p);
        let s = inputCvalue;

        let valueARes = Math.round(calcP(inputAvalue, inputBvalue, s));
        let valueBRes = Math.round(calcP0(p).toString());
        let valueLqRes = Math.round((calcLq(s, inputAvalue, inputBvalue, p0) + Number.EPSILON) * 100) / 100;
        let valueLsRes = Math.round(calcLs(valueLqRes, inputAvalue, inputBvalue));
        let wqRes = Math.round((calcWq(inputAvalue, inputBvalue) + Number.EPSILON) * 100) / 100;
        let wsRes = calcWs(valueLsRes, inputAvalue).toString().substring(0, 7);
        let pnRes = calcPn(s, inputAvalue, inputBvalue, p0).toString().substring(0, 7);

        valueP.innerHTML = `p = ${formatPercentage(valueARes)}`;
        valuePO.innerHTML = `p0 = ${formatPercentage(valueBRes)}`;
        valueLq.innerHTML = `Lq = ${valueLqRes}`;
        valueLs.innerHTML = `Ls = ${valueLsRes}`;
        valueWq.innerHTML = `Wq = ${wqRes}`;
        valueWs.innerHTML = `Ws = ${wsRes}`;
        valuePn.innerHTML = `Ws = ${formatPercentage(pnRes)}`;
    } else {
        valueP.innerHTML = ``;
        valuePO.innerHTML = ``;
        valueLq.innerHTML = ``;
        valueLs.innerHTML = ``;
        valueWq.innerHTML = ``;
        valueWs.innerHTML = ``;
        valuePn.innerHTML = ``;
        Swal.fire({
            icon: 'error',
            title: 'e r r o r',
            text: 'Por favor rellena todos los campos necesarios',
        })
    }
});

resetBtn.addEventListener('click', function () {
    inputLa.value = '';
    inputU.value = '';
    inputN.value = '';
    valueP.innerHTML = '';
    valuePO.innerHTML = '';
    valueLq.innerHTML = '';
    valueLs.innerHTML = '';
    valueWq.innerHTML = '';
    valueWs.innerHTML = '';
    valuePn.innerHTML = '';
})
