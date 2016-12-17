/**
 * CircularAnimation
 * @constructor
 */
MyCommanderPiece.prototype = Object.create(MyPieces.prototype);
MyCommanderPiece.prototype.constructor = MyCommanderPiece;

function CircularAnimation(scene) {
    CGFobject.call(this,scene);

    this.centralpiece  = new MyCylinder(scene, 1, 1, 1, 10, 10);
	this.cross = new MyCrossBridge(scene);
	this.initBuffers();

}

MyCommanderPiece.prototype.display = function(){ 

}