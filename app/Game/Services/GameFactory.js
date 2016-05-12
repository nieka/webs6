/**
 * Created by niek on 18-4-2016.
 */
var Game = require('../Models/Game');

// PlayerFactory.js
module.exports = function($http) {
    var factory = {};
    var baseUrl= 'https://mahjongmayhem.herokuapp.com/';

    factory.getBoardTiles = function(id) {
        var url = 'https://mahjongmayhem.herokuapp.com/games/' + id + '/tiles';
        console.log("URL: " + url);
        return $http.get(url);
    };

    return factory;
};