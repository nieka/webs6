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


app.factory('PlayerFactory', playerFactory);
app.factory('BoardService', boardService);
app.factory('GameFactory', gameFactory);
app.factory('GameListService', gameListService);
app.factory('ProfielService', profielService);

app.controller('PlayerController', ['$scope', 'PlayerFactory', playerController]);
app.controller('GameController', ['$scope', 'GameFactory', gameController]);
app.controller('GameListController', ['$scope', 'GameListService', gameListController]);
app.controller('ProfielController', ['$scope', 'ProfielService','GameListService', '$stateParams', profielController]);

//config
app.config(require('../config/routing'));