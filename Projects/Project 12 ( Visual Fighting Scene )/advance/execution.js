//Start game ( start )
alert("This game require player to type in either 1,2,3 or 4 based on your action. Fail to execute command end with your HP decrease.");
var d = confirm("By pressing 'ok', you agree to the game rule. Have fun.");
if ( d == true ){
	alert("An enemy has appear.");
	selection();
}
else {
	alert("Please refresh this page to play this game. Thank you.");
}
//Start game ( end )


function PhyFight(){
	physicalDmg();
}

function defend(){
	alert("Player is in defend mode.");
	buffRatio = Math.random() * 2 + 1;
	userDealDamageWithBuff();
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
	}
}

function userFailToExecute(){
	alert("Player fail to execute the command.");
	userDealDamageWithoutBuff();
}

function nullify(){
	alert("Player use " + user.stats + " magic to attack enemy. It doesn't deal any damage to enemy.");
}

function weak(){
	alert("Player use " + user.stats + " magic to attack enemy. It is not effective.");
	weakDmg();
}

function strong(){
	alert("Player use " + user.stats + " magic to attack enemy. It is super effective.");
	strongDmg();
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

function conditionA(){
	if ( user.condition.poison == true ){
		user.HP -= 250;
		counter1--;
	}
	else if ( trueEnemy.condition.poison == true ){
		trueEnemy.HP -= 1000;
		alert("Enemy damaged due to poison.");
		counter2--;
	}
	else {
		
	}
	checkAllHP();
}

function conditionB(){
	if ( counter2 == 0 ) {
		alert("Enemy's poison effect wore off.");
		trueEnemy.condition.poison = false;
	}
	else if ( counter1 == 0 ){
		alert("Player's poison effect wore off.");
		user.condition.poison = false;
	}
	else {
		
	}
}