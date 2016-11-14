/**
 * LinearAnimation
 * @constructor
 */
function LinearAnimation(id, span, controlPoints) {
 	 MyAnimation.call(this, id);
    
     this.id = id;
     this.span = span;
     this.controlPoints = controlPoints;
 };