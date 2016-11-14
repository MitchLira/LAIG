
/**
 * MyTorus
 * @constructor
 */
function MyTorus(scene, inner, outer, slices, loops) {
    CGFobject.call(this, scene);

    this.inner = inner;
    this.outer = outer;
    this.slices = slices;
    this.stacks = loops;

    this.initBuffers();
};

MyTorus.prototype = Object.create(CGFobject.prototype);
MyTorus.prototype.constructor = MyTorus;

MyTorus.prototype.initBuffers = function() {
    this.vertices = [];
    this.indices = [];
    this.normals = [];
    this.texCoords = [];

    this.r =(this.outer - this.inner) / 2;
    this.R = this.inner + this.r;

   for (var stack = 0; stack <= this.stacks; stack++) {
        var theta = stack * 2 * Math.PI / this.stacks;
        var sinTheta = Math.sin(theta);
        var cosTheta = Math.cos(theta);

        for (var slice = 0; slice <= this.slices; slice++) {
            var phi = slice * 2 * Math.PI / this.slices;
            var sinPhi = Math.sin(phi);
            var cosPhi = Math.cos(phi);

            this.vertices.push((this.R + (this.r * cosTheta)) * cosPhi);
            this.vertices.push((this.R + (this.r * cosTheta)) * sinPhi);
            this.vertices.push(this.r * sinTheta);

            this.normals.push((this.R + (this.r * cosTheta)) * cosPhi);
            this.normals.push((this.R + (this.r * cosTheta)) * sinPhi);
            this.normals.push(this.r * sinTheta);
            this.texCoords.push(1 - (stack / this.stacks));
            this.texCoords.push(1 - (slice / this.slices));
        }
    }

    for (var stack = 0; stack < this.stacks; stack++) {
        for (var slice = 0; slice < this.slices; slice++) { 
            this.indices.push((stack * (this.slices + 1)) + slice);
            this.indices.push( (stack * (this.slices + 1)) + slice + this.slices + 2);
            this.indices.push( (stack * (this.slices + 1)) + slice + this.slices + 1);

            this.indices.push((stack * (this.slices + 1)) + slice);
            this.indices.push((stack * (this.slices + 1)) + slice+1);
            this.indices.push((stack * (this.slices + 1)) + slice + this.slices + 2);

        }
    }


    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers();
};