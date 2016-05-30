/**
 * Created by Raymond Phua on 28-5-2016.
 */

var Board = require('../../Game/Models/Board');

module.exports = function($scope, $stateParams, GameListService, BoardService) {
    console.log("showgame controller");

    var self = this;
    var selectedOne;
    var selectedTwo;

    //showGame($stateParams.id);

    function showGame(id) {
        GameListService.getBoardTiles(id).then(function(value) {
            setupGame(value.data);
            console.log(value.data);
            self.board = new Board(value.data);
        });
    }

    //zorgt dat alles geregeld word om de game te kunnen spelen
    function setupGame(tiles){
        BoardService.init(tiles);
    }

    self.checkAvailable = function(tile) {

        //if the first tile is not undefined and if the user selects the same tile
        if (selectedOne) {
            if (selectedOne._id === tile._id) {
                //set the tile to undefined
                selectedOne = undefined;
                return;
            }
        }

        //check if the selected tile is available
        if (BoardService.checkAvailable(tile)) {
            if (typeof selectedOne === "undefined") {
                selectedOne = tile;
            } else {
                selectedTwo = tile;
            }
        }
        console.log(selectedOne);
        console.log(selectedTwo);

        if (selectedOne && selectedTwo) {
            if (BoardService.canMatch(selectedOne.tile, selectedTwo.tile)) {
                console.log('Matched!');
            } else {
                //set the second tile to undefined
                selectedTwo = undefined;
                console.log('No match');
            }
        }
    }
};