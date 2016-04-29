/**
 * Created by niek on 18-4-2016.
 */

var Game = require('../Models/Game');
var Board = require('../Models/Board');

// GameController.js
module.exports = function($scope, GameFactory) {

    var self = this;
    var game, board;

    self.joinGame = function(id){
        GameFactory.getGame(id).addPlayer("123456");
    };

    self.showGame = function(id){
        game = GameFactory.getGame(id);
        GameFactory.getBoardTiles(id).then(function(value) {
            console.log('got tiles');
            console.log(value);
            setupGame(value.data);
        });
    };

    //zorgt dat alles geregeld word om de game te kunnen spelen
    function setupGame(tiles){
        board = new Board(tiles);
        game.setBoard(board);
    }

    self.newGame = function() {
        GameFactory.addGame(new Game(9, 'Game 9', "Not Active", [], "6-4-2016"));
    };

    self.getGames = function() {
        return GameFactory.getGames();
    };

    self.matchTiles = function(id, idTwo){
        console.log(board);
        board.tilesMatch(id, idTwo);
    }
};