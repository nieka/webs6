/**
 * Created by niek on 6-6-2016.
 */

module.exports = function($scope,$uibModalInstance, tiles, players){

    var self = this;
    init();

    function init(){
        self.matchedTiles = tiles;
        self.players = players;

        var tempTiles = [];
        for(var i=0; i< tiles.length; i = i + 2){
            var tempObj = [];
            tempObj.push(tiles[i]);
            tempObj.push(tiles[i +1]);
            tempTiles.push(tempObj);
        }

        self.matchedTiles = tempTiles;
        console.log(tempTiles)
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