//GAME

var game = new Phaser.Game(600, 600 , Phaser.AUTO, null, 'gameDiv' );

//Add Gamestates

this.game.state.add('boot', bootState);
this.game.state.add('load', loadState);
this.game.state.add('title', titleState);
this.game.state.add('play', playState);
this.game.state.add('customClasses', customClasses);

//make it boot
this.game.state.start('boot');

