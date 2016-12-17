function MyPieceIndicator(scene) {
 	CGFobject.call(this,scene);
    
	this.triangle= new MyTriangle(this.scene, new getXYZ(0,0,0), new getXYZ(0.49,0,0), new getXYZ(0.49,0.3,0));
	this.rectangle = new MyRectangle(this.scene, new getXYZ(0,0,0), new getXYZ(0.45,0.05,0))
	this.initBuffers();
 };

 MyPieceIndicator.prototype = Object.create(CGFobject.prototype);
 MyPieceIndicator.prototype.constructor = MyPieceIndicator;

 MyPieceIndicator.prototype.initBuffers = function() {
 	this.vertices = [
 	0,0,0.05, //0
 	0.49,0,0.05,  //1 
 	0.49,0.3,0.05, //2
 	0,0,-0.05,  // 3
 	0.49,0,-0.05,  //4
 	0.49,0.3,-0.05, // 5
 	];

 	this.indices = [
 	0,1,2,
 	5, 4,3,
 	2,3,0,
 	5,3,2,
 	4,2,1,
 	4,5,2,
 	1,0,4,
 	0,3,4,
 	
 	

 	];

 	this.primitiveType = this.scene.gl.TRIANGLES;

 	this.normals = [
 	0, 0, 1,
 	0, 0, 1,
 	0, 0, 1, 	
 	0, 0, 1,
 	0, 0, 1,
 	0, 0, 1,
 	0, 0, 1,
 	0, 0, 1,
 	0, 0, 1,

 	];

 
 	this.texCoords=[
		0, 0,
		1, 0,
		0.5, 1,
		0, 0,
		1, 0,
		0.5, 1,

 	];

 	this.initGLBuffers();
 };
