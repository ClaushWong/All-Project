function state1() {
  console.log(document.getElementById('x').value);
}

function state2() {
  console.log(document.getElementById('y').value);
}

function add(x,y){
  var t = Number(x) + Number(y);
  document.getElementById("a").value = t;
}

function sub(x,y) {
    var t = Number(x) - Number(y);
    document.getElementById("s").value = t;
}

function mult(x,y) {
    var t = Number(x) * Number(y);
    document.getElementById("m").value = t;
}

function div(x,y) {
    var t = Number(x) / Number(y);
    document.getElementById("d").value = t;
}
