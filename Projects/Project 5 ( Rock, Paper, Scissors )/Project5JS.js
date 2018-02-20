var a,b;

// a = player

// b = computer



function setup(){

  b = Math.floor(Math.random()* 3 + 1);

}



function rock(){

  a = 1;

}



function paper(){

  a = 2;

}



function scissors(){

  a = 3;

}



function game(a,b){

  setup();

  if ( a === 1 ){

    if ( b === 2 ){

      document.getElementById("a").value = "Computer wins.";

      }

    else if ( b === 3){

      document.getElementById("a").value = "Human wins.";

      }

    else {

      document.getElementById("a").value = "We have a draw.";

    }

  }


  else if ( a === 2 ){

    if ( b === 1 ){

      document.getElementById("a").value = "Human wins.";

    }

    else if ( b === 3 ){

      document.getElementById("a").value = "Computer wins.";

    }

    else {

      document.getElementById("a").value = "We have a draw.";

    }

  }


  else if ( a === 3 ){

    if ( b === 1 ){

      document.getElementById("a").value = "Computer wins.";

    }

    else if ( b === 2 ){

      document.getElementById("a").value = "Human wins.";

    }

    else {

      document.getElementById("a").value = "We have a draw.";

    }

  }

}
