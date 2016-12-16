(function() {
    var _this = this;
    var sound = SoundCache.getSound("http://hifi-content.s3.amazonaws.com/ken/Urban/Urban%20Morning%20Downtown%20City%20Traffic%20Streetcar%20Platform%20ST450_ambiX.wav");

    // this is the version of injector that is visible to your leaveEntity() method
    var injector;


    _this.enterEntity = function(entityID) {
        print('I am insiude');
        injector = Audio.playSound(sound, { loop: true, volume: 0.4 });
        injector.restart();
    };
  
    _this.leaveEntity = function(entityID) {
        print('I am outsidee');
        injector.stop();
        print("Reverb is OFF.");
    };
})
