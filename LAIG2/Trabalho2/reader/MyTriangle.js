/**
 * MyTriangle
 * @constructor
 */
 function MyTriangle(scene, p1, p2, p3) {
 	CGFobject.call(this,scene);
    this.p1 = p1;
    this.p2 = p2;
	this.p3 = p3;


	this.initBuffers();
 };

 MyTriangle.prototype = Object.create(CGFobject.prototype);
 MyTriangle.prototype.constructor = MyTriangle;

 MyTriangle.prototype.initBuffers = function() {
 	this.vertices = [
		this.p1.x, this.p1.y, 0,
		this.p2.x, this.p2.y, 0,
		this.p3.x, this.p3.y, 0,

 	];

 	this.indices = [
		0, 1, 2, 
 	];

 	this.primitiveType = this.scene.gl.TRIANGLES;

 	this.normals = [
		0, 0, 1,
		0, 0, 1,
		0, 0, 1,
 	];

 
 	this.texCoords=[
		0, 0,
		1, 0,
		0.5, 1
 	];

 	this.initGLBuffers();
 };
