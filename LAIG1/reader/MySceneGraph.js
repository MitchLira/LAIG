
function MySceneGraph(filename, scene) {
	this.loadedOk = null;
	

	// Establish bidirectional references between scene and graph
	this.scene = scene;
	scene.graph=this;
	
	this.rootID;
	this.axis_length;
	this.perspectives = [];
	this.illumination;
	this.omni = [];
	this.spot = [];
	this.texture = {};
	this.material = {};
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
 MySceneGraph.prototype.correctOrder=fucntion(rootElement){		
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
	var views = rootElement.getElementsByTagName('views')[0];
	if(views == null){
		this.onXMLError("'views' element is missing.");
	}
	
	var perspTemp = views.getElementsByTagName('perspective');
	this.perspectives = new Array(perspTemp.length);
	
	var id, near, far, angle;
	var from, to;
	for(var i=0; i<perspTemp.length; i++){
		id = this.reader.getString(perspTemp[i],'id');
		near = this.reader.getFloat(perspTemp[i],'near');
		far = this.reader.getFloat(perspTemp[i],'far');
		angle = this.reader.getFloat(perspTemp[i],'angle');
		
		var elemFrom = perspTemp[i].getElementsByTagName('from')[0];
		var elemTo = perspTemp[i].getElementsByTagName('to')[0];
		
		if(elemFrom != null){
			from = new getXYZ(	this.reader.getFloat(elemFrom,'x'),
								this.reader.getFloat(elemFrom,'y'),
								this.reader.getFloat(elemFrom,'z'));
		}
							
		if(elemTo != null){
			to = new getXYZ(	this.reader.getFloat(elemTo,'x'),
								this.reader.getFloat(elemTo,'y'),
								this.reader.getFloat(elemTo,'z'));
		}
		
		this.perspectives[i] = new InfoPerspective(id, near, far, angle, from, to);
	}
};

MySceneGraph.prototype.parseIllumination=function(rootElement){

	var illumination = rootElement.getElementsByTagName('illumination')[0];

	if(illumination == null){
		this.onXMLError("'illumination' element is missing.");
	}
	var doublesided = this.reader.getBoolean(illumination, 'doublesided');
	var local = this.reader.getBoolean(illumination, 'local');
	 
	var ambtmp = illumination.getElementsByTagName('ambient')[0];
    var ambient = new getRGBA(	this.reader.getFloat(ambtmp,'r'), 
								this.reader.getFloat(ambtmp,'g'), 
								this.reader.getFloat(ambtmp,'b'),
								this.reader.getFloat(ambtmp,'a'));
    
	var backtmp = illumination.getElementsByTagName('background')[0];
    var background = new getRGBA(	this.reader.getFloat(backtmp, 'r'), 
									this.reader.getFloat(backtmp, 'g'), 
									this.reader.getFloat(backtmp,'b'),
									this.reader.getFloat(backtmp,'a'));	 
	 
	this.illumination = new Illumination(doublesided, local, ambient, background);

};

MySceneGraph.prototype.parseLights=function(rootElement){
	var lights = rootElement.getElementsByTagName('lights')[0];
	if(lights == null)
		this.onXMLError("'lights' element is missing.");
	
	var omnitmp = lights.getElementsByTagName('omni');
	this.omni = new Array(omnitmp.length);
	
	var id, enabled, location, ambient, diffuse, specular;
	for(var i=0; i < omnitmp.length;i++)
	{
		//console.log("Iteracao: " + i + "\n");
		
		id=this.reader.getString(omnitmp[i],'id');
		enabled = this.reader.getBoolean(omnitmp[i],'enabled');
		
		//console.log("omni: \n" + "id: " + id + " enabled: " + enabled + "\n");
		
		var elemlocation = omnitmp[i].getElementsByTagName('location')[0];
		if(elemlocation != null){
			location = new getXYZW(	this.reader.getFloat(elemlocation,'x'),
									this.reader.getFloat(elemlocation,'y'),
									this.reader.getFloat(elemlocation,'z'),
									this.reader.getFloat(elemlocation,'w'));
								
		//console.log("location: " + location.x + " " + location.y  + " " + location.z  + " " + location.w + "\n");
		}
		
		var elemambient = omnitmp[i].getElementsByTagName('ambient')[0];
		if(elemambient != null){
			ambient = new getRGBA(	this.reader.getFloat(elemambient,'r'),
									this.reader.getFloat(elemambient,'g'),
									this.reader.getFloat(elemambient,'b'),
									this.reader.getFloat(elemambient,'a'));
								
		//console.log("ambient: " + ambient.r + " " + ambient.g + " " + ambient.b + " " + ambient.a + "\n");
		}
		
		var elemdiffuse = omnitmp[i].getElementsByTagName('diffuse')[0];
		if(elemdiffuse != null){
			diffuse = new getRGBA(	this.reader.getFloat(elemdiffuse,'r'),
									this.reader.getFloat(elemdiffuse,'g'),
									this.reader.getFloat(elemdiffuse,'b'),
									this.reader.getFloat(elemdiffuse,'a'));
		
		//console.log("diffuse: " + diffuse.r + " " + diffuse.g + " " + diffuse.b + " " + diffuse.a + "\n");
		}
		
		var elemspecular = omnitmp[i].getElementsByTagName('specular')[0];
		if(elemspecular != null){
			specular = new getRGBA(	this.reader.getFloat(elemspecular,'r'),
									this.reader.getFloat(elemspecular,'g'),
									this.reader.getFloat(elemspecular,'b'),
									this.reader.getFloat(elemspecular,'a'));
								
		//console.log("specular: " + specular.r + " " + specular.g + " " + specular.b + " " + specular.a + "\n");
		}
							
	
		this.omni[i] = new OmniLight(new Lights(id,enabled,ambient,diffuse,specular), location); 
	}
	
	var spottmp = lights.getElementsByTagName('spot');
	this.spot = new Array(spottmp.length);
	
	var id, enabled, angle, exponent, target;
	for(var i=0; i < spottmp.length; i++)
	{
		//console.log("Iteracao: " + i + "\n");
		
		id=this.reader.getString(spottmp[i],'id');
		enabled = this.reader.getBoolean(spottmp[i],'enabled');
		angle = this.reader.getFloat(spottmp[i],'angle');
		exponent = this.reader.getFloat(spottmp[i],'exponent');
		
		//console.log("spot: \n" + "id: " + id + " enabled: " + enabled + " angle: " + angle + " exponent: " + exponent + "\n");
		
		var elemtarget = spottmp[i].getElementsByTagName('target')[0];
		if(elemtarget != null){
			target = new getXYZ(this.reader.getFloat(elemtarget,'x'),
								this.reader.getFloat(elemtarget,'y'),
								this.reader.getFloat(elemtarget,'z'));
							
		//console.log("target: " + target.x + " " + target.y + " " + target.z + "\n");
		}
		
		var elemlocation = spottmp[i].getElementsByTagName('location')[0];
		if(elemlocation != null){
			location = new getXYZ(	this.reader.getFloat(elemlocation,'x'),
									this.reader.getFloat(elemlocation,'y'),
									this.reader.getFloat(elemlocation,'z'));
								
		//console.log("location: " + location.x + " " + location.y  + " " + location.z  + "\n");
		}
		
		var elemambient = spottmp[i].getElementsByTagName('ambient')[0];
		if(elemambient != null){
			ambient = new getRGBA(	this.reader.getFloat(elemambient,'r'),
									this.reader.getFloat(elemambient,'g'),
									this.reader.getFloat(elemambient,'b'),
									this.reader.getFloat(elemambient,'a'));
		
		//console.log("ambient: " + ambient.r + " " + ambient.g + " " + ambient.b + " " + ambient.a + "\n");
		}
		
		var elemdiffuse = spottmp[i].getElementsByTagName('diffuse')[0];
		if(elemdiffuse != null){
			diffuse = new getRGBA(	this.reader.getFloat(elemdiffuse,'r'),
									this.reader.getFloat(elemdiffuse,'g'),
									this.reader.getFloat(elemdiffuse,'b'),
									this.reader.getFloat(elemdiffuse,'a'));
								
		//console.log("diffuse: " + diffuse.r + " " + diffuse.g + " " + diffuse.b + " " + diffuse.a + "\n");
		}
			
		var elemspecular = spottmp[i].getElementsByTagName('specular')[0];
		if(elemspecular != null){
			specular = new getRGBA(	this.reader.getFloat(elemspecular,'r'),
									this.reader.getFloat(elemspecular,'g'),
									this.reader.getFloat(elemspecular,'b'),
									this.reader.getFloat(elemspecular,'a'));
								
		//console.log("specular: " + specular.r + " " + specular.g + " " + specular.b + " " + specular.a + "\n");
		}
	
		this.omni[i] = new SpotLight(new Lights(id,enabled,ambient,diffuse,specular), angle * Math.PI/180.0, exponent, target, location); 
	}
};

MySceneGraph.prototype.parseTextures = function(rootElement){
	var textures, textureElem;
	var textures = rootElement.getElementsByTagName('textures')[0];
	if(textures == null){
		this.onXMLError("'textures' element is missing.");
	}
	
	var textureTemp = textures.getElementsByTagName('texture');

	
	var id, texturefile, length_s, length_t;
	for(var i=0; i<textureTemp.length; i++)//(var textureElem of textureTemp)
	{
		//console.log("Iteracao " + i + "\n");
		
		id = this.reader.getString(textureTemp[i],'id');
		texturefile = new CGFtexture(this.scene, this.reader.getString(textureTemp[i], 'file'));
		length_s=this.reader.getFloat(textureTemp[i],'length_s');
		length_t=this.reader.getFloat(textureTemp[i],'length_t');
		
		
		this.texture[id] = new Texture(id,texturefile,length_s,length_t); 
	}	
};

MySceneGraph.prototype.parseMaterial = function(rootElement){
	var materials = rootElement.getElementsByTagName('materials')[0];
	if(materials == null){
		this.onXMLError("'materials' element is missing.");
	}
	
	var materialTemp = materials.getElementsByTagName('material');
	
	var id, emission, ambient, diffuse, specular, shininess;
	for(var i=0; i < materialTemp.length; i++)
	{
		
		id = this.reader.getString(materialTemp[i],'id');
	
		var elememission = materialTemp[i].getElementsByTagName('emission')[0];
		emission = new getRGBA(	this.reader.getFloat(elememission,'r'),
								this.reader.getFloat(elememission,'g'),
								this.reader.getFloat(elememission,'b'),
								this.reader.getFloat(elememission,'a'));
								
		var elemambient = materialTemp[i].getElementsByTagName('ambient')[0];
		ambient = new getRGBA(	this.reader.getFloat(elemambient,'r'),
									this.reader.getFloat(elemambient,'g'),
									this.reader.getFloat(elemambient,'b'),
									this.reader.getFloat(elemambient,'a'));
								
		var elemdiffuse = materialTemp[i].getElementsByTagName('diffuse')[0];
		diffuse = new getRGBA(	this.reader.getFloat(elemdiffuse,'r'),
								this.reader.getFloat(elemdiffuse,'g'),
								this.reader.getFloat(elemdiffuse,'b'),
								this.reader.getFloat(elemdiffuse,'a'));
								
		var elemspecular = materialTemp[i].getElementsByTagName('specular')[0];
		specular = new getRGBA(	this.reader.getFloat(elemspecular,'r'),
								this.reader.getFloat(elemspecular,'g'),
								this.reader.getFloat(elemspecular,'b'),
								this.reader.getFloat(elemspecular,'a'));
		
		var elemshininess = materialTemp[i].getElementsByTagName('shininess')[0];
		shininess = this.reader.getFloat(elemshininess, 'value');
		
		var appearance = new CGFappearance(this.scene);
		appearance.setEmission(emission.r, emission.g, emission.b, emission.a);
        appearance.setAmbient(ambient.r, ambient.g, ambient.b, ambient.a);
        appearance.setDiffuse(diffuse.r, diffuse.g, diffuse.b, diffuse.a);
        appearance.setSpecular(specular.r, specular.g, specular.b, specular.a);
        appearance.setShininess(shininess);
		
		this.material[id] = appearance;
	}
};

MySceneGraph.prototype.parseTransformations = function(rootElement){
	var transforms = rootElement.getElementsByTagName('transformations')[0]; // transformationsElement
	if(transforms == null)
		this.onXMLError("'transformations' element is missing.");
	
	var transformsTemp = transforms.getElementsByTagName('transformation'); //transformationElements
	this.transformations = new Array(transformsTemp.length);
	
	var id, transformationName;
	for(var i=0; i<transformsTemp.length; i++){		
		
		id = this.reader.getString(transformsTemp[i],'id');
		
		transformationElem = transformsTemp[i].children;
		this.transformations[i] = this.getMatrix(transformationElem);		
	}
	console.log(this.transformations);
}

MySceneGraph.prototype.getMatrix = function(transformationElem){
	var mx = mat4.create();
	
	for(var i=0; i<transformationElem.length; i++){
		var transformationName = transformationElem[i].tagName;
		
		switch(transformationName){
			case 'translate':
					var translate;

					translate = new getXYZ(this.reader.getFloat(transformationElem[i],'x'),
										this.reader.getFloat(transformationElem[i],'y'),
										this.reader.getFloat(transformationElem[i],'z'));
										
										
					mat4.translate(mx, mx, [translate.x,translate.y,translate.z]);
					break;
			case 'rotate':
					var AxisRotation, angleRotation, rotation;

					AxisRotation = this.reader.getString(transformationElem[i], 'axis');
					angleRotation = this.reader.getFloat(transformationElem[i], 'angle');

					if (AxisRotation == 'x') 		
						rotation = [1,0,0];
					else if (AxisRotation == 'y') 	
						rotation = [0,1,0];
					else if (AxisRotation == 'z') 	
						rotation = [0,0,1];
					

					mat4.rotate(mx, mx, angleRotation, rotation);
					break;
			case 'scale':
					var scale;

					scale = new getXYZ(this.reader.getFloat(transformationElem[i],'x'),
										this.reader.getFloat(transformationElem[i],'y'),
										this.reader.getFloat(transformationElem[i],'z'));
				
					mat4.scale(mx, mx, [scale.x,scale.y,scale.z]);
					break;
		}
	}
	
	return mx;
}

MySceneGraph.prototype.parsePrimitives = function(rootElement){
	var primitivas = rootElement.getElementsByTagName('primitives')[0];
	if(primitivas == null)
		onXMLError("'primitives' element is null");
	
	var primitivesTemp = primitivas.getElementsByTagName('primitive');
	this.primitives = new Array(primitivesTemp.length);
	
	var id, primitiveName, primitiveElem;
	for(var i=0; i<primitivesTemp.length; i++){
		id = this.reader.getString(primitivesTemp[i], 'id');
		
		primitiveElem = primitivesTemp[i].children[0];
		primitiveName = primitiveElem.tagName;
		
		var prim = this.getPrimitive(primitiveName, primitiveElem);
		
		
		this.node[id] = prim;
		
	}
}

MySceneGraph.prototype.getPrimitive = function(primitiveName, primitiveElem){
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
	var componentsElems = rootElement.getElementsByTagName('components')[0];

	if (componentsElems == null)
		this.onXMLError("'Component' element is null");
	
	
	var componentsTemp = componentsElems.getElementsByTagName('component');
	
	var id, transf, mat, text, privId;
	
	for(var i=0; i<componentsTemp.length; i++){
		id = this.reader.getString(componentsTemp[i],'id');
		
		var transfTemp = componentsTemp[i].getElementsByTagName('transformation')[0];
		var transformationRef = transfTemp.getElementsByTagName('transformationref');
		
		if(transformationRef.length != 0){
			transf = this.reader.getString(transformationRef[0],'id');
		}
		else{
			transf = id + "transf";
			this.transformations[transf] = this.getMatrix(transfTemp);
		}
		
		
		//materials
		var materialsTemp = componentsTemp[i].getElementsByTagName('materials')[0];
		var materialrefs = materialsTemp.getElementsByTagName('material');
		
		var mat = new Array(materialrefs.length);
		
		for(var k=0; k<materialrefs.length; k++){
			mat[k] = this.reader.getString(materialrefs[k],'id');
		}
		
		//textures
		var texturesTemp = componentsTemp[i].getElementsByTagName('texture')[0];
		text = this.reader.getString(texturesTemp,'id');
		
		//children
		var childrensTemp = componentsTemp[i].getElementsByTagName('children')[0];
		var componentName = childrensTemp.getElementsByTagName('componentref');
		var primitivName = childrensTemp.getElementsByTagName('primitiveref');
		
		var childrens = new Array(componentName.length+primitivName.length);
		for(var t=0;t<componentName.length;t++)
			childrens[t]  = this.reader.getString(componentName[t],'id');
		
		for(var t=componentName.length; t<(componentName.length+primitivName.length); t++)
		{
			childrens[t] = this.reader.getString(primitivName[t-componentName.length],'id');
		}
		
		this.node[id] = new Component(id, transf, mat, text, childrens);
		
		console.log(mat);
	}
}

MySceneGraph.prototype.displayGraph = function()
{
	var stackTextures = new Stack();
	var stackMaterials = new Stack();
	
	this.parseGraph(this.root, stackMaterials, stackTextures);
}

MySceneGraph.prototype.parseGraph = function(root, stackMaterials, stackTextures){

}

MySceneGraph.prototype.onXMLError=function (message) {
	console.error("XML Loading Error: "+message);	
	this.loadedOk=false;
};

