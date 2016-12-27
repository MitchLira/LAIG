function MyTree(scene) {
 	CGFobject.call(this,scene);
	
	this.cylinder = new MyCylinder(scene, 0.5, 0.5, 1, 50, 20);
	this.sphere = new MySphere(scene, 0.4, 40, 40);
	this.torus = new  MyTorus(scene, 0.5, 1, 40, 40)

	
	this.tree = new CGFappearance(scene);
 	this.tree.loadTexture("resources/images/tree.jpg");

 	this.leaves = new CGFappearance(scene);
 	this.leaves.loadTexture("resources/images/leaves.jpg");
 };

MyTree.prototype = Object.create(CGFobject.prototype);
MyTree.prototype.constructor = MyTree;


MyTree.prototype.display = function(){
	
	this.scene.translate(0,5,0);
	
 	this.scene.pushMatrix();
 		this.tree.apply();
 		this.scene.scale(1.5,5,1.5);
 		this.scene.rotate(Math.PI/2,1,0,0);
		this.cylinder.display();
	this.scene.popMatrix();

	 this.scene.pushMatrix();
 		this.tree.apply();
 		this.scene.translate(0,-2.5,0.2);
 		this.scene.rotate(-Math.PI/3,0,1,0);
 		this.scene.rotate(-Math.PI/6,1,0,0);
 		this.scene.scale(0.5,0.5,1.3);
		this.cylinder.display();
	this.scene.popMatrix();
   
    this.scene.pushMatrix();
 		this.leaves.apply();
 		this.scene.translate(0,1,0.2);
 		this.scene.scale(5,5,5);
		this.sphere.display();
	this.scene.popMatrix();

	 this.scene.pushMatrix();
 		this.tree.apply();
 		this.scene.translate(0.7,-2,0);
 		this.scene.scale(0.6,0.5,0.3);
 		this.scene.rotate(Math.PI/2,0,1,0);
		this.torus.display();
	this.scene.popMatrix();

};