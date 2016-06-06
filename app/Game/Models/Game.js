/**
 * Created by niek on 18-4-2016.
 */
// Game model
var Game = function(id,createdBy, createdOn, startedOn, endedOn, gameTemplate, players
,maxPlayers, minPlayers,state) {

    this.id = id;
    this.createdBy = createdBy;
    this.createdOn = createdOn;
    this.startedOn = startedOn;
    this.endedOn = endedOn;
    this.gameTemplate = gameTemplate;
    this.players = players;
    this.maxPlayers = maxPlayers;
    this.minPlayers = minPlayers;
    this.state = state;
};

Game.prototype.getId = function(){
    return this.id;
};

//getName
Game.prototype.getCreatedBy = function() {
    return this.createdBy;
};
Game.prototype.getCreatorName = function() {
    return this.createdBy.name;
}

//getName
Game.prototype.getCreatedOn = function() {
    return this.createdOn;
};

//getStatus
Game.prototype.getStartedOn = function() {
    return this.startedOn;
};

//getplayers
Game.prototype.getEndedOn = function() {
    return this.persons;
};
//get create date
Game.prototype.getGameTemplate = function() {
    return this.gameTemplate;
};

//get game tiles
Game.prototype.getPlayers = function() {
    return this.players;
};

//set game tiles
Game.prototype.getMaxPlayers = function() {
    return this.maxPlayers;
};
//set game tiles
Game.prototype.getMinPlayers = function() {
    return this.minPlayers;
};
//set game tiles
Game.prototype.getState = function() {
    return this.state;
};

Game.prototype.AmountOfPlayers = function(){
    return this.players.length;
};

Game.prototype.canStart = function(){
    if(this.createdBy._id === this.userid){
        if(this.state === "open"){
            return true;
        }
    }
    return false;
};

Game.prototype.canIJoin = function(){
    if(this.state === "open"){
        for(var i=0; i< this.players.length; i++){
            if(this.players[i]._id === this.userid){
                return false;
            }
        }
       if(this.AmountOfPlayers() < this.maxPlayers){
           return true;
       }
    }
    return false;
};

Game.prototype.canDelete = function(){
    if(this.createdBy._id === this.userid){
        if(this.state != "playing"){
            return true;
        }
    }
    return false;
};
Game.prototype.canPlay = function(){
    for(var i=0; i< this.players.length; i++){
        if(this.players[i]._id === this.userid){
            return true;
        }
    }
    return false;
};

module.exports = Game;
