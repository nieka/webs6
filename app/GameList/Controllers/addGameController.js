/**
 * Created by niek on 25-5-2016.
 */
module.exports = function($scope, GameListFactory){
    console.log("addgame controller");

    var self = this;

    self.errorMessage = '';
    self.succesMessage = '';

    //form vairbale
    self.minPlayers =1;
    self.maxPlayers =2;
    self.template = "Shanghai";

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
                self.succesMessage = 'Game is toegevoegd';
            });
            $('#addGameModel').modal('hide');
        } else {
            self.errorMessage = "Max players must be higher than min players";
        }


    }
};