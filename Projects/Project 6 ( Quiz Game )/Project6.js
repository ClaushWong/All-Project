var a,b,c,d;


function false1(){
  console.log("You got that wrong.");
  firstQuestion();
}

function setNumber1(){
  if ( a == 2 ){
    true2();
    }
  else if ( a == 5 ){
    true5();
    }
  else {
    false1();
    firstQuestion();
  }
}

function setNumber2(){

  if ( a == 1 ){
    true1();
  }

  else if ( a == 4 ){
    true4();
  }

  else if ( a == 8 ){
    true8();
  }

  else {
    false1();
    firstQuestion();
  }
}

function setNumber3(){
  if ( a == 3 ){
    true3();
   }
  else if ( a == 7 ){
    true7();
   }
  else {
    false1();
    firstQuestion();
  }
  }

function setNumber4(){
  if ( a == 6 ){
    true6();
  }

  else if ( a == 9 ){
    true9();
   }

  else if ( a == 10 ){
    congratz();
   }

  else {
    false1();
    firstQuestion();
  }
 }

function firstQuestion(){
  a = 1;
  document.getElementById("z").value = "Question 1, who is the founder of computer?";
  document.getElementById("a").value = "Augusta Ada Lovelace";
  document.getElementById("b").value = "Charles Babbage";
  document.getElementById("c").value = "Bill Gates";
  document.getElementById("d").value = "Steve Jobs";
}

function true1(){
  a = 2;
  document.getElementById("z").value = "Question 2, which of the following flower doesn't exist?";
  document.getElementById("a").value = "Poffy";
  document.getElementById("b").value = "Rose";
  document.getElementById("c").value = "Ren";
  document.getElementById("d").value = "Bluebell";
}

function true2(){
  a = 3;
  document.getElementById("z").value = "Question 3, which company in below doesn't produce processors?";
  document.getElementById("a").value = "IBM";
  document.getElementById("b").value = "Intel";
  document.getElementById("c").value = "Apple Co.";
  document.getElementById("d").value = "Marvell";
}

function true3(){
  a = 4;
  document.getElementById("z").value = "Question 4, which of the operation below is correct?";
  document.getElementById("a").value = "1 Terrabyte = 1e+11 bytes";
  document.getElementById("b").value = "1 Kilobyte = 800 bits";
  document.getElementById("c").value = "1 Gigabyte = 1048576 bytes";
  document.getElementById("d").value = "1 Byte = 10 bits";
}

function true4(){
  a = 5;
  document.getElementById("z").value = "Question 5, which Operating Software ( OS ) doesn't exist?";
  document.getElementById("a").value = "Knopiz";
  document.getElementById("b").value = "Kubuntu";
  document.getElementById("c").value = "Window";
  document.getElementById("d").value = "UNIX";
}

function true5(){
  a = 6;
  document.getElementById("z").value = "Question 6, which is the real file format for video.";
  document.getElementById("a").value = ".mp3";
  document.getElementById("b").value = ".wmf";
  document.getElementById("c").value = ".ava";
  document.getElementById("d").value = ".gif";
}

function true6(){
  a = 7;
  document.getElementById("z").value = "Question 7, which one is not in the motherboard?";
  document.getElementById("a").value = "Random-Access Memory";
  document.getElementById("b").value = "HDD";
  document.getElementById("c").value = "SDD";
  document.getElementById("d").value = "Sound card";
}

function true7(){
  a = 8;
  document.getElementById("z").value = "Question 8, which protocol is real?";
  document.getElementById("a").value = "Transfer Network Protocol";
  document.getElementById("b").value = "Internet Protocol";
  document.getElementById("c").value = "HyperText Protocol (Secure)";
  document.getElementById("d").value = "File Network Protocol";
}

function true8(){
  a = 9;
  document.getElementById("z").value = "Question 9, which command is not exist in Linux terminal?";
  document.getElementById("a").value = "mkdir";
  document.getElementById("b").value = "ls -a";
  document.getElementById("c").value = "cd";
  document.getElementById("d").value = "dir";
}

function true9(){
  a = 10;
  document.getElementById("z").value = "Question 10, who is the one who create this quiz?";
  document.getElementById("a").value = "Me of course";
  document.getElementById("b").value = "Creator?";
  document.getElementById("c").value = "Wong???";
  document.getElementById("d").value = "Claush???";
}

function congratz(){
  document.write("Congratz for winning this quiz. It is not an actual quiz but yeah... I hope you have fun. XD. See you on next quiz XD");
}
