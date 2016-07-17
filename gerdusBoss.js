//Mod by gerdus4898 

//Define all we need
var minion;
var ticktoggler = false;
var tick;
var boss;
var bossExist = false;

//Custom snowball
ModPE.setItem(2500, "snowball", 0, "Dirty Snowball")


//When someone join a level
function newLevel(){
  clientMessage("Thank you for downloading gerdusBoss mod by gerdus4898");
  clientMessage("Checkout more of his creation on https://github.com/gerdus4898")
  ticktoggler=true;
}

//boss spawning system
function useItem(x, y, z, itemId, blockId){
  if(itemId==2500 && blockId==57){
    clientMessage("<Gerdus> : M..M..MY DIAMOND BLOCK!");
    clientMessage("<Gerdus> : WHY U TOUCH MY DIAMOND BLOCK WITH THAT DIRTY SNOWBALL!");
    clientMessage("<Gerdus> : NOW FEEL MY ANGER!!!!");
    var boss = Level.spawnMob(x,y,z, 32, EntityRenderType.zombie, mob/zombie.png);
    Entity.setNameTag(boss, "Gerdus");
    Entity.setHealth(boss, 100);
    Entity.setCarried(boss, 276);
    bossExist=true;
  }
}


//minion spawning system
var tick = 6000;
function modTick(){
  if(ticktoggler==true && bossExist=true){
    tick--;
  }
  if(tick==0){
    Level.spawnMob
  }
}
