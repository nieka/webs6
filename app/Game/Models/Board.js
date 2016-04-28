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

//get game tiles
Board.prototype.getBoardTiles = function() {
    return this.boardTiles;
};

//set game tiles
Board.prototype.setBoardTiles = function(gameTiles) {
    this.boardTiles = gameTiles;
};
module.exports = Board;