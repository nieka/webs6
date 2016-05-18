/**
 * Created by niek on 9-5-2016.
 */
module.exports = function($http) {

    var service = {};
    var self = this;

    service.init = function(tiles){
        self.boardTiles = tiles;
    };

    service.canMatch = function(idOne, idTwo){
        var tileOne = getTile(idOne);
        var tileTwo = getTile(idTwo);

        return tilesMatch(tileOne.tile,tileTwo.tile);
    };

    service.checkAvailable = function(tile) {

        var left = hasTileLeft(tile);
        var right = hasTileRight(tile);
        var top = hasTileTop(tile);

        console.log(left);
        console.log(right);
        console.log(top);
        //if the tile has no tiles left or right and not on top return true else false
        return (!left || !right) && !top;
    };

    function tilesMatch(tileOne,tileTwo){
        if(tileOne.suit === tileTwo.suit){
            if(!tileOne.matchesWholeSuit || !tileTwo.matchesWholeSuit){
                if(tileOne.name === tileTwo.name){
                    return true;
                }
            } else {
                return true;
            }
        }
        return false;
    }

    function getTile(id){
        var boardTiles = self.boardTiles;
        for(var i=0; i < boardTiles.length; i++){
            if(boardTiles[i]._id === id){
                return boardTiles[i];
            }
        }
    }

    //checks if the chosen tile has a tile to the left
    function hasTileLeft(tile) {
        var hasLeft = false;
        //tiles are 2 by 2, so there might be a tile to the top left/bottom left instead of directly next to the tile
        var yPositions = [tile.yPos, (tile.yPos - 1), (tile.yPos + 1)];

        angular.forEach(self.boardTiles, function(value, key) {

            if ((tile.xPos - 2) === value.xPos && yPositions.indexOf(tile.yPos) > -1 && tile.zPos === value.zPos) {
                hasLeft = true;
            }
        });

        return hasLeft;
    }

    //checks if the chosen tile has a tile to the right
    function hasTileRight(tile) {
        var hasRight = false;

        var yPositions = [tile.yPos, (tile.yPos - 1), (tile.yPos + 1)];
        angular.forEach(self.boardTiles, function(value, key) {

            if ((tile.xPos + 2) === value.xPos && yPositions.indexOf(value.yPos) > -1 && tile.zPos === value.zPos) {
                hasRight = true;
            }
        });

        return hasRight;
    }

    //checks if the chosen tile has a tile on top
    function hasTileTop(tile) {
        var hasTop = false;

        var xPositions = [tile.xPos, (tile.xPos - 1), (tile.xPos + 1)];
        var yPositions = [tile.yPos, (tile.yPos - 1), (tile.yPos + 1)];

        angular.forEach(self.boardTiles, function(value, key) {

            if((xPositions.indexOf(value.xPos) > -1) && (yPositions.indexOf(value.yPos) > -1) && (tile.zPos + 1) === value.zPos) {
                hasTop = true;
            }
        });

        return hasTop;
    }


    return service;
};