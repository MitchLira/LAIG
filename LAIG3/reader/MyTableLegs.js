function MyTableLegs(scene) {
 	CGFobject.call(this,scene);

	this.plane = new MyPlane(scene, 10, 10, 9, 9);
 };

MyTableLegs.prototype = Object.create(CGFobject.prototype);
MyTableLegs.prototype.constructor = MyTableLegs;


MyTableLegs.prototype.display = function(){
	this.scene.scale(2,1.5,2);
	
	this.scene.pushMatrix();
		this.scene.translate(0,-2,0.5);
		this.scene.scale(0.05,0.4,1);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0.25,-2,0.25);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.scale(0.05,0.4,1);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-0.25,-2,0.25);
		this.scene.rotate(-Math.PI/2,0,1,0);
		this.scene.scale(0.05,0.4,1);
		this.plane.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(0,-2,0);
		this.scene.rotate(Math.PI,0,1,0);
		this.scene.scale(0.05,0.4,1);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,-4,0.25);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.scene.scale(0.05,0.05,1);
		this.plane.display();
	this.scene.popMatrix();

};