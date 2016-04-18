/**
 * Created by Raymond Phua on 18-Apr-16.
 */
// PlayerFactory.js
module.exports = function() {
    var factory = {};

    factory.players = [
        { name: 'Raymond', age: 20, inGame: false },
        { name: 'Niek', age: 20, inGame: true },
        { name: 'TestUser1', age: 21, inGame: true },
        { name: 'TestUser2', age: 22, inGame: true },
        { name: 'TestUser3', age: 23, inGame: false },
        { name: 'TestUser4', age: 24, inGame: true }
    ];

    return factory;
};