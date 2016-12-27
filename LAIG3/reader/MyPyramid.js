function MyPyramid(scene) {
 	CGFobject.call(this,scene);
 	this.p1 = new getXY(0,0);
 	this.p2 = new getXY(1,0);
 	this.p3 = new getXY(0.5,1);
	this.triangle = new MyTriangle(scene,this.p2,this.p3,this.p1);
 	this.plane = new MyPlane(scene, 1, 1, 9, 9);
 };

MyPyramid.prototype = Object.create(CGFobject.prototype);
MyPyramid.prototype.constructor = MyPyramid;


MyPyramid.prototype.display = function(){
	this.scene.pushMatrix();
		this.scene.translate(-0.5,0,0.5);
		this.scene.rotate(-Math.PI/6,1,0,0);
		this.triangle.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(0.5,0,-0.5);
		this.scene.rotate(Math.PI,0,1,0);
		this.scene.rotate(-Math.PI/6,1,0,0);
		this.triangle.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0.5,0,0.5);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.rotate(-Math.PI/6,1,0,0);
		this.triangle.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-0.5,0,-0.5);
		this.scene.rotate(-Math.PI/2,0,1,0);
		this.scene.rotate(-Math.PI/6,1,0,0);
		this.triangle.display();
	this.scene.popMatrix();
	
	
	this.scene.pushMatrix();
		this.scene.rotate(Math.PI/2,1,0,0);
		this.plane.display();
	this.scene.popMatrix();
	
};