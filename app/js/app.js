/**
 * Created by Raymond Phua on 18-Apr-16.
 */
require('angular/angular.min');

//Create app
var app = angular.module('mahjong', []);
var playerFactory = require('../Player/Services/PlayerFactory');
var playerController = require('../Player/Controllers/PlayerController');
var gameFactory = require('../Game/Services/GameFactory');
var boardService = require('../Game/Services/BoardService');
var gameController = require('../Game/Controllers/GameController');

app.service('PlayerFactory', playerFactory);
app.service('BoardService', boardService);
app.service('GameFactory', gameFactory);

app.controller('PlayerController', ['$scope', 'PlayerFactory', playerController]);
app.controller('GameController', ['$scope', 'GameFactory', 'BoardService', gameController]);