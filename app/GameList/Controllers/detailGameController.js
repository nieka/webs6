
module.exports = function($scope, GameListService,$uibModalInstance, game){
    var self = this;
    self.selectedgame = game;
    self.succesMessage = '';

    self.startGame = function(id){
        GameListService.startGame(id).then(function(response){
            self.succesMessage = 'Game is gestart';
        });
    };

    self.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    self.deleteGame = function(id){
        GameListService.deleteGame(id).then(function(response){
            self.succesMessage = "Game is verwijderd";
            self.cancel();
        });
    }

};