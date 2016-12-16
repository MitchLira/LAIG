function MyVehicle(scene){
  CGFobject.call(this,scene);

  this.scene = scene;

  controlPoints = [
    new getXYZ(-0.048,	-0.491,	0.000),
    new getXYZ(-0.048,	-0.491,	0.000),
    new getXYZ(-0.048,	-0.491,	0.000),
    new getXYZ(-0.048,	-0.491,	0.000),
    new getXYZ(-0.048,	-0.491,	0.000),
    new getXYZ(-0.048,	-0.491,	0.000),

    new getXYZ(0.000,	-1.000,	0.400),
    new getXYZ(-1.000,	-1.000,	0.400),
    new getXYZ(-1.000,	1.000,	0.400),
    new getXYZ(1.000,	1.000,	0.400),
    new getXYZ(1.000,	-1.000,	0.400),
    new getXYZ(0.000,	-1.000,	0.400),

    new getXYZ(0.000,	-1.000,	0.800),
    new getXYZ(-1.000,	-1.000,	0.800),
    new getXYZ(-1.000,	1.000,	0.800),
    new getXYZ(1.000,	1.000,	0.800),
    new getXYZ(1.000,	-1.000,	0.800),
    new getXYZ(0.000,	-1.000,	0.800),

    new getXYZ(0.000,	-1.000,	1.200),
    new getXYZ(-1.000,	-1.000,	1.200),
    new getXYZ(-1.000,   1.000,	1.200),
    new getXYZ(1.000,	 1.000,	1.200),
    new getXYZ(1.000,	-1.000,	1.200),
    new getXYZ(0.000,	-1.000,	1.200),

    new getXYZ(0.000,	-1.000,	1.600),
    new getXYZ(-1.000,	-1.000,	1.600),
    new getXYZ(-1.000,	1.000,	1.600),
    new getXYZ(1.000,	1.000,	1.600),
    new getXYZ(1.000,	-1.000,	1.600),
    new getXYZ(0.000,	-1.000,	1.600),

    new getXYZ(-0.048,	-0.491,	2.000),
    new getXYZ(-0.048,	-0.491,	2.000),
    new getXYZ(-0.048,	-0.491,	2.000),
    new getXYZ(-0.048,	-0.491,	2.000),
    new getXYZ(-0.048,	-0.491,	2.000),
    new getXYZ(-0.048,	-0.491,	2.000)
  ];

  this.balloon = new MyPatch(this.scene, 5, 5, 10, 10, controlPoints);

  this.braco1 = new MyCylinder(this.scene, 0.5, 0.5, 6, 50, 20);
  this.braco2 = new MyCylinder(this.scene, 0.5, 0.5, 6, 50, 20);
  this.braco3 = new MyCylinder(this.scene, 0.5, 0.5, 6, 50, 20);
  this.braco4 = new MyCylinder(this.scene, 0.5, 0.5, 6, 50, 20);

  this.cesta1 = new MyRectangle(this.scene, new getXYZ(0,2,0), new getXYZ(4,0,0));
  this.cesta2 = new MyRectangle(this.scene, new getXYZ(0,2,0), new getXYZ(4,0,0));
  this.cesta3 = new MyRectangle(this.scene, new getXYZ(0,2,0), new getXYZ(4,0,0));
  this.cesta4 = new MyRectangle(this.scene, new getXYZ(0,2,0), new getXYZ(4,0,0));
  this.cestaBase = new MyPlane(this.scene, 4, 4, 1, 1);

  this.balaoTexture = new CGFappearance(this.scene);
  this.balaoTexture.loadTexture("resources\\images\\balao.png");

  this.cestaTexture = new CGFappearance(this.scene);
  this.cestaTexture.loadTexture("resources\\images\\cesta.png");
};

MyVehicle.prototype = Object.create(CGFobject.prototype);
MyVehicle.prototype.constructor = MyVehicle;

MyVehicle.prototype.display = function(){

  this.cestaTexture.apply();

  this.scene.pushMatrix();
  this.scene.scale(0.5,1,0.5);
  this.scene.rotate(-Math.PI/2,1,0,0);
  this.braco1.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
  this.scene.translate(4,0,0);
  this.scene.scale(0.5,1,0.5);
  this.scene.rotate(-Math.PI/2,1,0,0);
  this.braco2.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
  this.scene.translate(4,0,4);
  this.scene.scale(0.5,1,0.5);
  this.scene.rotate(-Math.PI/2,1,0,0);
  this.braco3.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
  this.scene.translate(0,0,4);
  this.scene.scale(0.5,1,0.5);
  this.scene.rotate(-Math.PI/2,1,0,0);
  this.braco4.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
  this.cesta1.display();
  this.scene.translate(0,2,0);
  this.scene.rotate(-Math.PI,1,0,0);
  this.cesta1.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
  this.scene.translate(4,0,0);
  this.scene.rotate(-Math.PI/2,0,1,0);
  this.cesta2.display();
  this.scene.translate(4,0,0);
  this.scene.rotate(Math.PI,0,1,0);
  this.cesta2.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
  this.scene.translate(4,0,4);
  this.scene.rotate(Math.PI,0,1,0);
  this.cesta3.display();
  this.scene.translate(4,0,0);
  this.scene.rotate(Math.PI,0,1,0);
  this.cesta3.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
  this.scene.translate(0,0,4);
  this.scene.rotate(Math.PI/2,0,1,0);
  this.cesta4.display();
  this.scene.translate(4,0,0);
  this.scene.rotate(Math.PI,0,1,0);
  this.cesta4.display();
  this.scene.popMatrix();

  this.scene.pushMatrix();
  this.scene.translate(2,0,2);
  this.scene.rotate(-Math.PI/2,1,0,0);
  this.cestaBase.display();
  this.scene.rotate(Math.PI,1,0,0);
  this.cestaBase.display();
  this.scene.popMatrix();

  this.balaoTexture.apply();

  this.scene.pushMatrix();
  this.scene.translate(2,14,-8);
  this.scene.scale(10,10,10);
  this.balloon.display();
  this.scene.popMatrix();
};
