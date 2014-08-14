//Intialize Phaser Engine. create 400x490px. game!

var game = new Phaser.Game(400, 490, Phaser.AUTO,'gameDiv');
//create our 'main' state that will contian the game
//this is the body of the game itself
//it should contain all code related to the game itself

var mainState = {

  preload: function () {
  //This function will execute at the beginning
  //which is where we'll load our assets for the game  
  //set the background color of the game
  
  game.stage.backgroundColor = "#cee3f8";
  
  game.load.image('bird','assets/bird.png');
  
  game.load.image('pipe','assets/pipe.png');
 
 },
 
 
create: function() {
  //This is calles right after preload function 
  //this is where we set up the game assets from earlier
  
  game.physics.startSystem(Phaser.Physics.ARCADE);
  
  this.bird=this.game.add.sprite(100, 245, 'bird');
  
  //now that we have 'bird' and gravity... we need to tell the bird
  //to react to the gravity
  
  
  game.physics.arcade.enable(this.bird);
  
  this.bird.body.gravity.y = 1000;
  
 var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
 
 spaceKey.onDown.add(this.jump, this);
  
 },
 update: function () {
   //this function runs 60 times per second
   

//check if the bird is outside of game screen
if (this.bird.inWorld == false) {
  this.restartGame();
  }


},

jump: function () {
//let's make our bird jump!
this.bird.body.velocity.y = -350;  

},

 restartGame: function () {
   game.state.start('main');
 },    
 
};

//add and start the 'mainState' to start the game
game.state.add('main', mainState);
game.state.start('main');
