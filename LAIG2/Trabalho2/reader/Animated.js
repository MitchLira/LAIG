function Animated(animations){
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
};

Animated.prototype.getMatrix = function() {

  var matrix = mat4.create();
  mat4.translate(matrix, matrix, [this.getAnimationPosition().x,this.getAnimationPosition().y,this.getAnimationPosition().z]);
  mat4.rotate(matrix, matrix,this.getAnimationAngle(), [0,1,0]);

  return matrix;
};