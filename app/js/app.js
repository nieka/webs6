require('angular/angular.min');
require('angular-ui-router/release/angular-ui-router.min');
require('angular-ui-bootstrap/dist/ui-bootstrap-tpls');

//Create app
var app = angular.module('mahjong', [
    "ui.router",
    "ui.bootstrap"
]);

var indexController = require('../indexController');
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
var showGameController = require('../Game/Controllers/showGameController');
var tileController = require('../Game/Controllers/tileController');
var detailGameController = require('../GameList/Controllers/detailGameController');

app.factory('PlayerFactory', playerFactory);
app.factory('BoardService', boardService);
app.factory('GameFactory', gameFactory);
app.factory('GameListService', gameListService);
app.factory('ProfielService', profielService);
app.factory('httpRequestInterceptor', require('../config/httpinterceptors'));

app.controller('IndexController', ['$state', indexController]);
app.controller('PlayerController', ['$scope', 'PlayerFactory', playerController]);
app.controller('GameController', ['$scope', 'GameFactory', gameController]);
app.controller('GameListController', ['$scope','$stateParams', 'GameListService','$uibModal', gameListController]);
app.controller('ProfielController', ['$scope','$state', 'ProfielService','GameListService', '$stateParams', profielController]);
app.controller('AddGameController', ['$scope','GameListService', addGameController]);
app.controller('DetailGameController', ['$scope','GameListService','$uibModalInstance', detailGameController]);
app.controller('ShowGameController', ['$scope', '$stateParams','$state', 'GameListService', 'BoardService','GameFactory','$uibModal', showGameController]);
app.controller('TileController', ['$scope', 'BoardService', tileController]);

//directives
app.directive('addGame', require('../GameList/Directives/addGame'));
app.directive('detailGame', require('../GameList/Directives/detailgame'));

app.directive('tile', require('../Game/Directives/tile'));

//config
app.config(require('../config/routing'));
app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
});
