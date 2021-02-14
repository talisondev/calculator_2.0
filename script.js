function limpar() {
    document.querySelector("input#display").value = "";
}

function limparOne() {
    let display = document.querySelector("input#display").value;
    let getLastValue = display.substr(-1);
    let removeLastValue = display.replace(getLastValue, "");
    document.querySelector("#display").value = removeLastValue;
}

function valor(num) {
    document.querySelector("#display").value += num;
}

function raiz() {
    let valor = parseInt(document.querySelector("#display").value);
    let result = Math.sqrt(valor);
    result
        ? (document.querySelector("#display").value = result)
        : (document.querySelector("#display").value = "");
    // document.querySelector("#display").value = result;
}

function result() {
    let resultado = 0;
    resultado = display.value;
    resultado
        ? (document.querySelector("#display").value = eval(resultado))
        : (document.querySelector("#display").value = "");
    // document.querySelector("#display").value = eval(resultado);
}
