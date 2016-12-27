function MyTable(scene) {
 	CGFobject.call(this,scene);
	
	this.tableTop = new MyTableTop(scene);	
	this.tableLegs = new MyTableLegs(scene);
	this.wood = new CGFappearance(scene);
 	this.wood.loadTexture("resources/images/wood.jpg");

 };

MyTable.prototype = Object.create(CGFobject.prototype);
MyTable.prototype.constructor = MyTable;


MyTable.prototype.display = function(){
	this.scene.pushMatrix();
		this.wood.apply();
		this.scene.translate(0,0.9,0);
		this.scene.scale(3,2,2);
		this.tableTop.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(14,-1,9);
		this.tableLegs.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-14,-1,9);
		this.tableLegs.display();
	this.scene.popMatrix();

		
	this.scene.pushMatrix();
		this.scene.translate(-14,-1,-9);
		this.tableLegs.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(14,-1,-9);
		this.tableLegs.display();
	this.scene.popMatrix();
};