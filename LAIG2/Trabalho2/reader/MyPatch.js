/**
 * MyPatch
 * @constructor
 */
 function MyPatch(scene, orderU, orderV, partsU, partsV, controlpoints) {
 	CGFobject.call(this,scene);
    
    this.orderU = orderU;
    this.orderV = orderV;
    this.partsU = partsU;
    this.partsV = partsV;
    this.controlpoints = controlpoints;
	
	
	this.initBuffers();
 };

 MyPatch.prototype = Object.create(CGFobject.prototype);
 MyPatch.prototype.constructor = MyPatch;

 MyPatch.prototype.initBuffers = function() {
 	this.vertices = [];
 	this.indices = [];
 	this.normals = [];
 	this.texCoords=[];

	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
