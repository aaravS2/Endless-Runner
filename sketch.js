var gameState,game,bg,button,bg1;

function setup() {
  createCanvas(1290,700);
  gameState='instructions'
  game=new Game();
 
  game.instructions();
 
  
  
  // put setup code here
}
// function prelod(){
  
// }
function draw() {
    //background('orange')
    // image(bg1,645,350,1290,700)
   
  
  // put drawing code here
  if (button.mousePressed(function(){
    gameState='play'
    game.Run()
   
  })) {
   
  }
 
  
 
  
  //console.log(camera.position.x)
  drawSprites()
}
 
  
