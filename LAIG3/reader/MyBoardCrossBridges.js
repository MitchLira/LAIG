function MyBoardCrossBridges(scene) {
 	CGFobject.call(this,scene);
	
	this.cross  = new MyCrossBridge(scene);
 };

MyBoardCrossBridges.prototype = Object.create(CGFobject.prototype);
MyBoardCrossBridges.prototype.constructor = MyBoardCrossBridges;


MyBoardCrossBridges.prototype.display = function(){
	//first row
	this.scene.pushMatrix();
		this.scene.translate(-8,0,-8);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-6,0,-8);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-4,0,-8);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-2,0,-8);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0,-8);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2,0,-8);
		this.cross.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(4,0,-8);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(6,0,-8);
		this.cross.display();
	this.scene.popMatrix();


	//second row
	this.scene.pushMatrix();
		this.scene.translate(-8,0,-6);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-6,0,-6);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-4,0,-6);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-2,0,-6);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0,-6);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2,0,-6);
		this.cross.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(4,0,-6);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(6,0,-6);
		this.cross.display();
	this.scene.popMatrix();

		//third row
	this.scene.pushMatrix();
		this.scene.translate(-8,0,-4);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-6,0,-4);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-4,0,-4);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-2,0,-4);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0,-4);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2,0,-4);
		this.cross.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(4,0,-4);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(6,0,-4);
		this.cross.display();
	this.scene.popMatrix();

	//fourth row
	this.scene.pushMatrix();
		this.scene.translate(-8,0,-2);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-6,0,-2);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-4,0,-2);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-2,0,-2);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0,-2);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2,0,-2);
		this.cross.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(4,0,-2);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(6,0,-2);
		this.cross.display();
	this.scene.popMatrix();
	
		//fifth row
	this.scene.pushMatrix();
		this.scene.translate(-8,0,0);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-6,0,0);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-4,0,0);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-2,0,0);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0,0);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2,0,0);
		this.cross.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(4,0,0);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(6,0,0);
		this.cross.display();
	this.scene.popMatrix();
	
			//sixth row
	this.scene.pushMatrix();
		this.scene.translate(-8,0,2);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-6,0,2);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-4,0,2);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-2,0,2);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0,2);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2,0,2);
		this.cross.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(4,0,2);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(6,0,2);
		this.cross.display();
	this.scene.popMatrix();
	
				//seventh row
	this.scene.pushMatrix();
		this.scene.translate(-8,0,4);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-6,0,4);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-4,0,4);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-2,0,4);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0,4);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2,0,4);
		this.cross.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(4,0,4);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(6,0,4);
		this.cross.display();
	this.scene.popMatrix();

	//eighth row
	this.scene.pushMatrix();
		this.scene.translate(-8,0,6);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-6,0,6);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-4,0,6);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-2,0,6);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0,6);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2,0,6);
		this.cross.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(4,0,6);
		this.cross.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(6,0,6);
		this.cross.display();
	this.scene.popMatrix();

};