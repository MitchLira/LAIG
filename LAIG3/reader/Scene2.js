function Scene2(scene) {
 	CGFobject.call(this,scene);

    this.tree = new MyTree(scene);
	this.cylinder = new MyCylinder(scene, 0.5, 0.5, 1, 50, 20);
	this.plane = new MyPlane(scene, 50, 50, 9, 9);

	this.treetext = new CGFappearance(scene);
 	this.treetext.loadTexture("resources/images/tree.jpg");
	
	
 	this.rings = new CGFappearance(scene);
 	this.rings.loadTexture("resources/images/ringstree.jpg");

 	this.florest = new CGFappearance(scene);
 	this.florest.loadTexture("resources/images/florest.jpg");
 	

 	 this.background = new CGFappearance(scene);
 	this.background.loadTexture("resources/images/background.jpg");

   	
 };

Scene2.prototype = Object.create(CGFobject.prototype);
Scene2.prototype.constructor = Scene2;


Scene2.prototype.display = function(){
	this.scene.pushMatrix();
 		this.treetext.apply();
 		this.scene.translate(7,-0.6,7);
 		this.scene.scale(40,10,40);
 		this.scene.rotate(Math.PI/2,1,0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
 		this.rings.apply();
 		this.scene.translate(7,-0.6,7);
 		this.scene.scale(40,0.1,40);
 		this.scene.rotate(Math.PI/2,1,0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-50,-10,-30);
 		this.scene.scale(10,10,10);
		this.tree.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(80,-10,-50);
 		this.scene.scale(10,10,10);
		this.tree.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-80,-10,50);
 		this.scene.scale(10,10,10);
		this.tree.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(100,-10,50);
 		this.scene.scale(10,10,10);
		this.tree.display();
	this.scene.popMatrix();


	this.scene.pushMatrix();
		this.florest.apply();
		this.scene.translate(7,-10,7);
		this.scene.rotate(-Math.PI/2,1,0,0);
 		this.scene.scale(5,5,5);
		this.plane.display();
	this.scene.popMatrix();

	
	this.scene.pushMatrix();
		this.background.apply();
		this.scene.translate(7,65,-110);
		this.scene.rotate(Math.PI,0,0,1);
 		this.scene.scale(5,3,5);
		this.plane.display();
	this.scene.popMatrix();


};