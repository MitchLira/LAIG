function MyCube(scene) {
 	CGFobject.call(this,scene);
	this.plane = new MyPlane(scene, 1, 1, 9, 9);
	
 };

MyCube.prototype = Object.create(CGFobject.prototype);
MyCube.prototype.constructor = MyCube;


MyCube.prototype.display = function(){
	this.scene.pushMatrix();
		this.scene.translate(0,0,0.5);
		this.plane.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(0,0,-0.5);
		this.scene.rotate(Math.PI,1,0,0);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0.5,0);
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.plane.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(0,0.5,0);
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-0.5,0,0);
		this.scene.rotate(-Math.PI/2,0,1,0);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0.5,0,0);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,-0.5,0);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.plane.display();
	this.scene.popMatrix();
};