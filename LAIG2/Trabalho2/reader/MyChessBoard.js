
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

 };