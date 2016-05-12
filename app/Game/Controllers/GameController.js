/**
 * Created by niek on 18-4-2016.
 */

var Game = require('../Models/Game');

// GameController.js
module.exports = function($scope, GameFactory) {

    var self = this;

    self.matchTiles = function(id, idTwo){
        return BoardService.canMatch(id, idTwo);
    }
};