/**
 * CircularAnimation
 * @constructor
 */
function CircularAnimation(id, span, center,radius, startang, rotang) {
 	 MyAnimation.call(this, id);

    this.id = id;
    this.center = center;
	this.radius = radius;
 	this.startang = (startang * Math.PI)/180.0;
 	this.rotang = (rotang * Math.PI)/180.0;

 	this.position = new getXYZ(this.center.x + this.radius*Math.cos(startang),this.center.y,
								   this.center.z + this.radiu*Math.sin(startang));								   
 
 
 };
 
 
 
CircularAnimation.prototype.getPosition = function() {

  return this.position;
}