//PLAY
var playerSpeed = 20; 
var bulletDamage = 10;

var playState = {

	create: function(){

		//enable gravity & import keyboard
		this.game.physics.arcade.gravity.y = 2000; 
		cursors = game.input.keyboard.createCursorKeys();

		//background
		this.background = this.game.add.sprite(0,0,'background');
		this.background.scale.setTo(1.2);

		//enemy
		this.enemy = customClasses.Enemy(100,400,400);

		//player
		this.player = customClasses.Player();

		//bullets
		bullets = this.game.add.group();
		bullets.enableBody = true;
		bullets.physicsBodyType = Phaser.Physics.ARCADE;
		bullets.createMultiple(100, 'bullet');
		bullets.callAll('anchor.setTo', 'anchor', 0.5, 1.0);
		bullets.callAll('scale.setTo', 'scale', 0.05);

		//powerup
		//this.powerup = customClasses.PowerUp(10);
		this.powerup = this.createPowerup();

		//enemy health display
	    this.nameLabel = game.add.text(150 ,50, 'Enemy: ' + this.enemy.health, {
			font: '50px Space Mono', fill: '#ffffff'
		});

	},


	update: function(){

		//collision
		this.game.physics.arcade.collide(this.player, this.enemy);
		this.game.physics.arcade.overlap(bullets, this.enemy, this.collisionHandler1, null, this);
		this.game.physics.arcade.overlap(this.player, this.powerup, this.collisionHandler2, null, this);
	
		//move player
		if(cursors.left.isDown){
			this.player.body.velocity.x -= playerSpeed;
		}else if(cursors.right.isDown){
			this.player.body.velocity.x += playerSpeed;
		}else{
			this.player.body.velocity.setTo(0);
		}

		//fire
			// Loop over the keys
			for (var index in phaserKeys) {
			// Save a reference to the current key
			var key = phaserKeys[index];
			// If the key was just pressed, fire a laser
			if (key.justDown) {
				this.fireBullet();
				}
		}
	},

	//initialize buttons
	init: function() {

		// Listen to space & enter keys
		var keys = [Phaser.KeyCode.SPACEBAR];
		// Create Phaser.Key objects for listening to the state
		phaserKeys = game.input.keyboard.addKeys(keys);
		// Capture these keys to stop the browser from receiving this event
		game.input.keyboard.addKeyCapture(keys);
	},

	//touchdown to true
	touchDown: function(){

		mouseTouchDown = true;
		this.fireBullet();
	},

	//touchdown to false
	touchUp: function(){

		mouseTouchDown = false;

	},

	//fire a bullet
	fireBullet: function(){

		this.bullet = bullets.getFirstExists(false);
			if(this.bullet){
				this.bullet.body.allowGravity = false;
				this.bullet.reset(this.player.x + 165 , this.player.y +50);
				this.bullet.body.velocity.x += 500;
			}

	},

	//what happens if enemy & player collide
	collisionHandler1: function(bullet,enemy){

		this.bullet.kill();
		if(this.enemy.health > 0){
				this.enemy.health -= bulletDamage;
				this.nameLabel.text = 'Enemy: ' + this.enemy.health;

		}
		if(this.enemy.health == 0){
						this.nameLabel.text = 'He is dead!';
						this.enemy.kill();
				}
			},

	//what happens if player & powerup collide
	collisionHandler2: function(player, powerup){
			this.powerup.kill();
			bulletDamage = bulletDamage + this.powerup.power;
			bullets = this.game.add.group();
			bullets.enableBody = true;
			bullets.physicsBodyType = Phaser.Physics.ARCADE;
			bullets.createMultiple(100, 'bullet2');
			bullets.callAll('anchor.setTo', 'anchor', 0.5, 1.0);
			bullets.callAll('scale.setTo', 'scale', 0.075);
	},

	//create powerup
	createPowerup: function(){

		var powerup = customClasses.PowerUp(10);
		this.game.time.events.add(Phaser.Timer.SECOND * game.rnd.integerInRange(1, 10), this.createPowerup, this);

		return powerup;
	}
};

