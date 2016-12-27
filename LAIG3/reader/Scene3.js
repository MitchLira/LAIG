function Scene3(scene) {
 	CGFobject.call(this,scene);
    this.cube = new MyCube(scene);
	this.pyramid = new MyPyramid(scene);
	this.sphere = new MySphere(scene,1, 20, 20);
	this.plane = new MyPlane(scene, 18,18, 9,9);
	this.cylinder = new MyCylinder(scene, 1, 1, 1, 50, 50);
	this.cone = new MyCylinder(scene, 0, 1, 3, 50, 50);
	this.torus = new MyTorus(scene, 0.5, 1, 40, 40);
	this.squareText = new CGFappearance(scene);
 	this.squareText.loadTexture("resources/images/squares.jpg");

 	this.text1 = new CGFappearance(scene);
 	this.text1.loadTexture("resources/images/text1.jpg");

 	this.text2 = new CGFappearance(scene);
 	this.text2.loadTexture("resources/images/text2.jpg");

 	this.text3 = new CGFappearance(scene);
 	this.text3.loadTexture("resources/images/text3.jpg");

 	this.text4 = new CGFappearance(scene);
 	this.text4.loadTexture("resources/images/text4.jpg");

 	this.text5 = new CGFappearance(scene);
 	this.text5.loadTexture("resources/images/text5.jpg");

 	this.text6 = new CGFappearance(scene);
 	this.text6.loadTexture("resources/images/text6.jpg");

 	this.text7 = new CGFappearance(scene);
 	this.text7.loadTexture("resources/images/text7.jpg");

 	this.text8 = new CGFappearance(scene);
 	this.text8.loadTexture("resources/images/text8.jpg");
 };

Scene3.prototype = Object.create(CGFobject.prototype);
Scene3.prototype.constructor = Scene3;


Scene3.prototype.display = function(){
  	this.scene.pushMatrix();
  		this.text5.apply();
  		this.scene.translate(9,-13.1,9);
  		this.scene.scale(25,25,25);
		this.cube.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.text1.apply();
		this.scene.translate(50,-25,-50);
		this.scene.scale(30,30,30);
		this.pyramid.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.text2.apply();
		this.scene.translate(-50,-5,-20);
		this.scene.scale(20,20,20);
		this.sphere.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.text4.apply();
		this.scene.translate(-50,-15,50);
		this.scene.scale(10,10,30);
		this.cylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.text7.apply();
		this.scene.translate(0,-25,0);
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.scene.scale(10,10,10);
		this.plane.display();
	this.scene.popMatrix();


	this.scene.pushMatrix();
		this.text3.apply();
		this.scene.translate(0,38,-90);
		this.scene.scale(10,7,10);
		this.plane.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.text6.apply();
		this.scene.translate(65,-25,30);
		this.scene.scale(15,12,15);
		this.scene.rotate(-Math.PI/2,1,0,0);
		this.cone.display();
	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.text8.apply();
		this.scene.translate(0,-10,59);
		this.scene.scale(15,15,15);
		
		//this.scene.rotate(-Math.PI/2,1,0,0);
		this.torus.display();
	this.scene.popMatrix();
};