/**
 * MyPlane
 * @constructor
 */

 MyPlane.prototype = Object.create(CGFnurbsObject.prototype);
 MyPlane.prototype.constructor = MyPlane;

 function MyPlane(scene, dimX, dimY,partsX, partsY) {

	 var knots1 = this.getKnotsVector(1)
 	 var knots2 = this.getKnotsVector(1);
 	 
  	 var controlPoints=[[    		 [-dimX/2, -dimY/2, 0.0, 1 ],
          							 [-dimX/2,  dimY/2, 0.0, 1 ]],
          			    [            [ dimX/2, -dimY/2, 0.0, 1 ],
                                     [ dimX/2,  dimY/2, 0.0, 1 ]]];

  	var nurbsSurface = new CGFnurbsSurface(1, 1, knots1, knots2, controlPoints);

  	getSurfacePoint = function(u, v) {
    return nurbsSurface.getPoint(u, v);
  };

  CGFnurbsObject.call(this, scene, getSurfacePoint, partsX, partsY);
 };




 MyPlane.prototype.getKnotsVector = function(degree) { // TODO (CGF 0.19.3): add to CGFnurbsSurface
	
	var v = new Array();
	for (var i=0; i<=degree; i++) {
		v.push(0);
	}
	for (var i=0; i<=degree; i++) {
		v.push(1);
	}
	return v;
}	
