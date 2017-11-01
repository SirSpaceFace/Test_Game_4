//CUSTOM
var customClasses = {

	//create enemy
	Enemy: function(health, x, y){

		var enemy = this.game.add.sprite(x,y,'ghost');
		enemy.scale.setTo(0.04);
		this.game.physics.enable(enemy);
		enemy.body.collideWorldBounds = true;
		enemy.body.allowGravity = false;

		enemy.health = health;

		return enemy;
	},

	//create player
	Player: function(){

		var player = this.game.add.sprite(100,410,'player');
		player.scale.setTo(0.3);
		this.game.physics.enable(player);
		player.body.collideWorldBounds = true;
		player.hitPoints = this.hitPoints;

		return player;
	},

	PowerUp: function(power){

		var powerup = this.game.add.sprite(Math.floor((Math.random() * 600) + 10), Math.floor((Math.random() * 600) + 10), 'powerup');
		powerup.scale.setTo(0.15);
		this.game.physics.enable(powerup);
		powerup.body.allowGravity = false;

		powerup.power = power;

		return powerup;
	}
/*
	//bullet
	Bullet: function(){

		var bullet = this.game.add.sprite('bullet');
		bullet.scale.setTo(0.05);
		this.game.physics.enable(bullet);
		bullet.body.collideWorldBounds = true;
		bullet.body.allowGravity = false; 

		return bullet;

	}

*/

};


