function MySceneGraph(filename, scene) {
    this.loadedOk = null;

    // Establish bidirectional references between scene and graph
    this.scene = scene;
    scene.graph = this;

    this.rootID;
    this.axis_length;
    this.perspectives = [];
    this.illumination;
    this.omniLights = [];
    this.spotLights = [];
    this.textures = {};
    this.materials = {};
    this.transformations = {};
    this.animations = {};
    this.nodes = {};

    



    // File reading
    this.reader = new CGFXMLreader();

    /*
     * Read the contents of the xml file, and refer to this class for loading and error handlers.
     * After the file is read, the reader calls onXMLReady on this object.
     * If any error occurs, the reader calls onXMLError on this object, with an error message
     */

    this.reader.open('scenes/' + filename, this);

}

/*
 * Callback to be executed after successful reading
 */
MySceneGraph.prototype.onXMLReady = function() {
    console.log("XML Loading finished.");
    var rootElement = this.reader.xmlDoc.documentElement;

    // Here should go the calls for different functions to parse the various blocks

    if (this.chekDSXOrder(rootElement))
        return;

    if (this.loadScene(rootElement))
        return;

    if(this.loadViews(rootElement))
        return;

    if(this.loadIllumination(rootElement))
        return;

    if(this.loadLights(rootElement))
        return;

    if(this.loadTextures(rootElement))
        return;

    if(this.loadMaterials(rootElement))
        return;

    if(this.loadTranformations(rootElement))
        return;

    if(this.loadPrimitives(rootElement))
        return;

	if(this.loadAnimations(rootElement))
    	return;	
    
    if(this.loadComponents(rootElement))
        return;



    // As the graph loaded ok, signal the scene so that any additional initialization depending on the graph can take place
    this.scene.onGraphLoaded();
    this.loadedOk = true;
};

MySceneGraph.prototype.chekDSXOrder = function(rootElement) {
    var childs = rootElement.children;
    if (childs.length != 10) {
        console.error("Missing Tag");
        return 1;
    }
    var rightOrder = ["scene","views","illumination","lights","textures","materials","transformations","primitives","animations","components"];
	var i;
	for(i = 0; i< rightOrder.length; i++)
	{
		if(childs[i].tagName != rightOrder[i])
		{
			console.warn(childs[i].tagName + " is is not in the correct order on the file DSX ");
		}
	}

    return 0;
}

MySceneGraph.prototype.loadScene = function(rootElement) {
    var scene = rootElement.getElementsByTagName('scene')[0];

    if (scene == null) {
        this.onXMLError("Error loading scene, No Scene Tag");
        return 1;
    }

    this.rootID = this.reader.getString(scene, 'root');
    this.axis_length = this.reader.getFloat(scene, 'axis_length');

}

MySceneGraph.prototype.loadViews = function(rootElement) {
 var getViews, getPerspective; 

    getViews = rootElement.getElementsByTagName('views')[0];
    if (getViews == null){
        this.onXMLError("Error loading view. No views Tag");
        return 1;
      }

    getPerspective = getViews.getElementsByTagName('perspective');
    
    var id, near, far, angle, from, to;
    for (var i=0; i < getPerspective.length;i++) {
        id = this.reader.getString(getPerspective[i], 'id');
        near = this.reader.getFloat(getPerspective[i], 'near');
        far = this.reader.getFloat(getPerspective[i], 'far');
        angle = this.reader.getFloat(getPerspective[i], 'angle');
        var getFrom =  getPerspective[i].getElementsByTagName('from')[0];
        from = new getXYZ(this.reader.getFloat(getFrom,'x'), this.reader.getFloat(getFrom,'y'),this.reader.getFloat(getFrom,'z'));
        var getTo =  getPerspective[i].getElementsByTagName('to')[0];
        to =new getXYZ(this.reader.getFloat(getTo,'x'), this.reader.getFloat(getTo,'y'),this.reader.getFloat(getTo,'z'));


        this.perspectives.push(new CGFcamera(angle* Math.PI/180, near, far,
            vec3.fromValues(from.x, from.y, from.z),
            vec3.fromValues(to.x, to.y, to.z)))
    }
}


MySceneGraph.prototype.loadIllumination = function(rootElement) {
   
	var getillumination = rootElement.getElementsByTagName('illumination')[0];
	
	if(getillumination == null){
		this.onXMLError("'illumination' element is missing.");
		return 1;
	}

	var doublesided, local, ambient, background;
	doublesided = this.reader.getBoolean(getillumination, 'doublesided');
    local = this.reader.getBoolean(getillumination, 'local');
    var getambient = getillumination.getElementsByTagName('ambient')[0];
    ambient = new getRGBA(this.reader.getFloat( getambient, 'r'),this.reader.getFloat( getambient, 'g'),this.reader.getFloat( getambient, 'b'),this.reader.getFloat( getambient, 'a'));
	var getbackground = getillumination.getElementsByTagName('background')[0];
	background = new getRGBA(this.reader.getFloat( getbackground, 'r'),this.reader.getFloat( getbackground, 'g'),this.reader.getFloat( getbackground, 'b'),this.reader.getFloat( getbackground, 'a'));
    this.illumination = new Illumination(doublesided, local, ambient, background);
}


MySceneGraph.prototype.loadLights = function(rootElement) {
  var getLights = rootElement.getElementsByTagName('lights')[0];

    if (getLights == null){
        this.onXMLError("Error loading Lights. No Lights Tag");
        return 1;
    }

  
    var omniElements, lightElement, locationElement, location;
    var getOmniLights = getLights.getElementsByTagName('omni');
    
    var light, location;
    for(var i=0; i < getOmniLights.length; i++)
    {
        light = this.loadLightsCommon(getOmniLights[i]);
        var getLocation = getOmniLights[i].getElementsByTagName('location')[0];
        location = new getXYZW(this.reader.getFloat(getLocation, 'x'), this.reader.getFloat(getLocation, 'y'),
            this.reader.getFloat(getLocation, 'z'), this.reader.getFloat(getLocation, 'w'));
        this.omniLights.push(new OmniLight(light, location));
    }

    var spotElements, lightElement, angle, exponent, target, location;

    var getSpot = getLights.getElementsByTagName('spot');


    for(var i=0; i < getSpot.length; i++)
    {
         light = this.loadLightsCommon(getSpot[i]);
         angle = this.reader.getFloat(getSpot[i], 'angle');
         exponent = this.reader.getFloat(getSpot[i], 'exponent');
         var getTarget = getSpot[i].getElementsByTagName('target')[0];
         target = new getXYZ(this.reader.getFloat(getTarget, 'x'),this.reader.getFloat(getTarget, 'y'),this.reader.getFloat(getTarget, 'z'));
         var getLocation = getSpot[i].getElementsByTagName('location')[0];
         location = new getXYZ(this.reader.getFloat(getLocation, 'x'),this.reader.getFloat(getLocation, 'y'),this.reader.getFloat(getLocation, 'z'));

        this.spotLights.push(new SpotLight(light, angle*Math.PI/180, exponent, target, location));
    }
        

    if (this.omniLights.length == 0 && this.spotLights.length == 0)
        onXMLError("Error No lights defined.");
    

}


MySceneGraph.prototype.loadLightsCommon = function(lights) {
     var id, enabled, ambient, diffuse, specular;

    id = this.reader.getString(lights, 'id');
	enabled = this.reader.getBoolean(lights, 'enabled');
	var getAmbient = lights.getElementsByTagName('ambient')[0];
	ambient = new getRGBA(this.reader.getFloat(getAmbient, 'r'),this.reader.getFloat(getAmbient, 'g'),this.reader.getFloat(getAmbient, 'b'),this.reader.getFloat(getAmbient, 'a'));
   	var getDiffuse = lights.getElementsByTagName('diffuse')[0];
   	diffuse = new getRGBA(this.reader.getFloat(getDiffuse, 'r'),this.reader.getFloat(getDiffuse, 'g'),this.reader.getFloat(getDiffuse, 'b'),this.reader.getFloat(getDiffuse, 'a'));
    var getSpecular = lights.getElementsByTagName('specular')[0];
	specular = new getRGBA(this.reader.getFloat(getSpecular, 'r'),this.reader.getFloat(getSpecular, 'g'),this.reader.getFloat(getSpecular, 'b'),this.reader.getFloat(getSpecular, 'a'));
 
    return new Lights(id, enabled, ambient, diffuse, specular);
}


MySceneGraph.prototype.loadTextures = function(rootElement) {
    var getTextures =  rootElement.getElementsByTagName('textures')[0];
	if (getTextures == null){
        this.onXMLError("Error loading Textures. No textures Tag");
        return 1;
    }
    var texture = getTextures.getElementsByTagName('texture');
    var id, texturefile, lengthS, lengthT;
	for(var i = 0; i < texture.length; i++)
	{
		id = this.reader.getString(texture[i], 'id');
		texturefile = new CGFtexture(this.scene, this.reader.getString(texture[i], 'file'));
        lengthS = this.reader.getFloat(texture[i], 'length_s');
        lengthT = this.reader.getFloat(texture[i], 'length_t');

        this.textures[id] = new Texture(id, texturefile, lengthS, lengthT);
	}
}


MySceneGraph.prototype.loadMaterials = function(rootElement) {
    var getMaterials = rootElement.getElementsByTagName('materials')[0];

    if (getMaterials == null){
        this.onXMLError("Error loading Materials. No materials Tag");
        return 1;
    }

    getMaterial = getMaterials.getElementsByTagName('material');

    var id, emission,ambient, diffuse, specular, shininessElement, shininess;
	for(var i = 0; i < getMaterial.length; i++)
	{
		id = this.reader.getString(getMaterial[i], 'id');
		var getEmission = getMaterial[i].getElementsByTagName('emission')[0];
		emission =new getRGBA(this.reader.getFloat(getEmission, 'r'),this.reader.getFloat(getEmission, 'g'),this.reader.getFloat(getEmission, 'b'),this.reader.getFloat(getEmission, 'a'));
		var getAmbient = getMaterial[i].getElementsByTagName('ambient')[0];
		ambient =new getRGBA(this.reader.getFloat(getAmbient, 'r'),this.reader.getFloat(getAmbient, 'g'),this.reader.getFloat(getAmbient, 'b'),this.reader.getFloat(getAmbient, 'a'));
		var getDiffuse = getMaterial[i].getElementsByTagName('diffuse')[0];
		diffuse =new getRGBA(this.reader.getFloat(getDiffuse, 'r'),this.reader.getFloat(getDiffuse, 'g'),this.reader.getFloat(getDiffuse, 'b'),this.reader.getFloat(getDiffuse, 'a'));
		var getSpecular = getMaterial[i].getElementsByTagName('specular')[0];
		specular =new getRGBA(this.reader.getFloat(getSpecular,'r'),this.reader.getFloat(getSpecular,'g'),this.reader.getFloat(getSpecular,'b'),this.reader.getFloat(getSpecular,'a'));

		var getShininess = getMaterial[i].getElementsByTagName('shininess')[0];
		shininess = this.reader.getFloat(getShininess, 'value');
		
		var appearance = new CGFappearance(this.scene);
        appearance.setEmission(emission.r, emission.g, emission.b, emission.a);
        appearance.setAmbient(ambient.r, ambient.g, ambient.b, ambient.a);
        appearance.setDiffuse(diffuse.r, diffuse.g, diffuse.b, diffuse.a);
        appearance.setSpecular(specular.r, specular.g, specular.b, specular.a);
        appearance.setShininess(shininess);

        this.materials[id] = appearance;
	}
}


MySceneGraph.prototype.loadTranformations = function(rootElement) {
	

    var getTransformations = rootElement.getElementsByTagName('transformations')[0];
    if (getTransformations == null){
        this.onXMLError("Error loading Tranformations. No transformations Tag");
        return 1;
    }

    var getTransformation = getTransformations.getElementsByTagName('transformation');
    
	var id;
    for(var i=0; i < getTransformation.length; i++)
    {

    	id = this.reader.getString(getTransformation[i],'id');
    	 this.transformations[id] = this.getTranformationMatrix(getTransformation[i]);
    }
}


MySceneGraph.prototype.getTranformationMatrix = function(getTransformation) {
     var matrix = mat4.create();

    for (var i = 0; i < getTransformation.children.length ; i++) {
        var transformation = getTransformation.children[i];
            if(transformation.tagName == 'translate')
             {  var translateCoords;

               	translateCoords =new getXYZ(this.reader.getFloat(transformation,'x'),this.reader.getFloat(transformation,'y'),this.reader.getFloat(transformation,'z'));
                mat4.translate(matrix, matrix, [translateCoords.x,translateCoords.y,translateCoords.z]);
              }
            else if(transformation.tagName == 'rotate'){
                var rotationAxis, angle, rotation;

                rotationAxis = this.reader.getString(transformation, 'axis');
                angle = this.reader.getFloat(transformation, 'angle');

                if (rotationAxis == 'x') rotation = [1, 0, 0];
                else if (rotationAxis == 'y') rotation = [0, 1, 0];
                else if (rotationAxis == 'z') rotation = [0, 0, 1];

                mat4.rotate(matrix, matrix, angle*Math.PI/180, rotation);
            }

            else if(transformation.tagName == 'scale'){
                var scaleCoords;

                scaleCoords = new getXYZ(this.reader.getFloat(transformation,'x'),this.reader.getFloat(transformation,'y'),this.reader.getFloat(transformation,'z'));
                mat4.scale(matrix, matrix,[scaleCoords.x,scaleCoords.y,scaleCoords.z ]);

            }
    }

    return matrix;
}


MySceneGraph.prototype.loadPrimitives = function(rootElement) {
 var primitivesElement, primitiveElements, id, primitiveRef, primitiveName;

    var getPrimitives = rootElement.getElementsByTagName('primitives')[0];
    if (getPrimitives == null){
        this.onXMLError("Error loading primitives. No primitives Tag");
        return 1;
    }

    var getPrimitives = getPrimitives.getElementsByTagName('primitive');
    for(var i = 0; i < getPrimitives.length; i++)
    {
    	if(getPrimitives[i].children.length != 1){
    		this.onXMLError("Error loading primitives (more than one tag).");
            continue;
    	}

    	id = this.reader.getString(getPrimitives[i], 'id');
        primitiveTag = getPrimitives[i].children[0];
        primitiveName = primitiveTag.tagName;

        var primitive = this.createPrimitive(primitiveName, primitiveTag);
        if (primitive == null);

        this.nodes[id] = primitive;
    }
}


MySceneGraph.prototype.createPrimitive = function(primitiveName, primitiveTag) {
    var primitive;

    if (primitiveName== 'rectangle') {
    	var point1 = new getXY(this.reader.getFloat(primitiveTag, 'x1'), this.reader.getFloat(primitiveTag, 'y1'));
        var point2 = new getXY(this.reader.getFloat(primitiveTag, 'x2'), this.reader.getFloat(primitiveTag, 'y2'));

        primitive = new MyRectangle(this.scene, point1, point2);
    }

    else if(primitiveName == 'triangle'){
       	var point1 = new getXYZ(this.reader.getFloat(primitiveTag, 'x1'), this.reader.getFloat(primitiveTag, 'y1'), this.reader.getFloat(primitiveTag, 'z1'));
        var point2 = new getXYZ(this.reader.getFloat(primitiveTag, 'x2'), this.reader.getFloat(primitiveTag, 'y2'), this.reader.getFloat(primitiveTag, 'z2'));
       	var point3 = new getXYZ(this.reader.getFloat(primitiveTag, 'x3'), this.reader.getFloat(primitiveTag, 'y3'), this.reader.getFloat(primitiveTag, 'z3'));

    	primitive = new MyTriangle(this.scene, point1, point2, point3);
    }
	else if(primitiveName == 'cylinder'){
        var base = this.reader.getFloat(primitiveTag, 'base');
        var top = this.reader.getFloat(primitiveTag, 'top');
        var height = this.reader.getFloat(primitiveTag, 'height');
        var slices = this.reader.getInteger(primitiveTag, 'slices');
        var stacks = this.reader.getInteger(primitiveTag, 'stacks');
        primitive = new MyCylinder(this.scene, base, top, height, slices, stacks);
	}
     else if(primitiveName == 'sphere'){   
     	var radius = this.reader.getFloat(primitiveTag, 'radius');
        var slices = this.reader.getInteger(primitiveTag, 'slices');
        var stacks = this.reader.getInteger(primitiveTag, 'stacks');

        primitive = new MySphere(this.scene, radius, slices, stacks);
     }
	 else if(primitiveName == 'torus'){
     	var inner = this.reader.getFloat(primitiveTag, 'inner');
        var outer = this.reader.getFloat(primitiveTag, 'outer');
        var slices = this.reader.getInteger(primitiveTag, 'slices');
        var loops = this.reader.getInteger(primitiveTag, 'loops');

        primitive = new MyTorus(this.scene, inner, outer, slices, loops);
	 }
     else{
            this.onXMLError("Primitive is not valid.");
            return null;
    }

    return primitive;
}

MySceneGraph.prototype.loadAnimations = function(rootElement) {
	var getAnimations = rootElement.getElementsByTagName('animations')[0];
	if(getAnimations == null){
		this.onXMLError("Error loading animations. No animations Tag");
		return 1;
	}

	var getAnimation = getAnimations.getElementsByTagName('animation');
	var id, span, type;

	for(var i = 0; i < getAnimation.length; i++)
	{
		id = this.reader.getString(getAnimation[i], 'id');
		span = this.reader.getFloat(getAnimation[i], 'span');
		type = this.reader.getString(getAnimation[i], 'type');

		if(type == "linear")
		{
			var controlp;
			var controlPoints = [];
			var getcontrolPoint = getAnimation[i].getElementsByTagName('controlpoint');
			for(var j= 0; j < getcontrolPoint.length; j++)
			{
				controlPoints.push(new getXYZ(this.reader.getFloat(getcontrolPoint[j],'xx'),this.reader.getFloat(getcontrolPoint[j],'yy'),this.reader.getFloat(getcontrolPoint[j],'zz')));
			}
			this.animations[id] = new LinearAnimation(id, span, controlPoints);

		}
		else if(type == "circular")
		{
			var center,centerx, centery, centerz,vectCenter, radius, startang, rotang;
			centerx = this.reader.getFloat(getAnimation[i], 'centerx');
			centery = this.reader.getFloat(getAnimation[i], 'centery');
			centerz = this.reader.getFloat(getAnimation[i], 'centerz');
			center = new getXYZ(centerx, centery, centerz);
			radius = this.reader.getFloat(getAnimation[i], 'radius');
			startang = this.reader.getFloat(getAnimation[i], 'startang');
			rotang = this.reader.getFloat(getAnimation[i], 'rotang');

			this.animations[id] = new CircularAnimation(id,span, center, radius, startang, rotang);
		}
		else{
             this.onXMLError("Animation is not valid.");
             return 1;
   			}
	}
}


MySceneGraph.prototype.loadComponents = function(rootElement) {
    var getComponents = rootElement.getElementsByTagName('components')[0];

    if (getComponents == null){
        this.onXMLError("Can't load components");
        return 1;
    }


    var getComponent = getComponents.getElementsByTagName('component');

    var id, tranformation, materials, animation, texture, componentIDs, primitiveIDs;

    for (var i = 0; i < getComponent.length; i++) {
        id = this.reader.getString(getComponent[i], 'id');

        var getTransformation = getComponent[i].getElementsByTagName('transformation')[0];
        var transformationref = getTransformation.getElementsByTagName('transformationref');
        if (transformationref.length != 0) {
            tranformation = this.reader.getString(transformationref[0], 'id');

        } else { 
            tranformation = id + "texture";
            this.transformations[tranformation] = this.getTranformationMatrix(getTransformation);
        }

       
        var getMaterials = getComponent[i].getElementsByTagName('materials')[0];
        var getMaterial = getMaterials.getElementsByTagName('material');
        materials = new Array(getMaterial.length);
        for (var j = 0; j < getMaterial.length; j++) {
            materials[j] = this.reader.getString(getMaterial[j], 'id');
        }


  
        var getTexture = getComponent[i].getElementsByTagName('texture')[0];
        texture = this.reader.getString(getTexture, 'id');
		
		var getAnimation = getComponent[i].getElementsByTagName('animation');
		if(getAnimation.length > 0)
		{
			var getAnimationRef = getAnimation[0].getElementsByTagName('animationRef')[0];


			if(getAnimationRef.length >0)
			{
				var tmpanimation = new Array(getAnimationRef.length);
				var IDanimation;
				for(var k = 0; k < tmpanimation.length.length; k++)
				{
					IDanimation = this.reader.getString(getAnimationRef[k], 'id');
					tmpanimation[k] = this.animations[IDanimation];
				}
				console.log(tmpanimation);
				animation = new Animated(tmpanimation);
				
			}
			else
			{
				animation = null;
			}	

		}else
		{
			animation = null;
		}
		 

        var getChildren = getComponent[i].getElementsByTagName('children')[0];
        var ComponentRef = getChildren.getElementsByTagName('componentref');
        var primitiveRef = getChildren.getElementsByTagName('primitiveref');
        childrenIDs = new Array(ComponentRef.length + primitiveRef.length);
        for (var j = 0; j < ComponentRef.length; j++) {
            childrenIDs[j] = this.reader.getString(ComponentRef[j], 'id');

        }

        for (var j = ComponentRef.length; j < primitiveRef.length + ComponentRef.length; j++) {
            childrenIDs[j] = this.reader.getString(primitiveRef[j - ComponentRef.length], 'id');
        }

        this.nodes[id] = new Component(id, tranformation, materials, texture, childrenIDs,animation);
    }

}


MySceneGraph.prototype.onXMLError = function(message) {
    console.error("XML Loading Error: " + message);
    this.loadedOk = false;
};





MySceneGraph.prototype.displayGraph = function() {
    var textureStack = new Stack();
    var materialStack = new Stack();
    var transformationStack = new Stack();
    transformationStack.push(mat4.create());
    
    this.visitGraph(this.rootID, transformationStack, materialStack, textureStack);
}


MySceneGraph.prototype.visitGraph = function(root, transformationStack, materialStack, textureStack) {
    var node, currentTransformation;

    node = this.nodes[root];

    if (!(node instanceof Component)) { 
		this.scene.pushMatrix();

	if(node.animated != null)
    		this.scene.multMatrix(component.animated.getMatrix());
	
        this.scene.multMatrix(transformationStack.top());

	
        if(textureStack.top() != "none")
          materialStack.top().setTexture(textureStack.top());

        materialStack.top().apply();
        node.display();
        materialStack.top().setTexture(null);

        this.scene.popMatrix();
        
    } else { 



        currentTransformation = mat4.create();
        mat4.multiply(currentTransformation, transformationStack.top(),this.transformations[node.transformationID]);
        transformationStack.push(currentTransformation);

        var material = node.materialIDs[this.scene.materialIndex % node.materialIDs.length];
          if(material == "inherit")
            materialStack.push(materialStack.top());
          else
            materialStack.push(this.materials[material]);

        var texture = node.textureID;
        if (texture == "inherit")
            textureStack.push(textureStack.top());
        else if (texture == "none")
            textureStack.push("none");
        else
            textureStack.push(this.textures[texture].texture);


        for (var i = 0; i < node.childrenIDs.length; i++) {
            this.visitGraph(node.childrenIDs[i], transformationStack, materialStack, textureStack);
        }

        transformationStack.pop();
        materialStack.pop();
        textureStack.pop();

      }


}
