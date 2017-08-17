var maps = [];
var characters = [];
var mapCount = 0;
var mainChar = 0;
function setup(){
    maps[mapCount] = new Map();
    createCanvas(500, 500);
    pixelDensity(1);
    maps[mapCount].build();
    characters[mainChar] = new Player(Math.floor(Math.random() * 50)+150, 80);
    characters[1] = new Player(Math.floor(Math.random() * 50)+50, 40);
}
function enemyChase(i){
    var distance = Math.abs(characters[mainChar].xPos - characters[i].xPos);
    if(distance <=4){}
    else if(characters[i].xPos<characters[mainChar].xPos){
        characters[i].xPos++;
    }
    else if(characters[i].xPos>characters[mainChar].xPos){
        characters[i].xPos--;
    }
}



function draw(){
    maps[mapCount].update();
    characters[mainChar].moveDir();
    for(var i = 0; i < characters.length; i++){
        enemyChase(i);
        characters[i].move();
        characters[i].attack();
    }
    characters[mainChar].attackNpc();
}
function keyTyped(){

}
function keyPressed() {
    if(keyCode === UP_ARROW){
        characters[mainChar].speedY = -10;
    }
    if(keyCode === CONTROL){
        characters[mainChar].attackInit = 1;
    }
}
function gameMap(){
    

}