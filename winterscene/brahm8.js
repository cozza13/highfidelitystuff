(function() {
    var _this = this;
    var sound = SoundCache.getSound("https://s3.amazonaws.com/converter.tipodean.com/sounds/Brahms_Sym1-ambiX.wav");

    // this is the version of injector that is visible to your leaveEntity() method
    var injector;


    _this.enterEntity = function(entityID) {
        print('I am insiude');
        injector = Audio.playSound(sound, { loop: true, volume: 1.0 });
        injector.restart();
    };
  
    _this.leaveEntity = function(entityID) {
        print('I am outsidee');
        injector.stop();
        print("Reverb is OFF.");
    };
})
