var user = [];
user.HP = 5000;
user.def = 50;
user.baseDmg = 250;
user.baseMgk = 300;
//user.baseMagic = "null";

var enemy = [];
enemy.HP = 2500;
enemy.def = 25;
enemy.baseDmg = 125;
enemy.baseMgk = 150;
//enemy.baseMagic = "Water";

alert("This game require player to type in either 1,2,3 or 4 based on your action. Fail to execute command end with your HP decrease.");
var d = confirm("By pressing 'ok', you agree to the game rule. Have fun.");
if ( d == true ){
	selection();
}
else {
	alert("Please refresh this page to play this game. Thank you.");
}

function selection(){
	var a = prompt("Please select options: 1.Attack  2.Defend  3.Run  4.Check Status");

	if ( a == 1 ){
		var b = prompt("Please select which attack you want to use: 1.Physical  2.Magic");
		if ( b == 1 ){
			alert("Player deal damage to enemy.");
			enemy.HP -= ( user.baseDmg - enemy.def );
			alert("Enemy attack player.");
			user.HP -= ( enemy.baseDmg - user.def );
			if ( enemy.HP <= 0 ){
				if ( user.HP <= 0 ){
					tie();
				}
				else{
					winScene();
				}
			}
			else {
				selection();
			}
		}
		else if ( b == 2 ){
			var c = prompt("Please select your magic-type attack: 1.Fire  2.Water  3.Terra");
			if ( c == 1 ){
				alert("Player use fire magic to attack enemy. It is not effective.");
				enemy.HP -= ( ( user.baseMgk / 2 ) - enemy.def );
				alert("Enemy enraged and deal heavy magic damage to player.");
				user.HP -= ( ( Math.floor( enemy.baseMgk * 1.5 ) ) - user.def );
				if ( enemy.HP <= 0 ){
					if ( user.HP <= 0 ){
						tie();
					}
					else{
						winScene();
					}
				}	
				else {
					selection();
				}
			}
			else if ( c == 2 ){
				alert("Player use water magic to attack enemy. Sadly, it doesn't damage enemy.");
				alert("Enemy use water magic to attack enemy. It deal damage to player.");
				user.HP -= ( enemy.baseMgk - user.def );
				if ( enemy.HP <= 0 ){
					if ( user.HP <= 0 ){
						tie();
					}
					else{
						winScene();
					}
				}
				else {
					selection();
				}
			}
			else if ( c == 3 ){
				alert("Player use terra magic to attack enemy. It is super effective.");
				enemy.HP -= ( Math.floor( user.baseMgk * 1.5 ) - enemy.def );
				alert("Enemy deal damage to player.");
				user.HP -= ( enemy.baseDmg - user.def );
				if ( enemy.HP <= 0 ){
					if ( user.HP <= 0 ){
						tie();
					}
					else{
						winScene();
					}
				}
				else {
					selection();
				}
			}
			else {
				alert("Player fail to execute command. Player was attacked by enemy.");
				user.HP -= ( enemy.baseDmg - user.def );
				if ( user.HP <= 0 ){
					loseScene();
				}
				else{
					selection();
				}
			}
		}
		else {
			alert("Player fail to execute command. Player was attacked by enemy.");
			user.HP -= ( enemy.baseDmg - user.def );
			if ( user.HP <= 0 ){
				loseScene();
			}
			else{
				selection();
			}
		}
	}	
	else if ( a == 2 ){
		alert("Player is in defend mode.");
		user.def += 25;
		alert("Player taken damage.");
		user.HP -= ( enemy.baseDmg - user.def );
		user.def -= 25;
		if ( user.HP <= 0 ){
			loseScene();
		}
		else{
			selection();
		}
	}
	else if ( a == 3 ){
		alert("Player tried to run, but failed.");
		selection();
	}
	else if ( a == 4 ){
		alert("Player health = " + user.HP + " . Enemy health = " + enemy.HP + " .");
		selection();
	}
	else{
		alert("Player fail to execute command. Player damaged by enemy.");
		user.HP -= ( enemy.baseDmg - user.def );
		if ( user.HP <= 0 ){
			loseScene();
		}
		else{
			selection();
		}
	}
}

function winScene(){
	alert("Congratulation, you have defeated the enemy. Thank you for playing.");
}

function loseScene(){
	alert("How dare you lost to enemy that is half of your power. I feel shame to you. By the way, thanks for playing this game.");
}

function tie(){
	alert("You and enemy retreat and promise to battle again. Good ending right? By the way, thanks for playing this game.");
}