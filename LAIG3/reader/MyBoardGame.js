function MyBoardGame(scene) {
 	CGFobject.call(this,scene);
	
	this.cylinders =new MyBoardCylinder(scene);
	this.bridges = new MyBoardBridges(scene);
	this.crosses = new MyBoardCrossBridges(scene);
 };

MyBoardGame.prototype = Object.create(CGFobject.prototype);
MyBoardGame.prototype.constructor = MyBoardGame;


MyBoardGame.prototype.display = function(){
	this.scene.pushMatrix();
		this.cylinders.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.crosses.display();
	this.scene.popMatrix();


};