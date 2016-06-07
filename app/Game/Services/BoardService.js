/**
 * Created by niek on 9-5-2016.
 */
module.exports = function($http) {

    var service = {};
    var baseUrl= 'https://mahjongmayhem.herokuapp.com/';
    var self = this;
    self.selectedTiles = [];

    service.init = function(tiles,canPlay){
        self.boardTiles = tiles;
        self.canPlay = canPlay;
        self.selectedTiles = [];
    };

    service.setCanPlay = function(canPlay){
        self.canPlay = canPlay;
    };

    service.amountOfSelectedTiles = function(){
        return self.selectedTiles.length;
    };

    service.deselect = function(tile){
        if(self.selectedTiles.length === 2){
            if(self.selectedTiles[0]._id === tile.tile._id){
                var temp = self.selectedTiles[1];
            } else {
                var temp = self.selectedTiles[0];
            }
            self.selectedTiles = [];
            self.selectedTiles[0] = temp;
        } else {
            self.selectedTiles = [];
        }
    };

    service.getSelectedTiles = function(){
        return self.selectedTiles;
    };

    service.sendmatch = function(id){
        var body =  {
                tile1Id: self.selectedTiles[0]._id,
                tile2Id: self.selectedTiles[1]._id };
        self.selectedTiles = [];
        return $http.post(baseUrl + "Games/"+ id + "/Tiles/matches", body);
    };


    service.canMatch = function(){

        if(self.selectedTiles.length === 2){
            var tileOne = self.selectedTiles[0];
            var tileTwo = self.selectedTiles[1];
            if(tilesMatch(tileOne.tile, tileTwo.tile)){
                return true;
            } else {
                self.selectedTiles[0].selected = false;
                self.selectedTiles[1].selected = false;
                self.selectedTiles = [];
                return false;
            }
        } else {
            return false;
        }

    };

    service.checkAvailable = function(tile) {

        var left = hasTileLeft(tile);
        var right = hasTileRight(tile);
        var top = hasTileTop(tile);

        //if the tile has no tiles left or right and not on top return true else false
        if((!left || !right) && !top && self.canPlay){
            self.selectedTiles.push(tile);
            return true;
        } else {
            return false;
        }
    };

    function tilesMatch(tileOne,tileTwo){
        console.log(tileOne);
        console.log(tileTwo);
        if(tileOne.suit === tileTwo.suit){
            console.log(tileOne.suit + " " + tileTwo.suit);
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

    //checks if the chosen tile has a tile to the left
    function hasTileLeft(tile) {
        var hasLeft = false;
        //tiles are 2 by 2, so there might be a tile to the top left/bottom left instead of directly next to the tile
        var yPositions = [tile.yPos, (tile.yPos - 1), (tile.yPos + 1)];

        angular.forEach(self.boardTiles, function(value, key) {

            if ((tile.xPos - 2) === value.xPos && yPositions.indexOf(value.yPos) > -1 && tile.zPos === value.zPos) {
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