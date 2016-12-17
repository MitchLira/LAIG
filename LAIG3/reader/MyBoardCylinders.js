 function MyBoardCylinder(scene) {
 	CGFobject.call(this,scene);
	
	this.cylinder =new MyCylinder(scene, 0.5, 0.5, 1, 10, 10);
	
 };

MyBoardCylinder.prototype = Object.create(CGFobject.prototype);
MyBoardCylinder.prototype.constructor = MyBoardCylinder;


MyBoardCylinder.prototype.display = function(){

	//first row
	this.scene.pushMatrix();
		this.scene.translate(-8, 0.5,-8);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-6, 0.5,-8);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-4, 0.5,-8);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-2, 0.5,-8);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0, 0.5,-8);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2, 0.5,-8);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4, 0.5,-8);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(6, 0.5,-8);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(8, 0.5,-8);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();
	
	//second row

	this.scene.pushMatrix();
		this.scene.translate(-8, 0.5,-6);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-6, 0.5,-6);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-4, 0.5,-6);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-2, 0.5,-6);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0, 0.5,-6);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2, 0.5,-6);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4, 0.5,-6);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(6, 0.5,-6);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(8, 0.5,-6);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	//third row

	this.scene.pushMatrix();
		this.scene.translate(-8, 0.5,-4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-6, 0.5,-4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-4, 0.5,-4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-2, 0.5,-4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0, 0.5,-4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2, 0.5,-4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4, 0.5,-4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(6, 0.5,-4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(8, 0.5,-4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

		//third row

	this.scene.pushMatrix();
		this.scene.translate(-8, 0.5,-4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-6, 0.5,-4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-4, 0.5,-4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-2, 0.5,-4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0, 0.5,-4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2, 0.5,-4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4, 0.5,-4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(6, 0.5,-4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(8, 0.5,-4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();	

	//fourth row

	this.scene.pushMatrix();
		this.scene.translate(-8, 0.5,-2);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-6, 0.5,-2);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-4, 0.5,-2);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-2, 0.5,-2);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0, 0.5,-2);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2, 0.5,-2);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4, 0.5,-2);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(6, 0.5,-2);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(8, 0.5,-2);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	//fifth row

	this.scene.pushMatrix();
		this.scene.translate(-8, 0.5,0);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-6, 0.5,0);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-4, 0.5,0);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-2, 0.5,0);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0, 0.5,0);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2, 0.5,0);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4, 0.5,0);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(6, 0.5,0);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(8, 0.5,0);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

		//sixth row

	this.scene.pushMatrix();
		this.scene.translate(-8, 0.5,2);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-6, 0.5,2);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-4, 0.5,2);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-2, 0.5,2);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0, 0.5,2);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2, 0.5,2);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4, 0.5,2);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(6, 0.5,2);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(8, 0.5,2);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	//seventh row

	this.scene.pushMatrix();
		this.scene.translate(-8, 0.5,4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-6, 0.5,4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-4, 0.5,4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-2, 0.5,4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0, 0.5,4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2, 0.5,4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4, 0.5,4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(6, 0.5,4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(8, 0.5,4);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	//eighth row

	this.scene.pushMatrix();
		this.scene.translate(-8, 0.5,6);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-6, 0.5,6);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-4, 0.5,6);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-2, 0.5,6);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0, 0.5,6);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2, 0.5,6);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4, 0.5,6);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(6, 0.5,6);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(8, 0.5,6);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

		//ninth row

	this.scene.pushMatrix();
		this.scene.translate(-8, 0.5,8);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-6, 0.5,8);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-4, 0.5,8);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-2, 0.5,8);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0, 0.5,8);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2, 0.5,8);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4, 0.5,8);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(6, 0.5,8);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(8, 0.5,8);
		this.scene.scale(1,0.5,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.cylinder.display();
	this.scene.popMatrix();
	

};

	