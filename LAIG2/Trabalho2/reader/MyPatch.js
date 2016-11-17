/**
 * MyPatch
 * @constructor
 */
 function MyPatch(scene, orderU, orderV, partsU, partsV, controlpoints) {
   var points = [];

   var knots1 = this.getKnotsVector(partsU); // to be built inside webCGF in later versions ()
   var knots2 = this.getKnotsVector(partsV); // to be built inside webCGF in later versions ()

   for(var nU = 0; nU <= orderU; nU++){
      var arrayPoint = new Array(orderV + 1);

      for(var nV = 0; nV <= orderV; nV++){
        var p = controlpoints[nV + (orderV + 1) * nU];
        arrayPoint.push(p);
      }

      points.push(arrayPoint);
    }
 };

 MyPatch.prototype = Object.create(CGFnurbsObject.prototype);
 MyPatch.prototype.constructor = MyPatch;

 LightingScene.prototype.getKnotsVector = function(degree) { // TODO (CGF 0.19.3): add to CGFnurbsSurface
   var v = new Array();
 	 for (var i=0; i<=degree; i++) {
     v.push(0);
   }
 	 for (var i=0; i<=degree; i++) {
     v.push(1);
 	 }

   return v;
};
