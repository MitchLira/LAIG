/**
 * MyAnimation
 * @constructor
 */


 class MyAnimation{
 	constructor(id,span, type){
 	this.id= id;
 	this.span = span;
 	this.type = type;
 	}
 };


 class LinearAnimation extends MyAnimation{
 	constructor(animation, controlPoint){
 	super(animation.id,animation.span, animation.type);
 	this.controlPoint = controlPoint;
 	}
 };

 class CircularAnimation extends MyAnimation{
 	constructor(animation, center, radius, startang, rotang){
 		super(animation.id, animation.span,animation.type);
 		this.center = center;
 		this.radius = radius;
 		this.startang = startang;
 		this.rotang = rotang;
 	}
 }