/**
 * Created by niek on 12-5-2016.
 */
/**
 * Created by niek on 18-4-2016.
 */

var Game = require('../../Game/Models/Game');

// GameController.js
module.exports = function($scope,$stateParams, GameListFactory) {

    var self = this;
    self.selectedGame;
    self.message;
    //form vairbale
    self.minPlayers =1;
    self.maxPlayers =2;
    self.template = "Shanghai";

    self.init = function(){
        var paramater = "";
        if($stateParams.userid != undefined){
            paramater = "?player=" + $stateParams.userid;
        }
        console.log(paramater);
        GameListFactory.flush();
        GameListFactory.getGames(paramater).then(function(value){
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
                GameListFactory.addGame(game);
            }
        });
    };

    self.joinGame = function(id){
        GameListFactory.joinGame(id).then(function(response){
            self.init();
            $('#joindGame').show();
        });
    };

    self.showDetails = function(game){
        console.log(game);
        self.selectedGame = game;
        $('#GameDetailModel').modal('show');
    };

    self.ShowNewGameModel = function() {
        $("#errorMessage").hide();
        $('#addGameModel').modal('show');
    };

    self.getGames = function() {
        return GameListFactory.games;
    };

    self.saveGame = function() {
        var game = {};

        if(self.minPlayers <= self.maxPlayers){
            game.templateName = self.template;
            game.minPlayers = self.minPlayers;
            game.maxPlayers = self.maxPlayers;
            console.log(game);
            self.minPlayers =1;
            self.maxPlayers =2;
            self.template = "Shanghai";
            self.message = "De game is toegevoegd";
            GameListFactory.saveGame(game).then(function(value){
                //game is toegevoegd
                $("#gameAdded").show();
            });
            $('#addGameModel').modal('hide');
        } else {
            $("#errorMessage").show()
        }


    }
};