//Mod by gerdus4898 

//Define all we need
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
    
  }
}


//minion spawning system
