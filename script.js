var stringVal = "";

// display the equation when entered
function disp(value) {
  stringVal = document.querySelector("#sum-input-tf").value;
  stringVal += value;
  document.querySelector("#sum-input-tf").value = stringVal;
}

// calculate when  the equal button is pressed
function calculateValue() {
  //   var sum = document.querySelector("#sum-input-tf").value;
  if (stringVal != "") {
    var evaluateVal = eval(stringVal);
    console.log(evaluateVal);
    document.querySelector("#sum-tf").value = evaluateVal;
  } else {
    document.querySelector("#sum-tf").value = "";
  }
}

// remove last character
function remove() {
  var strVal = document.querySelector("#sum-input-tf").value;
  var newVal = strVal.slice(0, -1);
  document.querySelector("#sum-input-tf").value = newVal;
  stringVal = newVal;
}

//clear textfields
function clearscreen() {
  if (document.querySelector("#sum-tf") != null) {
    document.querySelector("#sum-tf").value = "";
  }
  if (document.querySelector("#sum-input-tf") != null) {
    document.querySelector("#sum-input-tf").value = "";
  }
  stringVal = "";
}
