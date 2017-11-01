//LOAD

var loadState = {
	preload: function(){

		//load images
		this.load.image('background', 'Assets/background.jpg');
		this.load.image('player', 'Assets/space_marine.png');
		this.load.image('ghost', 'Assets/ghost.png');
		this.load.image('bullet', 'Assets/bullet.png');
		this.load.image('bullet2', 'Assets/bullet2.png');
		this.load.image('powerup', 'Assets/powerup.png');
		
	},

	create: function(){

		//loading screen
		
	},

	update: function(){

		//start menu
			this.game.state.start('title');
		

	}

};