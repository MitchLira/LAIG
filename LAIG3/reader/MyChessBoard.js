
MyChessBoard.prototype = Object.create(MyChessBoard.prototype);
MyChessBoard.prototype.constructor = MyChessBoard;

 function MyChessBoard(scene,du, dv,textureref, su, sv, CRGBA) {
    CGFobject.call(this, scene);
    this.scene = scene;
    this.du = du;
    this.dv = dv;
    this.textureref = textureref;
    this.su = su;
    this.sv = sv;
    this.c1 = CRGBA[0];
    this.c2 = CRGBA[1];
    this.cs = CRGBA[2];


    this.shader = new CGFshader(scene.gl, "shaders\\text.vert", "shaders\\text.frag");
    this.plane = new MyPlane(this.scene,10 ,10 ,50 ,50);
    this.texture = this.scene.graph.textures[textureref].texture;

    this.shader.setUniformsValues({ uSampler : 0,
                                    color1 : [this.c1.r, this.c1.g, this.c1.b, this.c1.a],
                                    color2 : [this.c2.r, this.c2.g, this.c2.b, this.c2.a],
                                    colorMark : [this.cs.r, this.cs.g, this.cs.b, this.cs.a],
                                    divU:parseInt(this.du)*1.0,
                                    divV:parseInt(this.dv)*1.0,
                                    sU:parseInt(this.su)*1.0,
                                    sV:parseInt(this.sv)*1.0});

};

MyChessBoard.prototype.display = function() {
  this.texture.bind(0);

  this.scene.setActiveShader(this.shader);
  this.plane.display();
  this.scene.setActiveShader(this.scene.defaultShader);
};
