/**
 * Created by niek on 6-6-2016.
 */

module.exports = function($scope,$uibModalInstance, tiles, players){

    var self = this;
    init();

    function init(){
        self.matchedTiles = tiles;
        self.players = players;
    }

    self.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    self.getPlayers = function(){
        return self.players;
    };

    self.getMatchedTiles = function(){
        return self.matchedTiles;
    };


};