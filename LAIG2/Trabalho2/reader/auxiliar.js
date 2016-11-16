class getXY{
	constructor(x, y){
		this.x = x;
		this.y = y;
	}
}

class getXYZ{
	constructor(x,y,z){
		this.x = x;
		this.y = y;
		this.z = z;
	}
};

class getXYZW{ 
	constructor(x,y,z,w){
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
	}
};
class getRGBA{
	constructor(r,g,b,a){
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
	}
}








class Illumination {
  constructor(doublesided, local, ambient, background) {
    this.doublesided = doublesided;
    this.local = local;
    this.ambient = ambient;
    this.background = background;
  }
}






class Texture {
  constructor(id, texture, lengthS, lengthT) {
    this.id = id;
    this.texture = texture;
    this.lengthS = lengthS;
    this.lengthT = lengthT;
  }
}




class Stack{
	constructor(){
		this.stack = [];
	}

	push(stackElement)
	{
		if (typeof(stackElement) === 'undefined') {
        stackElement = [];
      }
      this.stack.push(stackElement);
    }

    pop()
    {
    	return this.stack.pop();
    }
    top()
    {
    	return this.stack[this.stack.length - 1];
    }
}


class Lights {
  constructor(id, enabled, ambient, diffuse, specular) {
    this.id = id;
    this.enabled = enabled;
    this.ambient = ambient;
    this.diffuse = diffuse;
    this.specular = specular;
  }
};



class OmniLight extends Lights {
  constructor(light, location) {
    super(light.id, light.enabled, light.ambient, light.diffuse, light.specular);
    this.location = location;
  }
};

class SpotLight extends Lights{
  constructor(light, angle, exponent, target, location) {
    super(light.id, light.enabled, light.ambient, light.diffuse, light.specular);
    this.angle = angle;
    this.exponent = exponent;
    this.location = location;
    this.direction = new getXYZ(target.x - location.x, target.y - location.y, target.z - location.z);
  }
}

class  Component {
		this.animationID = animationID;
		this.id = id;
		this.transformationID = transformationID;
		this.materialIDs = materialIDs;
		this.textureID = textureID;
		this.childrenIDs = childrenIDs ;
		this.animationID = animationID;
  }
}