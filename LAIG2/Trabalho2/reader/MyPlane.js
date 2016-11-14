/**
 * MyPlane
 * @constructor
 */
 function MyPlane(scene, dimX, dimY,partsX, partsY) {
 	CGFobject.call(this,scene);
    
    this.dimX = dimX;
    this.dimY = dimY;
    this.partsX = partsX;
    this.partsY = partsY;

	this.initBuffers();
 };

 MyPlane.prototype = Object.create(CGFobject.prototype);
 MyPlane.prototype.constructor = MyPlane;

 MyPlane.prototype.initBuffers = function() {
 	 	this.vertices = [];
 	this.indices = [];
 	this.normals = [];
 	this.texCoords=[];

	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();

 };
