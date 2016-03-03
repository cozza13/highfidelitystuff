//  EntityCollide.js
//
//  Script Type: Entity
//  Created by James B. Pollack @imgntn on 9/21/2015
//  Copyright 2015 High Fidelity, Inc.
//  
//  This script resets an object to its original position when it stops moving after a collision
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//
/*global print, MyAvatar, Entities, AnimationCache, SoundCache, Scene, Camera, Overlays, Audio, HMD, AvatarList, AvatarManager, Controller, UndoStack, Window, Account, GlobalServices, Script, ScriptDiscoveryService, LODManager, Menu, Vec3, Quat, AudioDevice, Paths, Clipboard, Settings, XMLHttpRequest, randFloat, randInt */
(function() {


    function Target() {
        return;
    }

    Target.prototype = {
        hasBecomeActive: false,
        preload: function(entityID) {
            this.entityID = entityID;
           
            var keys = Entities.getEntityProperties(this.entityID).name;
             print("https://s3-us-west-1.amazonaws.com/hifi-content/chris/dev/piano/piano-ff-" + keys + ".wav");
            var SOUND_URL = "https://s3-us-west-1.amazonaws.com/hifi-content/chris/dev/piano/piano-ff-" + keys + ".wav";
            this.hitSound = SoundCache.getSound(SOUND_URL);
        },
        collisionWithEntity: function(me, otherEntity) {
            if (this.hasBecomeActive === false) {
                
                var position = Entities.getEntityProperties(me, "position").position;
                a = Math.random() * (0 - 255) + 255;
                b = Math.random() * (0 - 255) + 255;
                c = Math.random() * (0 - 255) + 255;
            //    Entities.editEntity(me, {
                    
              //      color: { red: a, green: b, blue: c }  
                 
               // });

                this.audioInjector = Audio.playSound(this.hitSound, {
                    position: position,
                    volume: 0.5
                });

                this.hasBecomeActive = false;

            }

        }
    };

    // entity scripts always need to return a newly constructed object of our type
    return new Target();
});