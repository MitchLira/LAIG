function MyBoardGame(scene) {
 	CGFobject.call(this,scene);
	
	this.cylinders =new MyBoardCylinder(scene);
	this.bridges = new MyBoardBridges(scene);
	this.crosses = new MyBoardCrossBridges(scene);
	this.plane = new MyPlane(scene, 18, 18, 9, 9);
	
 };

MyBoardGame.prototype = Object.create(CGFobject.prototype);
MyBoardGame.prototype.constructor = MyBoardGame;


MyBoardGame.prototype.display = function(){

	
	this.scene.pushMatrix();
		this.scene.translate(0,-0.5,0);
		this.cylinders.display();
		this.bridges.display();
		this.crosses.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,-0.5,0);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,-0.5,0);
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.plane.display();
	this.scene.popMatrix();
};