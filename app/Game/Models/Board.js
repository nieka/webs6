/**
 * Created by niek on 27-4-2016.
 */
var Board = function(boardTiles){
    this.boardTiles = boardTiles;
};

Board.prototype.canMatch = function(idOne, idTwo){
    var tileOne = getTile(idOne);
    var tileTwo = getTile(idTwo);
    if(tilesMatch(tileOne.tile,tileTwo.tile)){
        console.log("matched");
        return true;
    }

    console.log(" no match");
    return false;
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
    for(var i=0; i < this.boardTiles.length; i++){
        if(this.boardTiles[i]._id === id){
            return this.boardTiles[i];
        }
    }
}

function checkAvailable(tile) {

    var left = hasTileLeft(tile);
    var right = hasTileRight(tile);
    var top = hasTileTop(tile);

    //if the tile has no tiles left or right and not on top return true else false
    return (!left || !right) && !top;
}

//checks if the chosen tile has a tile to the left
function hasTileLeft(tile) {
    var self = this;
    var hasLeft = false;

    angular.forEach(self.boardTiles, function(value, key) {

        if ((tile.xPos - 2) === value.xPos && tile.yPos === value.yPos && tile.zPos === value.zPos) {
            hasLeft = true;
        }
    });

    return hasLeft;
}

//checks if the chosen tile has a tile to the right
function hasTileRight(tile) {
    var self = this;
    var hasRight = false;

    angular.forEach(self.boardTiles, function(value, key) {

        if ((tile.xPos + 2) === value.xPos && tile.yPos === value.yPos && tile.zPos === value.zPos) {
            hasRight = true;
        }
    });

    return hasRight;
}

//checks if the chosen tile has a tile on top
function hasTileTop(tile) {
    var self = this;
    var hasTop = false;

    angular.forEach(self.boardTiles, function(value, key) {

        if(tile.xPos === value.xPos && tile.yPos === value.yPos && (tile.zPos + 1) === value.zPos) {
            hasTop = true;
        }
    });

    return hasTop;
}

//get game tiles
Board.prototype.getBoardTiles = function() {
    return this.boardTiles;
};

//set game tiles
Board.prototype.setBoardTiles = function(gameTiles) {
    this.boardTiles = gameTiles;
};
module.exports = Board;