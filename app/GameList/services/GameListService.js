/**
 * Created by niek on 12-5-2016.
 */
var Game = require('../../Game/Models/Game');

// PlayerFactory.js
module.exports = function($http) {
    var factory = {};
    var baseUrl= 'https://mahjongmayhem.herokuapp.com/';

    factory.games = [];

    factory.getGame = function(id){
        for(var i=0; i < factory.games.length; i++){
            if(factory.games[i].id === id){
                return factory.games[i];
            }
        }
    };

    factory.getGames = function(filter){
        filter = filter || "";
        return $http.get(baseUrl + "Games" + filter);
    };

    factory.addGame = function (game) {
        factory.games.push(game);
    };

    factory.getBoardTiles = function(id) {
        var url = 'https://mahjongmayhem.herokuapp.com/games/' + id + '/tiles';
        console.log("URL: " + url);
        return $http.get(url);
    };

    return factory;
};