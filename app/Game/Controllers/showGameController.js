/**
 * Created by Raymond Phua on 28-5-2016.
 */

var Board = require('../Models/Board');

module.exports = function($scope, $stateParams, $state, GameListService, BoardService,GameFactory,$uibModal) {
    var self = this;
    var selectedOne;
    var selectedTwo;
    self.infoMessage = "";
    self.errorMessage = "";
    self.succesMessage = "";
    self.style = true;

    init();

    function init(){
        self.canPlay = $stateParams.canPlay;
        self.id = $stateParams.game.getId();
        self.game = $stateParams.game;
        showGame(self.id);
        if(!self.canPlay){
            self.infoMessage = "Je kan deze game alleen maar bekijken!"
        }
    }

    self.matchTiles = function(){
        self.errorMessage = "";
        self.succesMessage = "";
        if(BoardService.canMatch()){
            self.succesMessage = "Je hebt een match";
            BoardService.sendmatch(self.id).then(function(data){
                showGame(self.id);
            });
        } else {
            self.errorMessage = "Dat was geen match";
            redrawBoard();
        }
    };

    self.getBoardTiles = function(){
        if(self.board != undefined){
            return self.board.getBoardTiles();
        } else {
            return [];
        }


    };

    self.showMatchTiles = function(){
        GameFactory.getMatchedGames(self.id).then(function(response){
            var modalInstance = $uibModal.open({
                templateUrl: '../../Game/Views/showMatchTiles.html',
                controller: require("../../Game/Controllers/matchTilesController"),
                controllerAs : "mt",
                size: 'lg',
                resolve: {
                    tiles: function(){
                        console.log("machted tiles");
                        return response.data;
                    },
                    players : function(){
                        return self.game.getPlayers();
                    }
                }
            });
        })
    };

    function redrawBoard() {
        console.log("redraw");
        showGame(self.id);
    }

    function showGame(id) {
        GameListService.getBoardTiles(id).then(function(value) {
            setupGame(value.data);
            console.log(value.data);
            self.board = new Board(value.data);
        });
    }

    //zorgt dat alles geregeld word om de game te kunnen spelen
    function setupGame(tiles){
        BoardService.init(tiles,self.canPlay);
    }

    //is deze methode nog nodig??
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

    self.changeStyle = function() {
        self.style = !self.style;
    }
};