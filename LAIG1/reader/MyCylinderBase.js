/**
 * MyCylinderBase
 * @constructor
 */
function MyCylinderBase(scene, slices) {
 	CGFobject.call(this,scene);
	
	this.slices =  slices;

 	this.initBuffers();
 };

 MyCylinderBase.prototype = Object.create(CGFobject.prototype);
 MyCylinderBase.prototype.constructor = MyCylinderBase;

 MyCylinderBase.prototype.initBuffers = function() {

	this.vertices = new Array();
	this.indices = new Array();
	this.normals = new Array();
	this.texCoords = new Array();


	var ang = (2*Math.PI) / this.slices;
	var first = 1;

	this.vertices.push(0, 0, 0);
	this.normals.push(0, 0, 1);
	this.texCoords.push(0.5, 0.5);

	for (i = 0; i <= this.slices; i++) {
		var x = Math.cos(i*ang);
		var y = Math.sin(i*ang);

		this.vertices.push(x, y, 0);
		this.normals.push(0, 0, 1);
		this.texCoords.push(0.5 + 0.5 * x, 0.5 - 0.5 * y);

		if (i > 1) {
			this.indices.push(first++, first, 0);
		}
	}

	this.indices.push(0, first, 1);
	
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	
 	this.initGLBuffers();
 };