function Scene1(scene) {
 	CGFobject.call(this,scene);
	
	this.table = new MyTable(scene);
	this.plane = new MyPlane(scene, 50, 50, 9, 9);
	this.chair = new MyChair(scene);

	this.squares = new CGFappearance(scene);
 	this.squares.loadTexture("resources/images/squares.png");
 	this.bricks = new CGFappearance(scene);
 	this.bricks.loadTexture("resources/images/white.jpg");
 	this.window = new CGFappearance(scene);
 	this.window.loadTexture("resources/images/window.png");

 };

Scene1.prototype = Object.create(CGFobject.prototype);
Scene1.prototype.constructor = Scene1;


Scene1.prototype.display = function(){
	
	this.scene.pushMatrix();
		this.scene.translate(8,-0.31,8);
		this.table.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(26,-2.5,12);
		this.scene.scale(2,2,2);
		this.chair.display();
	this.scene.popMatrix();
		
	this.scene.pushMatrix();
		this.scene.translate(14,-2.5,12);
		this.scene.scale(2,2,2);
		this.chair.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(1,-2.5,4);
		this.scene.scale(2,2,2);
		this.scene.rotate(Math.PI,0,1,0);
		this.chair.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(-11,-2.5,4);
		this.scene.scale(2,2,2);
		this.scene.rotate(Math.PI,0,1,0);
		this.chair.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.squares.apply();
		this.scene.scale(2,1,2);
		this.scene.translate(10,-7,10);
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.bricks.apply();
		this.scene.scale(2,1,2);
		this.scene.translate(10,18,-15);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.bricks.apply();
		this.scene.scale(2,1,2);
		this.scene.translate(-15,18,10);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.window.apply();
		this.scene.translate(-29.9,19,20);
		this.scene.rotate(Math.PI/2,0,1,0);
		this.scene.scale(0.5,0.5,1);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.window.apply();
		this.scene.translate(20,20,-29.9);
		this.scene.scale(0.5,0.5,1);
		this.plane.display();
	this.scene.popMatrix();

};