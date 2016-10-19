
function MySceneGraph(filename, scene) {
	this.loadedOk = null;
	

	// Establish bidirectional references between scene and graph
	this.scene = scene;
	scene.graph=this;
	
	this.rootID;
	this.axis_length;
	this.perspectives = [];
	this.illumination;
	this.omnis = [];
	this.spots = [];
	this.textures = {};
	this.materials = {};
	this.transformations = {};
	this.primitives = [];
	this.components = [];
	this.node = {};
	
		
	// File reading 
	this.reader = new CGFXMLreader();

	/*
	 * Read the contents of the xml file, and refer to this class for loading and error handlers.
	 * After the file is read, the reader calls onXMLReady on this object.
	 * If any error occurs, the reader calls onXMLError on this object, with an error message
	 */
	 
	this.reader.open('scenes/'+filename, this);
}

/*
 * Callback to be executed after successful reading
 */
MySceneGraph.prototype.onXMLReady=function(){
	console.log("XML Loading finished.");
	var rootElement = this.reader.xmlDoc.documentElement;
	
	// Here should go the calls for different functions to parse the various blocks
	if(this.correctOrder(rootElement))
		return;
	
	if(this.parseScene(rootElement))
		return;
	
	if(this.parseViews(rootElement))
		return ;
	
	if(this.parseIllumination(rootElement))
		return;
	
	if(this.parseLights(rootElement))
		return;
	
	if(this.parseTextures(rootElement))
		return;
	
	if(this.parseMaterial(rootElement))
		return;
	
	if(this.parseTransformations(rootElement))
		return;
	
	if(this.parsePrimitives(rootElement))
		return;
	
	if(this.parseComponents(rootElement))
		return;
	
	// As the graph loaded ok, signal the scene so that any additional initialization depending on the graph can take place
	
	this.scene.onGraphLoaded();
	this.loadedOk=true;
};
	
/*
 * Callback to be executed on any read error
 */
 MySceneGraph.prototype.correctOrder=function(rootElement){		
	/*	check the correct order of DSX	*/
	 
	var childs = rootElement.children;
	
	if(childs.length != 9){
		console.error("Number Tags = 9");
		return 1;
	}
	
	if (childs[0].tagName != "scene")
        console.warn("scene is not the first element on the DSX Tag");

    if (childs[1].tagName != "views")
        console.warn("views is not the second element on the DSX Tag");

    if (childs[2].tagName != "illumination")
        console.warn("illumination is not the third element on the DSX Tag");

    if (childs[3].tagName != "lights")
        console.warn("lights is not the fourth element on the DSX Tag");

    if (childs[4].tagName != "textures")
        console.warn("textures is not the fifth element on the DSX Tag");

    if (childs[5].tagName != "materials")
        console.warn("materials is not the sixth element on the DSX Tag");

    if (childs[6].tagName != "transformations")
        console.warn("transformations is not the seventh element on the DSX Tag");

    if (childs[7].tagName != "primitives")
        console.warn("primitives is not the oith element on the DSX Tag");

    if (childs[8].tagName != "components")
        console.warn("components is not the ninth element on the DSX Tag");

    return 0;
 }

MySceneGraph.prototype.parseScene=function(rootElement){

	var scene = rootElement.getElementsByTagName('scene')[0];
	if(scene == null){
		this.onXMLError("'scene' element is missing.");
		return 1;
	}
	
	this.rootID = this.reader.getString(scene, 'root');
	
	this.axis_length = this.reader.getFloat(scene, 'axis_length');	
};

MySceneGraph.prototype.parseViews=function(rootElement){
	var getViews = rootElement.getElementsByTagName('views')[0];
	if(getViews == null){
		this.onXMLError("'views' element is missing.");
		return 1;
	}
	
	var perspTemp = getViews.getElementsByTagName('perspective');
	
	var id, near, far, angle;
	var from, to;
	for(var i=0; i<perspTemp.length; i++){
		id = this.reader.getString(perspTemp[i],'id');
		near = this.reader.getFloat(perspTemp[i],'near');
		far = this.reader.getFloat(perspTemp[i],'far');
		angle = this.reader.getFloat(perspTemp[i],'angle');
		
		var fromElem = perspTemp[i].getElementsByTagName('from')[0];
		var toElem = perspTemp[i].getElementsByTagName('to')[0];
		
		from = new getXYZ(	this.reader.getFloat(fromElem,'x'),
							this.reader.getFloat(fromElem,'y'),
							this.reader.getFloat(fromElem,'z'));
							
		to = new getXYZ(	this.reader.getFloat(toElem,'x'),
							this.reader.getFloat(toElem,'y'),
							this.reader.getFloat(toElem,'z'));
		
		//this.perspectives[i] = new InfoPerspective(id, near, far, angle, from, to);
		//this.perspectives.push(new InfoPerspective(id, near, far, angle, from, to);
		this.perspectives.push(new CGFcamera(	angle*Math.PI/180, near, far, 
												vec3.fromValues(from.x, from.y, from.z),
												vec3.fromValues(to.x, to.y, to.z)
											));
	}
};

MySceneGraph.prototype.parseIllumination=function(rootElement){

	var getIllumination = rootElement.getElementsByTagName('illumination')[0];

	if(getIllumination == null){
		this.onXMLError("'illumination' element is missing.");
		return 1;
	}
	
	var doublesided = this.reader.getBoolean(getIllumination, 'doublesided');
	var local = this.reader.getBoolean(getIllumination, 'local');
	 
	var ambientTmp = getIllumination.getElementsByTagName('ambient')[0];
    var ambient = new getRGBA(	this.reader.getFloat(ambientTmp,'r'), 
								this.reader.getFloat(ambientTmp,'g'), 
								this.reader.getFloat(ambientTmp,'b'),
								this.reader.getFloat(ambientTmp,'a'));
    
	var backgroundTmp = getIllumination.getElementsByTagName('background')[0];
    var background = new getRGBA(	this.reader.getFloat(backgroundTmp, 'r'), 
									this.reader.getFloat(backgroundTmp, 'g'), 
									this.reader.getFloat(backgroundTmp,'b'),
									this.reader.getFloat(backgroundTmp,'a'));	 
	 
	this.illumination = new Illumination(doublesided, local, ambient, background);

};

MySceneGraph.prototype.parseLights=function(rootElement){
	var getLights = rootElement.getElementsByTagName('lights')[0];
	if(getLights == null){
		this.onXMLError("'lights' element is missing.");
		return 1;
	}
	
	var omniTemp, light, location;
	
	omniTemp = getLights.getElementsByTagName('omni');
	for(var i=0; i < omniTemp.length;i++)
	{
		light = this.createLight(omniTemp[i]);
		
		var locationElem = omniTemp[i].getElementsByTagName('location')[0];
		location = new getXYZW(	this.reader.getFloat(locationElem,'x'),
								this.reader.getFloat(locationElem,'y'),
								this.reader.getFloat(locationElem,'z'),
								this.reader.getFloat(locationElem,'w'));
	
		//this.omni[i] = new OmniLight(new Lights(id,enabled,ambient,diffuse,specular), location); 
		this.omnis.push(new OmniLight(light, location));
	}
	
	var spotTemp = getLights.getElementsByTagName('spot');
	
	var id, enabled, angle, exponent, target;
	location = null;
	light = null;
	
	for(var i=0; i < spotTemp.length; i++)
	{
		light = this.createLight(spotTemp[i]);
		
		angle = this.reader.getFloat(spotTemp[i],'angle');
		exponent = this.reader.getFloat(spotTemp[i],'exponent');
		
		var targetElem = spotTemp[i].getElementsByTagName('target')[0];
		target = new getXYZ(this.reader.getFloat(targetElem,'x'),
							this.reader.getFloat(targetElem,'y'),
							this.reader.getFloat(targetElem,'z'));
				
		var locationElem = spotTemp[i].getElementsByTagName('location')[0];
		location = new getXYZ(	this.reader.getFloat(locationElem,'x'),
								this.reader.getFloat(locationElem,'y'),
								this.reader.getFloat(locationElem,'z'));
	
		this.spots.push(new SpotLight(light, angle * Math.PI/180.0, exponent, target, location)); 
		//this.spots.push(new SpotLight(light, angle, exponent, target, location));
	}
	
	if(this.omnis.length == 0 && this.spots.length == 0)
		onXMLError("No lights defined!");
};

MySceneGraph.prototype.createLight=function(lights){
	var id, enabled, ambient, diffuse, specular;
	
	id=this.reader.getString(lights,'id');
	enabled = this.reader.getBoolean(lights,'enabled');
	
	var ambientElem = lights.getElementsByTagName('ambient')[0];
	ambient = new getRGBA(	this.reader.getFloat(ambientElem,'r'),
							this.reader.getFloat(ambientElem,'g'),
							this.reader.getFloat(ambientElem,'b'),
							this.reader.getFloat(ambientElem,'a'));
	
	var diffuseElem = lights.getElementsByTagName('diffuse')[0];
	diffuse = new getRGBA(	this.reader.getFloat(diffuseElem,'r'),
							this.reader.getFloat(diffuseElem,'g'),
							this.reader.getFloat(diffuseElem,'b'),
							this.reader.getFloat(diffuseElem,'a'));
	
	var specularElem = lights.getElementsByTagName('specular')[0];
	specular = new getRGBA(	this.reader.getFloat(specularElem,'r'),
							this.reader.getFloat(specularElem,'g'),
							this.reader.getFloat(specularElem,'b'),
							this.reader.getFloat(specularElem,'a'));
	
	return (	new Lights(id, enabled, ambient, diffuse, specular)	);
}

MySceneGraph.prototype.parseTextures = function(rootElement){
	var getTextures = rootElement.getElementsByTagName('textures')[0];
	if(getTextures == null){
		this.onXMLError("'textures' element is missing.");
		return 1;
	}
	
	var texturesTemp = getTextures.getElementsByTagName('texture');
	
	var id, texturefile, length_s, length_t;
	for(var i=0; i<texturesTemp.length; i++)
	{		
		id = this.reader.getString(texturesTemp[i],'id');
		texturefile = new CGFtexture(this.scene, this.reader.getString(texturesTemp[i], 'file'));
		length_s=this.reader.getFloat(texturesTemp[i],'length_s');
		length_t=this.reader.getFloat(texturesTemp[i],'length_t');
		
		
		this.textures[id] = new Texture(id,texturefile,length_s,length_t); 
	}	
};

MySceneGraph.prototype.parseMaterial = function(rootElement){
	var getMaterials = rootElement.getElementsByTagName('materials')[0];
	if(getMaterials == null){
		this.onXMLError("'materials' element is missing.");
		return 1;
	}
	
	var materialTemp = getMaterials.getElementsByTagName('material');
	
	var id, emission, ambient, diffuse, specular, shininess;
	for(var i=0; i < materialTemp.length; i++)
	{
		
		id = this.reader.getString(materialTemp[i],'id');
	
		var emissionElem = materialTemp[i].getElementsByTagName('emission')[0];
		emission = new getRGBA(	this.reader.getFloat(emissionElem,'r'),
								this.reader.getFloat(emissionElem,'g'),
								this.reader.getFloat(emissionElem,'b'),
								this.reader.getFloat(emissionElem,'a'));
								
		var ambientElem = materialTemp[i].getElementsByTagName('ambient')[0];
		ambient = new getRGBA(	this.reader.getFloat(ambientElem,'r'),
								this.reader.getFloat(ambientElem,'g'),
								this.reader.getFloat(ambientElem,'b'),
								this.reader.getFloat(ambientElem,'a'));
								
		var diffuseElem = materialTemp[i].getElementsByTagName('diffuse')[0];
		diffuse = new getRGBA(	this.reader.getFloat(diffuseElem,'r'),
								this.reader.getFloat(diffuseElem,'g'),
								this.reader.getFloat(diffuseElem,'b'),
								this.reader.getFloat(diffuseElem,'a'));
								
		var specularElem = materialTemp[i].getElementsByTagName('specular')[0];
		specular = new getRGBA(	this.reader.getFloat(specularElem,'r'),
								this.reader.getFloat(specularElem,'g'),
								this.reader.getFloat(specularElem,'b'),
								this.reader.getFloat(specularElem,'a'));
		
		var shininessElem = materialTemp[i].getElementsByTagName('shininess')[0];
		shininess = this.reader.getFloat(shininessElem, 'value');
		
		var appearance = new CGFappearance(this.scene);
		appearance.setEmission(emission.r, emission.g, emission.b, emission.a);
        appearance.setAmbient(ambient.r, ambient.g, ambient.b, ambient.a);
        appearance.setDiffuse(diffuse.r, diffuse.g, diffuse.b, diffuse.a);
        appearance.setSpecular(specular.r, specular.g, specular.b, specular.a);
        appearance.setShininess(shininess);
		
		this.materials[id] = appearance;
	}
};

MySceneGraph.prototype.parseTransformations = function(rootElement){
	var getTransformations = rootElement.getElementsByTagName('transformations')[0];
	if(getTransformations == null){
		this.onXMLError("'transformations' element is missing.");
		return 1;
	}
	
	var transformationsTemp = getTransformations.getElementsByTagName('transformation');
	
	var id, transformationName;
	for(var i=0; i<transformationsTemp.length; i++){		
		
		id = this.reader.getString(transformationsTemp[i],'id');
		
		this.transformations[id] = this.getMatrix(transformationsTemp[i]);		
	}
}

MySceneGraph.prototype.getMatrix = function(transformationElem){
	var mx = mat4.create();
	
	for(var i=0; i<transformationElem.length; i++){
		var transformation = transformationElem.children[i];
		var transformationName = transformation.tagName;
		
		switch(transformationName){
			case 'translate':
					var translate;

					translate = new getXYZ(	this.reader.getFloat(transformation,'x'),
											this.reader.getFloat(transformation,'y'),
											this.reader.getFloat(transformation,'z'));
										
										
					mat4.translate(mx, mx, [translate.x,translate.y,translate.z]);
					break;
			case 'rotate':
					var AxisRotation, angleRotation, rotation;

					AxisRotation = this.reader.getString(transformation, 'axis');
					angleRotation = this.reader.getFloat(transformation, 'angle');

					if (AxisRotation == 'x') 		
						rotation = [1,0,0];
					else if (AxisRotation == 'y') 	
						rotation = [0,1,0];
					else if (AxisRotation == 'z') 	
						rotation = [0,0,1];
					

					mat4.rotate(mx, mx, angleRotation*Math.PI/180, rotation);
					break;
			case 'scale':
					var scale;

					scale = new getXYZ(	this.reader.getFloat(transformation,'x'),
										this.reader.getFloat(transformation,'y'),
										this.reader.getFloat(transformation,'z'));
				
					mat4.scale(mx, mx, [scale.x,scale.y,scale.z]);
					break;
		}
	}
	
	return mx;
}

MySceneGraph.prototype.parsePrimitives = function(rootElement){
	var getPrimitives = rootElement.getElementsByTagName('primitives')[0];
	if(getPrimitives == null){
		onXMLError("'primitives' element is null");
		return 1;
	}
	
	var primitivesTemp = getPrimitives.getElementsByTagName('primitive');
	
	var id, primitiveName, primitiveElem;
	for(var i=0; i<primitivesTemp.length; i++){
		if(primitivesTemp[i].children.length != 1){
			this.onXMLError("Error loading primitives (only one tag)!");
			continue;
		}
		
		id = this.reader.getString(primitivesTemp[i], 'id');
		
		primitiveElem = primitivesTemp[i].children[0];
		primitiveName = primitiveElem.tagName;
		
		var prim = this.createPrimitive(primitiveElem, primitiveName);
		//condição para caso prim seja vazio
		
		this.node[id] = prim;
		
	}
}

MySceneGraph.prototype.createPrimitive = function(primitiveElem, primitiveName){
	var prim;
	
	switch(primitiveName){
		case 'rectangle':
			var p1 = new getXY(	this.reader.getFloat(primitiveElem, 'x1'), 
								this.reader.getFloat(primitiveElem, 'y1'));
			var p2 = new getXY(	this.reader.getFloat(primitiveElem, 'x2'), 
								this.reader.getFloat(primitiveElem, 'y2'));
				
			prim = new MyRectangle(this.scene, p1,p2);			

			break;	
		case 'triangle':
			var p1 = new getXYZ(this.reader.getFloat(primitiveElem, 'x1'),
								this.reader.getFloat(primitiveElem, 'y1'),
								this.reader.getFloat(primitiveElem, 'z1'));
			var p2 = new getXYZ(this.reader.getFloat(primitiveElem, 'x2'),
								this.reader.getFloat(primitiveElem, 'y2'),
								this.reader.getFloat(primitiveElem, 'z2'));
			var p3 = new getXYZ(this.reader.getFloat(primitiveElem, 'x3'),
								this.reader.getFloat(primitiveElem, 'y3'),
								this.reader.getFloat(primitiveElem, 'z3'));
								
			prim = new MyTriangle(this.scene, p1,p2,p3);
		
			
			break;
		case 'cylinder':
			var base = this.reader.getFloat(primitiveElem, 'base');
			var top = this.reader.getFloat(primitiveElem, 'top');
			var height = this.reader.getFloat(primitiveElem, 'height');
			var slices = this.reader.getInteger(primitiveElem, 'slices');
			var stacks = this.reader.getInteger(primitiveElem, 'stacks');
			
			prim = new MyCylinder(this.scene, base, top, height, slices, stacks);
			
			break;
		case 'sphere':
			var radius = this.reader.getFloat(primitiveElem, 'radius');
			var slices = this.reader.getInteger(primitiveElem, 'slices');
			var stacks = this.reader.getInteger(primitiveElem, 'stacks');
			
			prim = new MySphere(this.scene, radius, slices, stacks);
			
			break;
		case 'torus':
			var inner = this.reader.getFloat(primitiveElem, 'inner');
			var outer = this.reader.getFloat(primitiveElem, 'outer');
			var slices = this.reader.getInteger(primitiveElem, 'slices');
			var loops = this.reader.getInteger(primitiveElem, 'loops');
			
			prim = new MyTorus(this.scene, inner, outer, slices, loops);
			
			break;
		default:
			this.onXMLError("load 'primitives' fail");			
			return null;
		
		
	}
	return prim;
}

MySceneGraph.prototype.parseComponents = function(rootElement){
	var getComponents = rootElement.getElementsByTagName('components')[0];

	if (getComponents == null){
		this.onXMLError("'Component' element is null");
		return 1;
	}
	
	var componentsTemp = getComponents.getElementsByTagName('component');
	
	var id, transformation, mat, texture;
	
	for(var i=0; i<componentsTemp.length; i++){
		id = this.reader.getString(componentsTemp[i],'id');
		
		var transformationTemp = componentsTemp[i].getElementsByTagName('transformation')[0];
		var transformationRef = transformationTemp.getElementsByTagName('transformationref');
		
		if(transformationRef.length != 0){
			transformation = this.reader.getString(transformationRef[0],'id');
		}
		else{
			transformation = id + "transf";
			this.transformations[transformation] = this.getMatrix(transformationTemp);
		}
		
		
		//materials
		var materialsTemp = componentsTemp[i].getElementsByTagName('materials')[0];
		var materialRef = materialsTemp.getElementsByTagName('material');
		
		var mat = new Array(materialRef.length);
		
		for(var k=0; k<materialRef.length; k++){
			mat[k] = this.reader.getString(materialRef[k],'id');
		}
		
		//textures
		var texturesTemp = componentsTemp[i].getElementsByTagName('texture')[0];
		texture = this.reader.getString(texturesTemp,'id');
		
		//children
		var childrensTemp = componentsTemp[i].getElementsByTagName('children')[0];
		var componentName = childrensTemp.getElementsByTagName('componentref');
		var primitivName = childrensTemp.getElementsByTagName('primitiveref');
		
		var childrenIDs = new Array(componentName.length+primitivName.length);
		for(var t=0;t<componentName.length;t++)
			childrenIDs[t]  = this.reader.getString(componentName[t],'id');
		
		for(var t=componentName.length; t<(componentName.length+primitivName.length); t++)
			childrenIDs[t] = this.reader.getString(primitivName[t-componentName.length],'id');
		
		this.node[id] = new Component(id, transformation, mat, texture, childrenIDs);
		
		//console.log(mat);
	}
}

MySceneGraph.prototype.displayGraph = function()
{
	var stackTextures = new Stack();
	var stackMaterials = new Stack();
	
	var stackTransformations = new Stack();
	stackTransformations.push(mat4.create());
	
	this.parseGraph(this.rootID, stackTextures, stackMaterials, stackTransformations);
}

MySceneGraph.prototype.parseGraph = function(root, stackTextures, stackMaterials, stackTransformations){
	var node, currentTransformation;
	
	node = this.nodes[root]; //Erro aqui
	
	if(node instanceof Component){
		currentTransformation = mat4.create();
		mat4.multiply(currentTransformation, stackTransformations.top(), this.transformations[node.idTransformation]);
		stackTransformations.push(currentTransformation);
		
		var materialID = node.idMaterial[this.scene.materialIndex % node.idMaterial.length];
		if(materialID == "inherit")
			stackMaterials.push(stackMaterials.top());
		else
			stackMaterials.push(this.materials[materialID]);
		
		var textureID = node.idTexture;
		if(textureID == "inherit")
			stackTextures.push(stackTextures.top());
		else
			stackTextures.push(this.textures[textureID]);
		
		for(var i=0; i<node.childrenIDs.length; i++)
			this.parseGraph(node.childrenIDs, stackTextures, stackMaterials, stackTransformations);
		
		stackTextures.pop();
		stackMaterials.pop();
		stackTransformations.pop();
	}
	else{
		this.scene.pushMatrix();
		this.scene.multMatrix(stackTransformations.top());
		
		if(stackTextures.top() != "none")
			stackMaterials.top.setTexture(stackTextures.top());
		
		stackMaterials.top().apply();
		node.display();
		stackMaterials.top().setTexture(null);
		
		this.scene.popMatrix();
	}
}

MySceneGraph.prototype.onXMLError=function (message) {
	console.error("XML Loading Error: "+message);	
	this.loadedOk=false;
};

