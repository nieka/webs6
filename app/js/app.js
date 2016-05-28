require('angular/angular.min');
require('angular-ui-router/release/angular-ui-router.min');

//Create app
var app = angular.module('mahjong', [
    "ui.router"
]);

var playerFactory = require('../Player/Services/PlayerFactory');
var playerController = require('../Player/Controllers/PlayerController');
var gameFactory = require('../Game/Services/GameFactory');
var boardService = require('../Game/Services/BoardService');
var gameController = require('../Game/Controllers/GameController');
var gameListController = require('../GameList/Controllers/GameListController');
var gameListService = require('../GameList/services/GameListService');
var profielService = require('../Profiel/Services/ProfielService');
var profielController = require('../Profiel/Controllers/Profielcontroller');
var addGameController = require('../GameList/Controllers/addGameController');
var showGameController = require('../GameList/Controllers/showGameController');

app.factory('PlayerFactory', playerFactory);
app.factory('BoardService', boardService);
app.factory('GameFactory', gameFactory);
app.factory('GameListService', gameListService);
app.factory('ProfielService', profielService);
app.factory('httpRequestInterceptor', require('../config/httpinterceptors'));

app.controller('PlayerController', ['$scope', 'PlayerFactory', playerController]);
app.controller('GameController', ['$scope', 'GameFactory', gameController]);
app.controller('GameListController', ['$scope','$stateParams', 'GameListService', 'GameFactory', 'BoardService', gameListController]);
app.controller('ProfielController', ['$scope','$state', 'ProfielService','GameListService', '$stateParams', profielController]);
app.controller('AddGameController', ['$scope','GameListService', addGameController]);
app.controller('ShowGameController', ['$scope', '$state', 'GameFactory', 'BoardService', showGameController]);

//directives
app.directive('addGame', require('../GameList/Directives/addGame'));


//config
app.config(require('../config/routing'));
app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
});