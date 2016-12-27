/**
 * MyInterface
 * @constructor
 */


function MyInterface() {
    //call CGFinterface constructor
    CGFinterface.call(this);
};

MyInterface.prototype = Object.create(CGFinterface.prototype);
MyInterface.prototype.constructor = MyInterface;


MyInterface.prototype.init = function(application) {

    CGFinterface.prototype.init.call(this, application);
    
    this.gui = new dat.GUI();

    this.omni = this.gui.addFolder("OmniLights");
    this.omni.open();
    this.spot = this.gui.addFolder("SpotLights");
    this.spot.open();

    return true;
};

MyInterface.prototype.addLight = function(type, i, name) {
    if (type == "spot")
        this.spot.add(this.scene.lightsStatus, i, i);
    else
        this.omni.add(this.scene.lightsStatus, i, i);

}


MyInterface.prototype.processKeyDown = function(event) {


    switch (event.keyCode) {
        case (77):
        case (109): //M
            this.scene.updateMaterial();
            break;
        case (86):
        case (118): //V
            this.scene.updateView();
            break;
        case (80)://P
        case (112):
            this.scene.updateScene();
            break;
                 
        
        
    };
};
