 function MyBoardCylinder(scene) {
 	CGFobject.call(this,scene);
	
	this.cylinder = MyCylinder(scene, 1, 1, 1, 10, 10);

	
 };

MyBoardCylinder.prototype = Object.create(CGFobject.prototype);
MyBoardCylinder.prototype.constructor = MyBoardCylinder;


MyBoardCylinder.prototype.display = function(){
	this.scene.pushMatrix();
		this.scene.translate(0, 0, 1);
		
	this.scene.popMatrix();
};

	