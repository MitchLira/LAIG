/**
 * LinearAnimation
 * @constructor
 */

LinearAnimation.prototype = Object.create(MyAnimation.prototype);
LinearAnimation.prototype.constructor = CircularAnimation;
 
function LinearAnimation(id, span, controlPoints) {
 	 MyAnimation.call(this, id);
    
     this.id = id;
     this.span = span;
     this.controlPoints = controlPoints;
	 
	 this.TotalLength = getLength(controlPoints);
	 this.velocity = controlPoints/span;
 };
 
 
 
 
 
 LinearAnimation.prototype.getDistance = function(controlPoints) {
	 var Distance = 0;
	 for(var i= controlPoints.length - 1; i > 0; i--)
	 {
		 var x2 = controlPoints[i].x;
		 var x1 = controlPoints[i-1].x;
		 var y2 = controlPoints[i].y;
		 var y1 = controlPoints[i-1].y;
		 var z1 = controlPoints[i].z;
		 var z2 = controlPoints[i-1].z;
		 
		 var powX = Math.pow(x2-x1, 2);
		 var powY = Math.pow(y2-y1, 2);
		 var powZ = Math.pow(z2-z1, 2);
		 var sublength = Math.sqrt(powX + powY + powZ);
		 Distance += sublength;
	 }
	 
	 return Distance;
 }
 
 LinearAnimation.prototype.getDistanceBetween2Points = function(P1, P2) {
	 var powX = Math.pow(P2.x -P1.x, 2);
	 var powY = Math.pow(P2.y -P1.y, 2);
	 var powZ = Math.pow(P2.z -P1.z, 2);
	 
	 var distance = Math.sqrt(powX + powY + powZ);
	 return distance;
 }
 
 
