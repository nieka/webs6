/**
 * Created by Raymond Phua on 18-Apr-16.
 */

var Player = require('../Models/Player');

// PlayerFactory.js
module.exports = function() {
    var factory = {};

    factory.players = [
        new Player('Raymond', 20, false),
        new Player('Niek', 20, true),
        new Player('TestUser1', 21, true),
        new Player('TestUser2', 22, true),
        new Player('TestUser3', 23, false),
        new Player('TestUser4', 24, true)
    ];

    return factory;
};