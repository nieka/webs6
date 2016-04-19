/**
 * Created by niek on 18-4-2016.
 */
// Game model
var Game = function(id,name, status, players, createDate) {

    this.id = id;
    this.name = name;
    this.status = status;
    this.players = players;
    this.createDate = createDate;
};

Game.prototype.getId = function(){
    return this.id;
};

//getName
Game.prototype.getName = function() {
    return this.name;
};

//getStatus
Game.prototype.getStatus = function() {
    return this.status;
};

//getplayers
Game.prototype.getPlayers = function() {
    return this.persons;
};
//get create date
Game.prototype.getCreateDate = function() {
    return this.createDate;
};
Game.prototype.isActive = function() {
    if(this.status === "Active"){
        return true;
    } else {
        return false;
    }
};

Game.prototype.addPlayer = function(id){
  this.players.push(id);
};
module.exports = Game;
