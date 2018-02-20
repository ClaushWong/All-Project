var z = 0;

function random() {
  console.log(z);
  z = z + 1;
  if ( z < 11 ) {
    var a = Math.floor(Math.random() * 100);
    var b = document.getElementById("num");
    var c = document.createElement("p");
    console.log(a);
    b.appendChild(c);
    c.innerHTML = a;
  }
  return(z);
}
