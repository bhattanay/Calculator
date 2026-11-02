
function anyButtonPress(butt) {
    document.getElementById("textBox").value += butt;
}

let equations;
let newEquations;

function pageLoad() {
    const stored = sessionStorage.getItem("storage");
    if (stored) {
        equations = JSON.parse(stored);
        newEquations = equations;
    } else {
        equations = [];
        newEquations = [];
        sessionStorage.setItem("storage", JSON.stringify(equations));
    }
}

function EXECUTION() {
    //step 1: get text value
    //step 2: show answer on screen
    //step 3: store equation into let equations
    //step 4: overwrite session storage
    document.getElementById("answerBox").value = eval(document.getElementById("textBox").value);
    equations.push(document.getElementById("textBox").value);
    sessionStorage.setItem("storage", JSON.stringify(equations));
}

//step 1: find what equation is currently typed in the box
//step 2: change index depending on arrow
//step 3: change text in the box

let currIndex;
function ascent() {

    if (equations.length  === 0) {
        return;
    }

    if (document.getElementById("textBox").value !== equations[currIndex]) {
        currIndex = equations.length - 1;
        document.getElementById("textBox").value = equations[currIndex];
    } else {
        currIndex--;
        if (currIndex < 0) {
            currIndex = 0;
        }
        else {
            document.getElementById("textBox").value = equations[currIndex];
        }
    }
}

function descent() {
    if (equations.length  === 0) {
        return;
    }
    if (document.getElementById("textBox").value !== equations[currIndex]) {
        currIndex = equations.length - 1;
        document.getElementById("textBox").value = equations[currIndex];
    }
    else {
        currIndex++;
        if(currIndex === equations.length) {
            document.getElementById("textBox").value = "";
        }
        else {
            document.getElementById("textBox").value = equations[currIndex];
        }
    }
}

function cleartxt() {
    document.getElementById("answerBox").value = "";
    document.getElementById("textBox").value = "";
}