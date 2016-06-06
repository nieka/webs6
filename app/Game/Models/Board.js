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
    for(var i=0; i< this.boardTiles.length; i++){
        if(this.boardTiles._id === tile._id){
            this.boardTiles = this.boardTiles.split(i,1);
            console.log(this.boardTiles);
        }
    }
};
module.exports = Board;