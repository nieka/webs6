/**
 * Created by niek on 18-4-2016.
 */
// GameController.js
module.exports = function($scope, GameFactory) {

    this.games = GameFactory.games;

    $scope.joinGame = function(id){
        var game = GameFactory.getGame(id);
        game.addPlayer(123345); // fake id
        console.log("gebruiker toegevoegd");
        console.log(game);
    }
};