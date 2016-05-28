/**
 * Created by niek on 12-5-2016.
 */
/**
 * Created by niek on 18-4-2016.
 */

var Game = require('../../Game/Models/Game');

// GameController.js
module.exports = function($scope,$stateParams, GameListFactory, GameFactory, BoardService) {

    var self = this;
    self.selectedGame;
    self.message;

    self.succesMessage = '';
    self.errorMessage = '';

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
            self.succesMessage = "Je bent toegevoegd aan de game";
        });
    };

    self.startGame = function(id){
        GameListFactory.startGame(id).then(function(response){
            $("#gameGestart").show();
        });
    };


    self.showDetails = function(game){
        console.log(game);
        self.selectedGame = game;
        $('#GameDetailModel').modal('show');
    };

    self.getGames = function() {
        return GameListFactory.games;
    };
};