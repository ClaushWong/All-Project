var b = 0;
var arr = [];

for ( var a = 1 ; a < 16 ; a++ ){
	arr[a,1] = a + ( 1 + b );
	b++;
	arr[a,2] = a + ( 1 + b );
	console.log( a + arr );
}