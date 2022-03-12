function clearScreen() {
    debugger

    document.getElementById('button').value = '';
}

function display(value){
    debugger

    document.getElementById("button").value += value;
}

function calculate() {
    debugger
debugger
    let a = document.getElementById('button').value;
    let b = eval(a);
    document.getElementById('button').value = b;
}
