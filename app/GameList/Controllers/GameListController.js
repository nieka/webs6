var Game = require('../../Game/Models/Game');

// GameController.js
module.exports = function($scope,$stateParams, GameListFactory,$uibModal) {

    var self = this;
    self.message;
    self.game;
    self.succesMessage = '';
    self.errorMessage = '';
    self.order= 'status';
    self.reverse = false;

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

    self.getGames = function() {
        return GameListFactory.games;
    };

    self.showDetail = function(selectedgame){
        self.game = selectedgame;
        console.log("showDetail");
        console.log(self.game);
        var modalInstance = $uibModal.open({
            templateUrl: '../../GameList/Views/detailGame.html',
            controller: require("../../GameList/Controllers/detailGameController"),
            controllerAs : "dg",
            size: 'lg',
            resolve: {
                game: function(){
                    return self.game;
                }
            }
        });
    }

    self.setOrderBy = function(value) {
        self.order = value;
        self.reverse = !self.reverse;
    }
};