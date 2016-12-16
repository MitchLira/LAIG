/**
 * MyPatch
 * @constructor
 */

 MyPatch.prototype = Object.create(CGFnurbsObject.prototype);
 MyPatch.prototype.constructor = MyPatch;

 function MyPatch(scene, orderU, orderV, partsU, partsV, controlpoints) {
   var points = [];

   var knots1 = this.getKnotsVector(orderU); // to be built inside webCGF in later versions ()
   var knots2 = this.getKnotsVector(orderV); // to be built inside webCGF in later versions ()
   var p;
    
   for(var nU = 0; nU <= orderU ; nU++){
      var arrayPoint = [];
      for(var nV = 0; nV <= orderV ; nV++){
            p = controlpoints[(nV + (orderV + 1 ) * nU)];
            arrayPoint.push([p.x,p.y,p.z,1]);
      }
      points.push(arrayPoint);
   }

    var nurbsSurface = new CGFnurbsSurface(orderU, orderV, knots1, knots2, points);

    getSurfacePoint = function(u, v) {
      return nurbsSurface.getPoint(u, v);
    };

   CGFnurbsObject.call(this, scene, getSurfacePoint, partsU, partsV);
 };



 MyPatch.prototype.getKnotsVector = function(degree) { // TODO (CGF 0.19.3): add to CGFnurbsSurface
   var v = new Array();
 	 for (var i=0; i<=degree; i++) {
     v.push(0);
   }
 	 for (var i=0; i<=degree; i++) {
     v.push(1);
 	 }

   return v;
};
