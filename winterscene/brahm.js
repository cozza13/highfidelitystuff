(function() {
  var _this = this;
  // const GAME_CHANNEL = 'winterSmashUpGame';

  Script.include("http://public.highfidelity.io/scripts/utilities/tools/cookies.js");

 var sound = SoundCache.getSound("https://s3.amazonaws.com/converter.tipodean.com/sounds/Brahms_Sym1-ambiX.wav");
var injector = Audio.playSound(sound, { loop: true, volume: 1.0 });
 













  _this.enterEntity = function(entityID) {
    print('I am insiude');
//sound = SoundCache.getSound("http://hifi-content.s3.amazonaws.com/ken/Rain and Thunder/Weather Evening Medium Rain Huge Thunder Claps Rustling Trees ST450 01_ambiX.wav");
//Audio.playSound(sound, { loop: true, volume: 1.0 });
   var injector = Audio.playSound(sound);
  };
  
 _this.leaveEntity = function(entityID) {
    print('I am outsidee');
  injector.stop();
    print("Reverb is OFF.");


    // Messages.sendMessage('PlayBackOnAssignment', 'BowShootingGameWelcome');
  };
});
