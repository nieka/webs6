/**
 * Created by niek on 18-4-2016.
 */

var Game = require('../Models/Game');

// GameController.js
module.exports = function($scope, GameFactory) {

    var self = this;
    var game;

    self.joinGame = function(id){
        GameFactory.getGame(id).addPlayer("123456");
    };

    self.showGame = function(id){
        game = GameFactory.getGame(id);
        GameFactory.getBoardTiles(id).then(function(value) {
            console.log('got tiles');
            setupGame(value.data);
            console.log(value.data);
        });
    };

    //zorgt dat alles geregeld word om de game te kunnen spelen
    function setupGame(tiles){
        BoardService.init(tiles);
    }

    self.newGame = function() {
        GameFactory.addGame(new Game(9, 'Game 9', "Not Active", [], "6-4-2016"));
    };

    self.getGames = function() {
        return GameFactory.getGames();
    };

    self.matchTiles = function(id, idTwo){
        return BoardService.canMatch(id, idTwo);
    };

    self.selectTile = function(tile) {
        return BoardService.checkAvailable(tile);
    };
};