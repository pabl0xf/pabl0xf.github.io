class KeyPressManager {
  constructor(){
      this.keyPressMap = {};
      this.keydownCallback = null;
  }

  addKeyPressCode(keyCode, callback){

    this.keyPressMap[keyCode] =  {callback: callback};

    if(this.keydownCallback){
      return;
    }

    this.keydownCallback = async function(e){

        if (this.keyPressMap && this.keyPressMap[e.keyCode]){
          try {
            global.RUNNING = true;
            return this.keyPressMap[e.keyCode].callback();
          } catch (e) {
            alert(MSG['badCode'].replace('%1', e));
          }
        }
    }.bind(this);

    global.addEventListener("keydown", this.keydownCallback);
  }

  removeKeyPressEvents(){
    if(this.keydownCallback) {
      removeEventListener('keydown', this.keydownCallback);
      this.keyPressMap = {};
      this.keydownCallback = null;
    }
  }

}

export let keyPressManager =  new KeyPressManager();
