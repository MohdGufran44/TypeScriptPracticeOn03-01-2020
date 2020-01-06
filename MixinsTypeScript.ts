class Disposable {
    isDisposable: boolean;
    dispose(){
        this.isDisposable=true;
    }
}

class Activatable {
    isActive:boolean;
    activate(){
        this.isActive = true;
    }

    deactivate(){
        this.isActive = false;
    }
}

class SmartObject {
    constructor() {
        setInterval(() => console.log(this. + " : " + this.isDisposed), 500);
    }

    interact() {
        this.activate();
    }
}