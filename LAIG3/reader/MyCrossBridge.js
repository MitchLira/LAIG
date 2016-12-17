function MyCrossBridge(scene) {
 	CGFobject.call(this,scene);
	
	this.bridges  =new MyCylinder(scene, 1, 1, 1, 10, 10);
 };

MyCrossBridge.prototype = Object.create(CGFobject.prototype);
MyCrossBridge.prototype.constructor = MyCrossBridge;


MyCrossBridge.prototype.display = function(){

		//horizontal bridges first row
	this.scene.pushMatrix();	
		this.scene.rotate(Math.PI/4, 0, 1,0);
		this.scene.translate(0,0.3,0.4);
		this.scene.scale(0.1,0.1,2.2);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(2,0,0);
		this.scene.rotate(-Math.PI/4, 0, 1,0);
		this.scene.translate(0,0.3,0.4);
		this.scene.scale(0.1,0.1,2.1);
		this.bridges.display();
	this.scene.popMatrix();
};