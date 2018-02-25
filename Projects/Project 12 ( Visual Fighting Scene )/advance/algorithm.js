function userDealDamageWithoutBuff(){
	if ( trueEnemy.stats != "null" ){
		rng = Math.floor(Math.random() * 5 );
		if ( rng == 0 ){
			alert("Player attacked by enemy.");
			user.HP -= Math.abs(( trueEnemy.baseDmg - user.baseDef ));
		}
		else if ( rng == 1 ){
			alert("Enemy deal critical damage to player.");
			critRatio = Math.random() * 2 + 1;
			user.HP -= Math.abs(Math.floor( ( trueEnemy.baseDmg * critRatio ) - user.baseDef ));
		}
		else if ( rng == 2 ){
			alert("Enemy cast magic attack to player.");
			user.HP -= Math.abs(( trueEnemy.mgkDmg - user.mgkDef ));
		}
		else if ( rng == 3 ){
			alert("Enemy cast magic attack to player. It's a critical hit.");
			critRatio = Math.random() * 2 + 1;
			user.HP -= Math.abs(Math.floor( ( trueEnemy.mgkDmg * critRatio ) - user.mgkDef ));
		}
		else if ( rng == 4 ){
			alert("Enemy cast Acid to player.");
			counter1 = 3;
			alert("Player is poison.");
		}
		else {
			alert("There is an error.");
		}
	}
	else {
		rng = Math.floor(Math.random() * 2 );
		if ( rng == 0 ){
			alert("Player attacked by enemy.");
			user.HP -= Math.abs(( trueEnemy.baseDmg - user.baseDef ));
		}
		else if ( rng == 1 ){
			alert("Enemy deal critical damage to player.");
			critRatio = Math.random() * 2 + 1;
			user.HP -= Math.abs(Math.floor( ( trueEnemy.baseDmg * critRatio ) - user.baseDef ));
		}
		else {
			alert("There is an error.");
		}
	}
}

function userDealDamageWithBuff(){
	if ( trueEnemy.stats != "null" ){
		rng = Math.floor(Math.random() * 5 );
		if ( rng == 0 ){
			alert("Player attacked by enemy.");
			user.HP -= Math.abs(( trueEnemy.baseDmg - ( user.baseDef * buffRatio ) ));
		}
		else if ( rng == 1 ){
			alert("Enemy deal critical damage to player.");
			critRatio = Math.random() * 2 + 1;
			user.HP -= Math.abs( Math.floor( ( trueEnemy.baseDmg * critRatio ) - ( user.baseDef * buffRatio ) ) );
		}
		else if ( rng == 2 ){
			alert("Enemy cast magic attack to player.");
			user.HP -= Math.abs(( trueEnemy.mgkDmg - user.mgkDef ));
		}
		else if ( rng == 3 ){
			alert("Enemy cast magic attack to player. It's a critical hit.");
			critRatio = Math.random() * 2 + 1;
			user.HP -= Math.abs(Math.floor( ( trueEnemy.mgkDmg * critRatio ) - user.mgkDef ));
		}
		else if ( rng == 4 ){
			alert("Enemy cast Acid to player.");
			counter1 = 3;
			alert("Player is poison.");
		}
		else {
			alert("There is an error.");
		}
	}
	else {
		rng = Math.floor(Math.random() * 2 );
		if ( rng == 0 ){
			alert("Player attacked by enemy.");
			user.HP -= Math.abs(( trueEnemy.baseDmg - ( user.baseDef * buffRatio ) ));
		}
		else if ( rng == 1 ){
			alert("Enemy deal critical damage to player.");
			critRatio = Math.random() * 2 + 1;
			user.HP -= Math.abs( Math.floor( ( trueEnemy.baseDmg * critRatio ) - ( user.baseDef * buffRatio ) ) );
		}
		else {
			alert("There is an error.");
		}
	}
}

function checkUserHP(){
	if ( user.HP <= 0 ){
		loseScene();
	}
	else {
		selection();
	}
}

function physicalDmg(){
	rng = Math.floor(Math.random() * 2 );
	if ( rng == 0 ){
		alert("Player attack enemy.");
		trueEnemy.HP -= Math.abs(( user.baseDmg - trueEnemy.baseDef ));
	}
	else if ( rng == 1 ){
		alert("Player deal critical damage to enemy.");
		critRatio = Math.random() * 2 + 1;
		trueEnemy.HP -= Math.abs(Math.floor( ( user.baseDmg * critRatio ) - trueEnemy.baseDef ));
		}
	else {
		alert("There is an error.");
	}	
}	


function weakDmg(){
	trueEnemy.HP -= Math.abs( ( user.mgkDmg * 0.5 ) - trueEnemy.mgkDef );
}

function strongDmg(){
	trueEnemy.HP -= Math.abs( ( user.mgkDmg * 1.5 ) - trueEnemy.mgkDef );
}