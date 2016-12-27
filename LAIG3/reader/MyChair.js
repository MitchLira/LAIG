function MyChair(scene) {
 	CGFobject.call(this,scene);
	
	this.tableTop = new MyTableTop(scene);	
	this.tableLegs = new MyTableLegs(scene);
	this.wood = new CGFappearance(scene);
	this.wood.loadTexture("resources/images/wood.jpg");
	this.tissue = new CGFappearance(scene);
	this.tissue.loadTexture("resources/images/tissue.jpg");
	
	this.plane = new MyPlane(scene, 2, 2, 9, 9);
 };

MyChair.prototype = Object.create(CGFobject.prototype);
MyChair.prototype.constructor = MyChair;


MyChair.prototype.display = function(){
	this.scene.pushMatrix();
		this.wood.apply();
		this.scene.translate(-6.5,0.7,-6.5);
		this.scene.scale(0.3,0.5,0.3);
		this.tableTop.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.wood.apply();
		this.scene.translate(-6.5,1.9,-7.5);
		this.scene.scale(0.3,0.3,0.5);
		this.scene.rotate(Math.PI/2, 1,0,0);
		this.tableTop.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.wood.apply();
		this.scene.translate(-5.5,0.2,-5.5);
		this.scene.scale(0.3,0.4,0.3);
		this.tableLegs.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.wood.apply();
		this.scene.translate(-7.5,0.2,-5.5);
		this.scene.scale(0.3,0.4,0.3);
		this.tableLegs.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.wood.apply();
		this.scene.translate(-7.5,0.2,-7.8);
		this.scene.scale(0.3,0.4,0.3);
		this.tableLegs.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.wood.apply();
		this.scene.translate(-5.5,0.2,-7.8);
		this.scene.scale(0.3,0.4,0.3);
		this.tableLegs.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.tissue.apply();
		this.scene.scale(1.2,1.3,1);
		this.scene.translate(-5.4,1.4,-7.79);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.tissue.apply();
		this.scene.scale(1.2,1.3,1);
		this.scene.translate(-5.4,0.31,-6.5);
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.plane.display();
	this.scene.popMatrix();

};