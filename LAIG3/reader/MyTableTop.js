function MyTableTop(scene) {
 	CGFobject.call(this,scene);
	
	this.plane = new MyPlane(scene, 10, 10, 9, 9);


 };

MyTableTop.prototype = Object.create(CGFobject.prototype);
MyTableTop.prototype.constructor = MyTableTop;


MyTableTop.prototype.display = function(){
	
	this.scene.pushMatrix();
		this.scene.translate(0,-1,0);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,-1,0);
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,-0.6,0);
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,-0.6,0);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,-0.8,-5);
		this.scene.scale(1,0.04,1);
		this.scene.rotate(-Math.PI,1,0,0);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,-0.8,-5);
		this.scene.scale(1,0.04,1);
		this.scene.rotate(2*Math.PI,1,0,0);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,-0.8,5);
		this.scene.scale(1,0.04,1);
		this.scene.rotate(2*Math.PI,1,0,0);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,-0.8,5);
		this.scene.scale(1,0.04,1);
		this.scene.rotate(Math.PI,1,0,0);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-5,-0.8,0);
		this.scene.scale(1,0.04,1);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-5,-0.8,0);
		this.scene.scale(1,0.04,1);
		this.scene.rotate(-Math.PI/2,0,1,0);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(5,-0.8,0);
		this.scene.scale(1,0.04,1);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(5,-0.8,0);
		this.scene.scale(1,0.04,1);
		this.scene.rotate(-Math.PI/2,0,1,0);
		this.plane.display();
	this.scene.popMatrix();

		
	
};