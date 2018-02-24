//Start game ( start )
alert("This game require player to type in either 1,2,3 or 4 based on your action. Fail to execute command end with your HP decrease.");
var d = confirm("By pressing 'ok', you agree to the game rule. Have fun.");
if ( d == true ){
	selection();
}
else {
	alert("Please refresh this page to play this game. Thank you.");
}
//Start game ( end )


function PhyFight(){
	physicalDmg();
	userDealDamageWithoutBuff();
	checkAllHP();
}

function defend(){
	alert("Player is in defend mode.");
	buffRatio = Math.random() * 2 + 1;
	userDealDamageWithBuff();
	checkUserHP();
}

function checkAllHP(){
	if ( trueEnemy.HP <= 0 ){
		if ( user.HP <= 0 ){
			tie();
		}
		else {
			winScene();
		}
	}
	else if ( user.HP <= 0 ){
		loseScene();
	}
	else {
		selection();
	}
}

function userRun(){
	if ( trueEnemy.HP < ( trueEnemy.HP / 2 ) ){
		alert("Player manage to run away. What a coward. Thanks for playing this game.");
	}
	else {
		alert("Player fail to run away.");
		userDealDamageWithoutBuff();
		checkUserHP();
	}
}

function userFailToExecute(){
	alert("Player fail to execute the command.");
	userDealDamageWithoutBuff();
	checkUserHP();
}

function nullify(){
	alert("Player use " + user.stats + " magic to attack enemy. It doesn't deal any damage to enemy.");
	userDealDamageWithoutBuff();
	checkUserHP();
}

function weak(){
	alert("Player use " + user.stats + " magic to attack enemy. It is not effective.");
	weakDmg();
	userDealDamageWithoutBuff();
	checkAllHP();
}

function strong(){
	alert("Player use " + user.stats + " magic to attack enemy. It is super effective.");
	strongDmg();
	userDealDamageWithoutBuff();
	checkAllHP();
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