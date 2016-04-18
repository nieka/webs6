/**
 * Created by Raymond Phua on 18-Apr-16.
 */
// Player model
var Player = function(name, age, inGame) {

    this.name = name;
    this.age = age;
    this.inGame = inGame;
};

//getName
Player.prototype.getName = function() {
    return this.name;
};

//getAge
Player.prototype.getAge = function() {
    return this.age;
};

//getInGameStatus
Player.prototype.isInGame = function() {
    return this.inGame;
};