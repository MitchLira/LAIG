/**
 * MyCylinder
 * @constructor
 */
 function MyCylinder(scene, base, top, heigth, slices, stacks) {
 	CGFobject.call(this,scene);

	this.baseCylinder = new MyCylinderBase(scene, slices);
	this.body = new MyCylinderBody(scene, slices, stacks);

 	this.initBuffers();
 };

 MyCylinder.prototype = Object.create(CGFobject.prototype);
 MyCylinder.prototype.constructor = MyCylinder;


MyCylinder.prototype.display = function()
{	
	this.body.display();

	this.scene.pushMatrix();
	this.scene.rotate(Math.PI,0,1,0);
	this.baseCylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(0,0,1);
	this.baseCylinder.display();
	this.scene.popMatrix();
}
