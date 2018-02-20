var arr = [];
var val = [];;

for (  var i = 0 ; i < 10000 ; i++ ){
	if ( i < 10 ){
		arr[i]= "000" + i ;
	}
	else if ( i > 9 && i < 100 ){
		arr[i] = "00" + i ;
	}
	else if ( i > 99 && i < 1000 ){
		arr[i] = "0" + i ;
	}
	else if ( i > 999 && i < 10000){
		arr[i] = i ;
	}
	else {
	console.log("Error occur");
	}
}

for ( var j = 0 ; j < 31 ; j++ ){
	val[j] = arr[Math.floor(Math.random() * 10000)];
}	

function getNumber(){
	for( var a = 1 ; a < 32 ; a++ ){
		document.getElementById(a).value = val[a-1];
	}
}