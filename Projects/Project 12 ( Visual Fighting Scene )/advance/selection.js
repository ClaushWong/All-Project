function selection(){
	var a = prompt("Please select options: 1.Attack  2.Defend  3.Run  4.Check Status");
	if ( a == 1 ){
		var b = prompt("Please select which attack you want to use: 1.Physical  2.Skill");
		if ( b == 1 ){
			PhyFight();
			userDealDamageWithoutBuff();
		}
		else if ( b == 2 ){
			var c = prompt("Please select your skill: 1.Fyra  2.Aqua  3.Terra  4.Acid");
			if ( c == 1 ){
				user.stats = fire;
				if ( user.stats == trueEnemy.stats ){
					nullify();
					userDealDamageWithoutBuff();
				}
				else if ( user.stats != trueEnemy.stats && trueEnemy.stats == "Water" ){
					weak();
					userDealDamageWithoutBuff();
				}
				else if ( user.stats != trueEnemy.stats && trueEnemy.stats == "Terra" ){
					strong();
					userDealDamageWithoutBuff();
				}
				else {
					alert("Error Occur.");
				}
			}
			else if ( c == 2 ){
				user.stats = water;
				if ( user.stats == trueEnemy.stats ){
					nullify();
					userDealDamageWithoutBuff();
				}
				else if ( user.stats != trueEnemy.stats && trueEnemy.stats == "Terra" ){
					weak();
					userDealDamageWithoutBuff();
				}
				else if ( user.stats != trueEnemy.stats && trueEnemy.stats == "Fire" ){
					strong();
					userDealDamageWithoutBuff();
				}
				else {
					alert("Error Occur.");
				}
			}
			else if ( c == 3 ){
				user.stats = terra;
				if ( user.stats == trueEnemy.stats ){
					nullify();
					userDealDamageWithoutBuff();
				}
				else if ( user.stats != trueEnemy.stats && trueEnemy.stats == "Fire" ){
					weak();
					userDealDamageWithoutBuff();
				}
				else if ( user.stats != trueEnemy.stats && trueEnemy.stats == "Water" ){
					strong();
					userDealDamageWithoutBuff();
				}
				else {
					alert("Error Occur.");
				}
			}
			else if ( c == 4 ){
				alert("Player use Acid.");
				trueEnemy.condition.poison = true;
				counter2 = 3;
				alert("Enemy is poisoned.");
				userDealDamageWithoutBuff();
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
	
	conditionB();
	conditionA();
}