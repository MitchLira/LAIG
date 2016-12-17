/**
 * MyCommanderPiece
 * @constructor
 */
MyCommanderPiece.prototype = Object.create(MyPieces.prototype);
MyCommanderPiece.prototype.constructor = MyCommanderPiece;

 function MyCommanderPiece(scene,id, line, column, player, nrindicators, indicators) {
 	CGFobject.call(this,scene);
 	MyAnimation.call(this, id, line, column, player, nrindicators);
 	this.piecebody =new MyCylinder(this.scene, 0.5, 0.5, 1, 30, 30);
 	this.pieceIndicator = new MyPieceIndicator(this.scene);
	this.darkerpurple = new CGFappearance(scene);
	this.darkerpurple.setAmbient(51/255,6/255,95/255,1);
 };


MyCommanderPiece.prototype.display = function() {
 	this.scene.pushMatrix();
		this.scene.translate(0, 0.25,0);
		this.scene.scale(1,0.25,1);
		this.scene.rotate(Math.PI/2, 1, 0,0);
		this.piecebody.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0, 0.25,0);
		this.darkerpurple.apply();
		this.pieceIndicator.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0, 0.25,0);
		this.scene.rotate(Math.PI/2, 0,1,0);
		
		this.pieceIndicator.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0, 0.25,0);
		this.scene.rotate(Math.PI, 0,1,0);
		this.pieceIndicator.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0, 0.25,0);
		this.scene.rotate(-Math.PI/2, 0,1,0);
		this.pieceIndicator.display();
	this.scene.popMatrix();
    
}