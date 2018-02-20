var r;

function add(x,y){
    r = Number(x) + Number(y);
}

function sub(x,y) {
    r = Number(x) - Number(y);
}

function mult(x,y) {
    r = Number(x) * Number(y);
}

function div(x,y) {
    r = Number(x) / Number(y);
}

function result(r) {
  document.getElementById("z").value = r;
}
