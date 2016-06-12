/**
 * Created by Raymond Phua on 28-5-2016.
 */

var Board = require('../Models/Board');

module.exports = function($scope, $stateParams, $state, GameListService, BoardService,GameFactory,$uibModal) {
    var self = this;
    var selectedOne;
    var selectedTwo;
    var socket;
    self.infoMessage = "";
    self.errorMessage = "";
    self.succesMessage = "";
    self.tileStyle = "style1";

    init();

    function init() {
        self.canPlay = $stateParams.canPlay;
        self.id = $stateParams.game.getId();
        self.game = $stateParams.game;
        showGame(self.id);
        if (!self.canPlay) {
            self.infoMessage = "Je kan deze game alleen maar bekijken!"
        }
        socket = io('http://mahjongmayhem.herokuapp.com?gameId=' + self.id);
        socket.on("match", function (data) {
            console.log("match");
            BoardService.removeTile(data[0]);
            BoardService.removeTile(data[1]);
            $scope.$apply();
        });
        socket.on("end", function () {
            self.infoMessage = "De game is afgelopen";
            BoardService.setCanPlay(false);
        });
    }

    self.matchTiles = function () {
        self.errorMessage = "";
        self.succesMessage = "";
        if (BoardService.canMatch()) {
            var machtedTiles = BoardService.getSelectedTiles();
            BoardService.removeTile(machtedTiles[0]);
            BoardService.removeTile(machtedTiles[1]);
            self.succesMessage = "Je hebt een match";
            BoardService.sendmatch(self.id);
        } else {
            self.errorMessage = "Dat was geen match";
        }
    };

    self.getBoardTiles = function () {
        return BoardService.getBoardTiles();
    };

    self.showMatchTiles = function () {
        GameFactory.getMatchedGames(self.id).then(function (response) {
            var modalInstance = $uibModal.open({
                templateUrl: '../../Game/Views/showMatchTiles.html',
                controller: require("../../Game/Controllers/matchTilesController"),
                controllerAs: "mt",
                size: 'lg',
                resolve: {
                    tiles: function () {
                        console.log("machted tiles");
                        return response.data;
                    },
                    players: function () {
                        return self.game.getPlayers();
                    }
                }
            });
        })
    };

    self.changeStyle = function() {
        if(self.style) {
            self.tileStyle = "style1";
        } else {
            self.tileStyle = "style2";
        }
        self.style = !self.style;
    };

    function showGame(id) {
        GameListService.getBoardTiles(id).then(function (value) {
            setupGame(value.data);
        });
    }

    //zorgt dat alles geregeld word om de game te kunnen spelen
    function setupGame(tiles) {
        BoardService.init(tiles, self.canPlay);
    }

};