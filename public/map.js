function Map(){
	this.floorHeight = Math.floor(Math.random() * 20) + 400;
	this.array = [];

	this.update = function(){
    	loadPixels();
    	for(var j = 0; j<width; j++){
    	    for(var i = 0; i<height; i++){
    	        index = (j + width*i)*4;
    	        pixels[index+0] = this.array[j][i][0];
    	        pixels[index+1] = this.array[j][i][1];
    	        pixels[index+2] = this.array[j][i][2];
    	        pixels[index+3] = this.array[j][i][3];
	
	    	    }
	    	}
    	updatePixels();
	}
	
	this.build = function(){
 	   loadPixels();
 	   for(var j = 0; j<width; j++){
 	       this.array[j] = new Array(width);
 	       for(var i=0; i<height; i++){
 	           	this.array[j][i] = new Array(4);
 	           	index = (j + width*i)*4;
 	           	if(i>=this.floorHeight-4&&i<=this.floorHeight+4){
 	               pixels[index+0]= 0;
 	               pixels[index+1]= 0;
 	               pixels[index+2]= 0;
 	               pixels[index+3]= Math.floor(Math.random() * 40)+120;;
	 	           this.array[j][i]=[pixels[index+0],pixels[index+1],pixels[index+2],pixels[index+3]];
	 	        }
	 	        else if(i>=this.floorHeight-8&&i<=this.floorHeight+8){
	 	            pixels[index+0]= 0;
	 	            pixels[index+1]= 0;
	 	            pixels[index+2]= 0;
	 	            pixels[index+3]= Math.floor(Math.random() * 40)+180;
	 	            this.array[j][i]=[pixels[index+0],pixels[index+1],pixels[index+2],pixels[index+3]];
	 	        } else {
	 	            pixels[index+0]= 0;
	 	            pixels[index+1]= 0;
	 	            pixels[index+2]= Math.floor(Math.random() * 50)+150;
	 	            pixels[index+3]= 255;
	 	            this.array[j][i]=[pixels[index+0],pixels[index+1],pixels[index+2],pixels[index+3]]
	 	        }
	 	    }
	 	}
 	   	updatePixels();
	}
}