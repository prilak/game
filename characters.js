function Player(xPos, yPos){
	this.xPos = xPos;
	this.yPos = yPos;
	this.mapPlaceHolder = [];
	this.health = 100;
	this.damage = 5;
	rect(xPos, yPos, 20, 20);
	this.speedY = 5;
	this.speedX = 0;
	this.xDir = 1;
	this.attackInit = 0;
	this.moveDir = function (){
    	if(keyIsDown(LEFT_ARROW)){
    	    this.speedX = -2;
    	    this.xDir = -1;
    	}
    	if(keyIsDown(RIGHT_ARROW)){
    	    this.speedX = 2;
    	    this.xDir = 1;
    	}
	}
	this.move = function(){
		this.moveX();
		this.moveY();
	}
	this.moveX = function(){
		if(this.xPos + this.speedX <= 0||this.xPos + 20 + this.speedX >= width){
			this.speedX = 0;
		}
		this.xPos += this.speedX;
		this.speedX = 0;
	}
	this.moveY = function(){
		if(this.speedY>0){
			this.speedY += 1;
			for(var i = 0; i < 20; i++){
				var xCheck = this.xPos + i; 
				for(var j = 0; j < this.speedY; j++){
					var yCheck = this.yPos + 20 + j;
					
					if(maps[0].array[xCheck][yCheck][3] >= 120 && maps[0].array[xCheck][yCheck][3] <= 160){
						this.speedY = j;
					}
				}
			}
			this.yPos += this.speedY;
			rect(this.xPos, this.yPos, 20, 20);
		} else {
			if(this.yPos + this.speedY <= 0){
				this.speedY = 0;
			}
			this.yPos += this.speedY;
			rect(this.xPos, this.yPos, 20, 20);
			this.speedY += 1;
		}
	}
	this.attack = function(){
		if(this.attackInit!=0){
			this.attackInit++;
			if(this.xDir==1){
				if(this.attackInit<10){
					rect(this.xPos+10, this.yPos+6, 25, 4);
				}
				else if(this.attackInit<20){
					rect(this.xPos+10, this.yPos+8, 30, 4);
				}
				else if(this.attackInit<25){
					rect(this.xPos+10, this.yPos+10, 190, 4);
				}
				else if(this.attackInit<35){
					rect(this.xPos+10, this.yPos+8, 30, 4);
				}
				else {
					this.attackInit = 0;
				}
			} else {
				if(this.attackInit<10){
					rect(this.xPos-15, this.yPos+6, 25, 4);
				}
				else if(this.attackInit<20){
					rect(this.xPos-20, this.yPos+8, 30, 4);
				}
				else if(this.attackInit<25){
					rect(this.xPos-170, this.yPos+10, 190, 4);
				}
				else if(this.attackInit<35){
					rect(this.xPos-20, this.yPos+8, 30, 4);
				}
				else {
					this.attackInit = 0;
				}
			}

		}

	}
 	this.attackNpc = function(){
    if(this.attackInit>20&&this.attackInit<25){
        for(var i = 1; i<characters.length; i++){
            var distance = this.xPos - characters[i].xPos;
            if(((distance < 190)&&(distance > 0)&&(this.xDir==-1))||((distance > -190)&&(distance < 0)&&(this.xDir==1))){
                characters[i].health -= this.damage;
                console.log(characters[i].health);
                if(characters[i].health<=0){
                 characters.splice(i,1); 
                }
            }
        }
    }
}
}