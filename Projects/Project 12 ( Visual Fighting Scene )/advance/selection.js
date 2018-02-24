function selection(){
	var a = prompt("Please select options: 1.Attack  2.Defend  3.Run  4.Check Status");
	if ( a == 1 ){
		var b = prompt("Please select which attack you want to use: 1.Physical  2.Magic");
		if ( b == 1 ){
			PhyFight();
		}
		else if ( b == 2 ){
			var c = prompt("Please select your magic-type attack: 1.Fire  2.Water  3.Terra");
			if ( c == 1 ){
				user.stats = fire;
				if ( user.stats == trueEnemy.stats ){
					nullify();
				}
				else if ( user.stats != trueEnemy.stats && trueEnemy.stats == "Water" ){
					weak();
				}
				else if ( user.stats != trueEnemy.stats && trueEnemy.stats == "Terra" ){
					strong();
				}
				else {
					alert("Error Occur.");
				}
			}
			else if ( c == 2 ){
				user.stats = water;
				if ( user.stats == trueEnemy.stats ){
					nullify();
				}
				else if ( user.stats != trueEnemy.stats && trueEnemy.stats == "Terra" ){
					weak();
				}
				else if ( user.stats != trueEnemy.stats && trueEnemy.stats == "Fire" ){
					strong();
				}
				else {
					alert("Error Occur.");
				}
			}
			else if ( c == 3 ){
				user.stats = terra;
				if ( user.stats == trueEnemy.stats ){
					nullify();
				}
				else if ( user.stats != trueEnemy.stats && trueEnemy.stats == "Fire" ){
					weak();
				}
				else if ( user.stats != trueEnemy.stats && trueEnemy.stats == "Water" ){
					strong();
				}
				else {
					alert("Error Occur.");
				}
			}
			else {
				userFailToExecute();
			}
		}
		else {
			userFailToExecute();
		}
	}
	else if ( a == 2 ){
		defend();
	}
	else if ( a == 3 ){
		userRun();
	}
	else if ( a == 4 ){
		alert("Player health = " + user.HP + " . Enemy health = " + trueEnemy.HP + " .");
		selection();
	}
	else {
		alert("Please type in the real command.");
		selection();
	}
}