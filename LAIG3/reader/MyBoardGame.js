function MyBoardGame(scene) {
 	CGFobject.call(this,scene);
	
	this.cylinders =new MyBoardCylinder(scene);
	this.bridges = new MyBoardBridges(scene);
	this.crosses = new MyBoardCrossBridges(scene);
	this.plane = new MyPlane(scene, 18, 18, 9, 9);

	this.darkerpurple = new CGFappearance(scene);
	this.darkerpurple.setAmbient(51/255,6/255,95/255,1);
	this.purple = new CGFappearance(scene);
 	this.purple.setAmbient(0.53,0.12,0.94,1);

 };

MyBoardGame.prototype = Object.create(CGFobject.prototype);
MyBoardGame.prototype.constructor = MyBoardGame;


MyBoardGame.prototype.display = function(){
	
	this.scene.pushMatrix();
		this.scene.translate(0,-0.5,0);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.purple.apply();
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,-0.5,0);
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.plane.display();
	this.scene.popMatrix();

		
	this.scene.pushMatrix();
		this.scene.translate(0,-0.5,0);
		this.darkerpurple.apply();
		this.cylinders.display();
		this.bridges.display();
		this.crosses.display();
	this.scene.popMatrix();
};