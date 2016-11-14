/**
 * MySphere
 * @constructor
 */
 
 function MySphere(scene, radius, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;
	this.radius = radius;
 	this.initBuffers();
 };

 MySphere.prototype = Object.create(CGFobject.prototype);
 MySphere.prototype.constructor = MySphere;

 MySphere.prototype.initBuffers = function() {
    this.vertices = [];
    this.indices = [];
    this.normals = [];
    this.texCoords = [];

    for (var stack = 0; stack <= this.stacks; stack++) {
        var teta = stack * Math.PI / this.stacks;
        var costeta = Math.cos(teta);
        var senteta = Math.sin(teta);
       
        for (var slice = 0; slice <= this.slices; slice++) {
            var fi = slice * 2 * Math.PI / this.slices;
            var senfi = Math.sin(fi);
            var cosfi = Math.cos(fi);

            this.vertices.push(this.radius * cosfi * senteta);
            this.vertices.push(this.radius * costeta);
            this.vertices.push(this.radius * senfi * senteta);
            this.normals.push(this.radius * cosfi * senteta);
            this.normals.push(this.radius * costeta);
            this.normals.push(this.radius * senfi * senteta);
            this.texCoords.push(1 - (stack / this.stacks));
            this.texCoords.push(1 - (slice / this.slices));

        }
    }

    for (var stack = 0; stack < this.stacks; stack++) {
        for (var slice = 0; slice < this.slices; slice++) {
            var first = (stack * (this.slices + 1)) + slice;
            var second = (stack * (this.slices + 1)) + slice + this.slices + 1;
			this.indices.push((stack * (this.slices + 1)) + slice);
			this.indices.push((stack * (this.slices + 1)) + slice + this.slices + 2);
			this.indices.push((stack * (this.slices + 1)) + slice + this.slices + 1);

			this.indices.push((stack * (this.slices + 1)) + slice);
			this.indices.push((stack * (this.slices + 1)) + slice+1);
			this.indices.push((stack * (this.slices + 1)) + slice + this.slices + 2);
        }
    }


 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };