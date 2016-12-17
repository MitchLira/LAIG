function MyBoardBridges(scene) {
 	CGFobject.call(this,scene);
	
	this.bridges  =new MyCylinder(scene, 1, 1, 1, 10, 10);
 };

MyBoardBridges.prototype = Object.create(CGFobject.prototype);
MyBoardBridges.prototype.constructor = MyBoardBridges;


MyBoardBridges.prototype.display = function(){
    
	//horizontal bridges first row
	this.scene.pushMatrix();
		this.scene.translate(6.5, 0.3,8);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4.5, 0.3,8);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2.5, 0.3,8);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0.5, 0.3,8);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-1.5, 0.3,8);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-3.5, 0.3,8);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-5.5, 0.3,8);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-7.5, 0.3,8);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	//horizontal bridges second row
	this.scene.pushMatrix();
		this.scene.translate(6.5, 0.3,6);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4.5, 0.3,6);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2.5, 0.3,6);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0.5, 0.3,6);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-1.5, 0.3,6);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-3.5, 0.3,6);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-5.5, 0.3,6);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-7.5, 0.3,6);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();
		
		//horizontal bridges third row
	this.scene.pushMatrix();
		this.scene.translate(6.5, 0.3,4);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4.5, 0.3,4);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2.5, 0.3,4);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0.5, 0.3,4);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-1.5, 0.3,4);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-3.5, 0.3,4);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-5.5, 0.3,4);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-7.5, 0.3,4);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();



		//horizontal bridges fourth row
	this.scene.pushMatrix();
		this.scene.translate(6.5, 0.3,2);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4.5, 0.3,2);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2.5, 0.3,2);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0.5, 0.3,2);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-1.5, 0.3,2);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-3.5, 0.3,2);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-5.5, 0.3,2);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-7.5, 0.3,2);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	
		//horizontal bridges fifth row
	this.scene.pushMatrix();
		this.scene.translate(6.5, 0.3,0);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4.5, 0.3,0);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2.5, 0.3,0);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0.5, 0.3,0);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-1.5, 0.3,0);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-3.5, 0.3,0);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-5.5, 0.3,0);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-7.5, 0.3,0);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	
		//horizontal bridges sixth row
	this.scene.pushMatrix();
		this.scene.translate(6.5, 0.3,-2);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4.5, 0.3,-2);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2.5, 0.3,-2);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0.5, 0.3,-2);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-1.5, 0.3,-2);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-3.5, 0.3,-2);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-5.5, 0.3,-2);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-7.5, 0.3,-2);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();
		//horizontal bridges seventh row
	this.scene.pushMatrix();
		this.scene.translate(6.5, 0.3,-4);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4.5, 0.3,-4);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2.5, 0.3,-4);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0.5, 0.3,-4);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-1.5, 0.3,-4);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-3.5, 0.3,-4);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-5.5, 0.3,-4);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-7.5, 0.3,-4);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

//horizontal bridges eighth row
	this.scene.pushMatrix();
		this.scene.translate(6.5, 0.3,-6);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4.5, 0.3,-6);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2.5, 0.3,-6);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0.5, 0.3,-6);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-1.5, 0.3,-6);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-3.5, 0.3,-6);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-5.5, 0.3,-6);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-7.5, 0.3,-6);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();
//horizontal bridges ninth row
	this.scene.pushMatrix();
		this.scene.translate(6.5, 0.3,-8);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4.5, 0.3,-8);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2.5, 0.3,-8);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0.5, 0.3,-8);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-1.5, 0.3,-8);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-3.5, 0.3,-8);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-5.5, 0.3,-8);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-7.5, 0.3,-8);
		this.scene.scale(1.1,0.1,0.1);
		this.scene.rotate(Math.PI/2, 0, 1,0);
		this.bridges.display();
	this.scene.popMatrix();
//vertical bridges ninth row
	this.scene.pushMatrix();
		this.scene.translate(8, 0.3,6.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(8, 0.3,4.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(8, 0.3,2.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(8, 0.3,0.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(8, 0.3,-1.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(8, 0.3,-3.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(8, 0.3,-5.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(8, 0.3,-7.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	//vertical bridges eighth row
	this.scene.pushMatrix();
		this.scene.translate(6, 0.3,6.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(6, 0.3,4.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(6, 0.3,2.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(6, 0.3,0.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(6, 0.3,-1.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(6, 0.3,-3.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(6, 0.3,-5.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(6, 0.3,-7.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

		//vertical bridges seventh row
	this.scene.pushMatrix();
		this.scene.translate(4, 0.3,6.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4, 0.3,4.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(4, 0.3,2.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(4, 0.3,0.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(4, 0.3,-1.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4, 0.3,-3.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(4, 0.3,-5.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(4, 0.3,-7.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

		//vertical bridges sixth row
	this.scene.pushMatrix();
		this.scene.translate(2, 0.3,6.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2, 0.3,4.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(2, 0.3,2.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(2, 0.3,0.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(2, 0.3,-1.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(2, 0.3,-3.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(2, 0.3,-5.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(2, 0.3,-7.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

			//vertical bridges seventh row
	this.scene.pushMatrix();
		this.scene.translate(4, 0.3,6.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4, 0.3,4.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(4, 0.3,2.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(4, 0.3,0.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(4, 0.3,-1.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4, 0.3,-3.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(4, 0.3,-5.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(4, 0.3,-7.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

		//vertical bridges fifth row
	this.scene.pushMatrix();
		this.scene.translate(0, 0.3,6.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0, 0.3,4.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(0, 0.3,2.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(0, 0.3,0.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(0, 0.3,-1.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0, 0.3,-3.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0, 0.3,-5.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(0, 0.3,-7.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
			//vertical bridges seventh row
	this.scene.pushMatrix();
		this.scene.translate(4, 0.3,6.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4, 0.3,4.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(4, 0.3,2.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(4, 0.3,0.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(4, 0.3,-1.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(4, 0.3,-3.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(4, 0.3,-5.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(4, 0.3,-7.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

		//vertical bridges fourth row
	this.scene.pushMatrix();
		this.scene.translate(-2, 0.3,6.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-2, 0.3,4.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(-2, 0.3,2.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(-2, 0.3,0.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(-2, 0.3,-1.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-2, 0.3,-3.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-2, 0.3,-5.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(-2, 0.3,-7.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	//vertical bridges third row
	this.scene.pushMatrix();
		this.scene.translate(-4, 0.3,6.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-4, 0.3,4.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(-4, 0.3,2.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(-4, 0.3,0.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(-4, 0.3,-1.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-4, 0.3,-3.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-4, 0.3,-5.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(-4, 0.3,-7.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	//vertical bridges second row
	this.scene.pushMatrix();
		this.scene.translate(-6, 0.3,6.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-6, 0.3,4.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(-6, 0.3,2.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(-6, 0.3,0.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(-6, 0.3,-1.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-6, 0.3,-3.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-6, 0.3,-5.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(-6, 0.3,-7.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	//vertical bridges first row
	this.scene.pushMatrix();
		this.scene.translate(-8, 0.3,6.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-8, 0.3,4.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(-8, 0.3,2.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(-8, 0.3,0.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(-8, 0.3,-1.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-8, 0.3,-3.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-8, 0.3,-5.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(-8, 0.3,-7.5);
		this.scene.scale(0.1,0.1,1.1);
		this.scene.rotate(Math.PI/2, 0, 0,0);
		this.bridges.display();
	this.scene.popMatrix();
};