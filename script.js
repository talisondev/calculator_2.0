let display = document.querySelector("input#display");

function limpar() {
    display.value = "";
}

function limparOne() {
    let getLastValue = display.value.substr(-1);
    let removeLastValue = display.value.replace(getLastValue, "");
    display.value = removeLastValue;
}

function valor(num) {
    display.value += num;
}

function raiz() {
    let valor = parseInt(display.value);
    let result = Math.sqrt(valor);
    result ? (display.value = result) : (display.value = "");
}

function result() {
    let resultado = 0;
    resultado = display.value;
    resultado ? (display.value = eval(resultado)) : (display.value = "");
}
