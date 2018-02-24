var fire = "Fire";
var water = "Water";
var terra = "Terra";
var rng;
var critRatio;
var buffRatio;

var user = [];
user.HP = 5000;
user.baseDmg = 1000;
user.mgkDmg = 1500;
user.baseDef = 500;
user.mgkDef = 600;
user.stats = null;

var enemy1 = [];
enemy1.HP = 25000;
enemy1.baseDmg = 150;
enemy1.mgkDmg = 200;
enemy1.baseDef = 200;
enemy1.mgkDef = 300;
enemy1.stats = fire;

var enemy2 = [];
enemy2.HP = 23000;
enemy2.baseDmg = 150;
enemy2.mgkDmg = 200;
enemy2.baseDef = 200;
enemy2.mgkDef = 300;
enemy2.stats = water;

var enemy3 = [];
enemy3.HP = 24000;
enemy3.baseDmg = 150;
enemy3.mgkDmg = 200;
enemy3.baseDef = 200;
enemy3.mgkDef = 300;
enemy3.stats = terra;

var enemies = [];
enemies[0] = enemy1;
enemies[1] = enemy2;
enemies[2] = enemy3;

var trueEnemy = enemies[Math.floor(Math.random() * 3)];
