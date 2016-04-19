/**
 * Created by niek on 18-4-2016.
 */

var Game = require('../Models/Game');

// GameController.js
module.exports = function($scope, GameFactory) {

    this.games = GameFactory.games;

    this.joinGame = function(id){
        var game = GameFactory.getGame(id);
        game.addPlayer(123345); // fake id
        console.log("gebruiker toegevoegd");
        console.log(game);
    };

    this.newGame = function() {
        this.games.push(new Game(9, 'Game 9', "Not Active", [], "6-4-2016"));
        console.log('new game added');
    }
};