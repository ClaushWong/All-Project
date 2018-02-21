var a = [];
a[0] = [1,1]; 
var b = 0;

for ( var x = 1 ; x < 63 ; x++ ){
	a[x] = [ x+b+1 , x+b+2 ];
	b++;
	console.log(a[x]);
}