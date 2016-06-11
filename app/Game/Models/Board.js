/**
 * Created by niek on 27-4-2016.
 */
var Board = function(boardTiles){
    this.boardTiles = boardTiles;
};

//get game tiles
Board.prototype.getBoardTiles = function() {
    return this.boardTiles;
};

//set game tiles
Board.prototype.setBoardTiles = function(gameTiles) {
    this.boardTiles = gameTiles;
};

Board.prototype.removeTile = function(tile){
    var tempList = [];
    for(var i=0; i< this.boardTiles.length; i++){
        if(this.boardTiles[i]._id != tile._id){
            tempList.push(this.boardTiles[i])
        }
    }
    this.boardTiles = tempList;
};
module.exports = Board;