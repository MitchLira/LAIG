/**
 * LinearAnimation
 * @constructor
 */

LinearAnimation.prototype = Object.create(MyAnimation.prototype);
LinearAnimation.prototype.constructor = LinearAnimation;

function LinearAnimation(id, span, controlPoints) {
 	 MyAnimation.call(this, id);

   this.id = id;
   this.span = span;
   this.controlPoints = controlPoints;
   this.position;
   this.finish = false;

	 this.totalDistance = 0;
   for(var i= 0; i < this.controlPoints.length - 2; i++)
   {
     var x2 = this.controlPoints[i+1].x;
     var x1 = this.controlPoints[i].x;
     var y2 = this.controlPoints[i+1].y;
     var y1 = this.controlPoints[i].y;
     var z1 = this.controlPoints[i+1].z;
     var z2 = this.controlPoints[i].z;

     var powX = Math.pow(x2-x1, 2);
     var powY = Math.pow(y2-y1, 2);
     var powZ = Math.pow(z2-z1, 2);
     var subdistance = Math.sqrt(powX + powY + powZ);
     this.distances2Poitns.push(subdistance);
     this.totalDistance += subdistance;
   }

	 this.velocity = this.totalDistance/span;
   this.distances2Poitns =[];

	 var deltaZ = this.controlPoints[1].z - this.controlPoints[0].z;
	 var deltaX = this.controlPoints[1].x - this.controlPoints[0].x;

	 this.angle = Math.atan2(deltaz, deltaX);

	 this.secondsElapsed = 0;
   this.nControlpoints = 0;
 };


 LinearAnimation.prototype.setChanges = function(currentTime) {
   var seconds, timeElapsed, increment, distanceElapsed;

   seconds = currentTime/1000;
   timeElapsed = seconds - secondsElapsed;
   this.secondsElapsed = seconds;

   distanceElapsed += timeElapsed * this.velocity;
   if(distanceElased > this.distances2Points[this.nControlpoints]){   //Significa que terminou o percurso que tinha que fazer
      if(this.nControlpoints  == this.controlPoints.length-2){
        finishi = true;
        return;
      }
      else{
        distanceElapsed = 0;
        this.nControlpoints++;
        this.angle = Math.atan2(
                                  (this.controlPoints[this.nControlpoints + 1].x - this.controlPoints[this.nControlPoints].x),
                                  (this.controlPoints[this.nControlpoints + 1].z - this.controlPoints[this.nControlpoints].z)
                                );
      }
   }

   increment = distanceElapsed/this.distances2Points[this.nControlpoints];  //razao entre os tempos dá o que tem que aumentar para x,y,z
   this.position = new getXYZ(
              (increment * this.controlPoints[this.nControlpoints+1].x) + ((1-increment)*this.controlPoints[this.nControlpoints].x),
              (increment * this.controlPoints[this.nControlpoints+1].y) + ((1-increment)*this.controlPoints[this.nControlpoints].y),
              (increment * this.controlPoints[this.nControlpoints+1].z) + ((1-increment)*this.controlPoints[this.nControlpoints].z)
   );
 };


 LinearAnimation.prototype.getDistance = function(controlPoints) {
	 var Distance = 0;
	 for(var i= 0; i < controlPoints.length - 2; i++)
	 {
		 var x2 = controlPoints[i+1].x;
		 var x1 = controlPoints[i].x;
		 var y2 = controlPoints[i+1].y;
		 var y1 = controlPoints[i].y;
		 var z1 = controlPoints[i+1].z;
		 var z2 = controlPoints[i].z;

		 var powX = Math.pow(x2-x1, 2);
		 var powY = Math.pow(y2-y1, 2);
		 var powZ = Math.pow(z2-z1, 2);
		 var subdistance = Math.sqrt(powX + powY + powZ);
		 Distance += subdistance;
     this.distances2Poitns.push(Distance);
	 }

	 return Distance;
 };

 LinearAnimation.prototype.getDistanceBetween2Points = function(constrolPoints) {
	 var powX = Math.pow(P2.x -P1.x, 2);
	 var powY = Math.pow(P2.y -P1.y, 2);
	 var powZ = Math.pow(P2.z -P1.z, 2);

	 var distance = Math.sqrt(powX + powY + powZ);
	 return distance;
 };

 LinearAnimation.prototype.getPosition = function(){

   return this.position;
 };

 LinearAnimation.prototype.getAngle = function(){

   return this.angle;
 };
