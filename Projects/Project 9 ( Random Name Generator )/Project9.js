var name1 = [ "Aaron","Abdul","Brock","Bruno","Taylor","Desmond","Eddie","Sam","Oren","Zack"];
var name2 = ["Parker","Smith","Miller","Price","Poole","Jackson","Stone","Allen","Bradley","Watt"];

function nameGenerate(){
	var num1 = Math.floor( Math.random() * 9 );
	var num2 = Math.floor( Math.random() * 9 );
	
	var realName = name1[num1] + " " + name2[num2] ;
	document.getElementById("a").value = realName;
}