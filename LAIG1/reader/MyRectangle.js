/**
 * MyRectangle
 * @constructor
 */
 function MyRectangle(scene, p1, p2) {
 	CGFobject.call(this,scene);
    this.p1 = p1;
    this.p2 = p2;
	
	this.minS = 0;
	this.maxS = 1
	this.minT = 0
	this.maxT = 1
 	
	this.initBuffers();
 };

 MyRectangle.prototype = Object.create(CGFobject.prototype);
 MyRectangle.prototype.constructor = MyRectangle;

 MyRectangle.prototype.initBuffers = function() {
 	this.vertices = [
 	this.p1.x,this.p1.y,0,
 	this.p2.x,this.p1.y,0,
 	this.p2.x,this.p2.y,0,
 	this.p1.x,this.p2.y,0

 	];

 	this.indices = [
 	0,1,2,
 	2, 3, 0,
 	

 	];

 	this.primitiveType = this.scene.gl.TRIANGLES;

 	this.normals = [
 	0, 0, 1,
 	0, 0, 1,
 	0, 0, 1,
 	0, 0, 1
 	];

 
 	this.texCoords=[
 	    this.minS, this.maxT,
        this.maxS, this.maxT,
        this.maxS, this.minT,
        this.minS, this.minT
 	
 	];

 	this.initGLBuffers();
 };
