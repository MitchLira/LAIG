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

class getAxisAngle{
	constructor(axis, angle){
		this.axis = axis;
		this.angle = angle;
	}
}

class InfoPerspective{
	constructor(id, near, far, angle, from, to){
		this.id = id;
		this.near = near,
		this.far = far;
		this.angle = angle;
		this.from = from;
		this.to = to;
	}
};

class Illumination{
	constructor(doublesided, local, ambient, background){
		this.doublesided = doublesided;
		this.local = local;
		this.ambient = ambient;	
		this.background = background;
	}
};

class Lights{
	constructor(id, enabled, ambient, diffuse, specular){
		this.id= id;
		this.enabled = enabled;
		this.ambient = ambient;
		this.diffuse = diffuse;
		this.specular = specular;
	}
};

class OmniLight extends Lights{
	constructor(light,location){
		super(light.id, light.enable, light.ambient, light.diffuse, light.specular);
		this.location = location;
	}
};

class SpotLight extends Lights{
	constructor(light, angle, exponent, target, location){
		super(light.id, light.enable, light.ambient, light.diffuse, light.specular);
		this.angle = angle;
		this.exponent = exponent;
		this.target = target;
		this.location = location;
	}
}


class Texture{
	constructor(id, file, lengths, lengtht){
		this.id = id;
		this.file = file;
		this.length_s = lengths;
		this.length_t = this.lengtht;
	}
}

class Material{
	constructor(id, emission, ambient, diffuse, specular, shininess){
		this.id = id;
		this.emission = emission;
		this.ambient = ambient;
		this.diffuse = diffuse;
		this.specular = specular;
		this.shininess = shininess;
	}
}
