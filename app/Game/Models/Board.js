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
module.exports = Board;