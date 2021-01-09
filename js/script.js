let totalIngresos = 0;
let totalGastos = 0, totalGastos1 = 0, totalGastos2 = 0, totalGastos3 = 0;
let balance = 0;

function calcTotalIngresos() {
    let ingreso_items = document.getElementsByName("ingresos");
    let total = 0;
    total = calcTotal(ingreso_items);
    document.getElementById("ingreso_total").value = total;
    totalIngresos = total;
    calcBalance();
}


function calcTotalGastosFijos() {
    let gastos_fijos_items = document.getElementsByName("gasto-fijo");
    let total = 0;
    total = calcTotal(gastos_fijos_items);
    document.getElementById("gasto_fijo_total").value = total;
    totalGastos1 = total;
    calcBalance();
}


function calcTotalGastosVariables() {
    let gastos_variables_items = document.getElementsByName("gasto-variable");
    let total = 0;
    total = calcTotal(gastos_variables_items);
    document.getElementById("gasto_variable_total").value = total;
    totalGastos2 = total;
    calcBalance();
}

function calcTotalAhorro() {
    let ahorro_items = document.getElementsByName("ahorro");
    let total = 0;
    total = calcTotal(ahorro_items);
    document.getElementById("ahorro_total").value = total
    totalGastos3= total;
    calcBalance();
}

function calcTotal(array) 
{
    let totalOut = 0;
    array.forEach(items => {
        let itemVal = parseInt(items.value);
        if (itemVal) totalOut += itemVal;
    });

    return totalOut;
}

function calcBalance() {
    totalGastos = totalGastos1 + totalGastos2 + totalGastos3;
    balance = totalIngresos - totalGastos;
    document.getElementById("resultado").textContent = balance
}
