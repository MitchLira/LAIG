function Animated(primitive, animations){
  this.primitive = primitive;
  this.animations = animations;

  this.animationsIndex = o;
  this.animations[0].finished = false;
};

Animated.prototype.getAnimationPosition = function(){
  if(this.animations[this.animationIndex]).finished && this.animationIndex != this.animation.length-1){
    this.animationIndex++;
    this.animations[this.animationIndex].finished = false;
  }
};
Animated.prototype.getAnimationAngle = function(){
  return this.animations[this.animationIndex].getAngles();
}
