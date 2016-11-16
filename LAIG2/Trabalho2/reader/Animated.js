function Animated(primitive, animations){
  this.primitive = primitive;
  this.animations = animations;

  this.animationsIndex = 0;
  this.animations[0].finish = false;
};



Animated.prototype.getAnimationPosition = function(){
  if(this.animations[this.animationsIndex].finish && (this.animationsIndex != this.animations.length-1)){
    this.animationsIndex++;
    this.animations[this.animationsIndex].finish = false;
  }
  return this.animations[this.animationsIndex].getPosition();
};
Animated.prototype.getAnimationAngle = function(){
  return this.animations[this.animationsIndex].getAngle();
}
