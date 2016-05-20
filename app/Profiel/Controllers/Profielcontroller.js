/**
 * Created by niek on 13-5-2016.
 */

var Game = require('../../Game/Models/Game');

module.exports = function($scope, ProfielController,GameListFactory,$stateParams) {

    var self = this;
    self.username;

    self.init = function(){
        if($stateParams.username === undefined){
            self.username = window.localStorage['username'];
        } else {
            self.username = $stateParams.username;
        }

        var token = $stateParams.token;

        //tokene en username opslaan als het nodig is
        if(window.localStorage['token'] === undefined && window.localStorage['username'] === undefined){
            if($stateParams.token != undefined && $stateParams.username != undefined){
                window.localStorage['token'] = $stateParams.token;
                window.localStorage['username'] = self.username;
            }
        }
        GameListFactory.getGames("?player=" + self.username).then(function(value){
            var games = value.data;
            for(var i=0; i < games.length; i++){
                var gamedata = games[i];
                var game = new Game(
                    gamedata._id,
                    gamedata.createdBy,
                    gamedata.createdOn,
                    gamedata.startedOn,
                    gamedata.endedOn,
                    gamedata.gameTemplate,
                    gamedata.players,
                    gamedata.maxPlayers,
                    gamedata.minPlayers,
                    gamedata.state
                );
                GameListFactory.addMyGame(game);
            };
        });
    };

    self.getMyGames = function(){
       return GameListFactory.myGames;
    };

    self.joinGame = function(){
        console.log("join game");
    }
};