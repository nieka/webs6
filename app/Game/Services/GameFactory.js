/**
 * Created by niek on 18-4-2016.
 */
var Game = require('../Models/Game');

// PlayerFactory.js
module.exports = function() {
    var factory = {};

    factory.games = [
        new Game(1, 'Game 1', "Not Active", [], "6-4-2016"),
        new Game(2, 'Game 2', "Not Active", [], "8-4-2016"),
        new Game(3, 'Game 3', "Active", [], "6-4-2016"),
        new Game(4, 'Game 4', "Active", [], "1-4-2016"),
        new Game(5, 'Game 5', "Active", [], "1-4-2016"),
        new Game(6, 'Game 6', "End", [], "20-2-2016"),
        new Game(7, 'Game 7', "End", [], "20-3-2016")
    ];

    factory.getGame = function(id){
        for(var i=0; i < factory.games.length; i++){
            if(factory.games[i].id === id){
                return factory.games[i];
            }
        }
    };

    return factory;
};