class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();

    }
    Car1=createSprite(200,300,10,40);
    Car1.addImage(white);
    Car2=createSprite(400,300,10,40);
    Car2.addImage(red);
    Car3=createSprite(600,300,10,40);
    Car3.addImage(blue);
    Car4=createSprite(800,300,10,40);
    Car4.addImage(black);
    Cars=[Car1,Car2,Car3,Car4];
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();
    player.getCarsAtEnd();

    if(allPlayers !== undefined){
      background(track)
//image(track,0,-displayHeight*4,displayWidth,displayHeight)
      var index=0;

var x=175;
var y;
for (var plr in allPlayers){
  index=index+1;
  x=x+200;
  y= displayHeight-allPlayers[plr].distance;
  Cars[index-1].x=x;
  Cars[index-1].y=y;
  if(index===player.index){
    
    fill("pink")
    ellipse(x,y,100,100)
    camera.position.x=displayWidth/2;
    camera.position.y=Cars[index-1]
  }

}


    }
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();

    }

    if (player.distance>3860){
gameState=2;
player.rank+=1
Player.updateCarsAtEnd(player.rank);
    }
    drawSprites();
}
end(){
console.log("game ended ")

}
}

