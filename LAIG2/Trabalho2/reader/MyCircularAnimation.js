/**
 * CircularAnimation
 * @constructor
 */
CircularAnimation.prototype = Object.create(MyAnimation.prototype);
CircularAnimation.prototype.constructor = CircularAnimation;

 function CircularAnimation(id, span, center,radius, startang, rotang) {
 	 MyAnimation.call(this, id);

  this.id = id;
  this.center = center;
	this.radius = radius;
 	this.startang = (startang * Math.PI)/180.0;
 	this.rotang = (rotang * Math.PI)/180.0;

 	this.position = new getXYZ(
                              this.center.x + this.radius*Math.cos(startang),
                              this.center.y,
								              this.center.z + this.radiu*Math.sin(startang)
                            );


	this.angularVelocity =  this.rotang/this.span;
	this.angle = this.startang;
	this.nRotations = 0;
	this.secondsElapsed = 0;
	this.angleRotated = 0;
 };



CircularAnimation.prototype.getPosition = function() {

  return this.position;
}


CircularAnimation.prototype.rotateAnimation = function(currTime) {

		if(this.angleRotated >= this.rotang)
		{
			this.position = new getXYZ(
                                  this.center.x + this.radius*Math.sin(this.rotang+this.startang),
										              this.center.y,
										              this.center.z + this.radius*Math.cos(this.rotang+this.startang)
                                );
			return;
		}

		var seconds = currTime/1000;
		if(nRotations > 0)
			this.nRotations = (seconds - this.secondsElapsed); //número de segundos que passaram

		this.secondsElapsed = seconds;

		this.angleRotated = this.angularVelocity*nRotations;

		this.position = new getXYZ(
                                this.center.x + this.radius*Math.sin(angleRotated + this.startang),
								                this.center.y,
								                this.center.z + this.radius*Math.cos(angleRotated+ this.startang)
                              );
}
