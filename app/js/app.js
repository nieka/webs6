/**
 * Created by Raymond Phua on 18-Apr-16.
 */
require('angular/angular.min');

//Create app
var app = angular.module('mahjong', []);
var playerFactory = require('../Player/Services/PlayerFactory');
var playerController = require('../Player/Controllers/PlayerController');
var gameFactory = require('../Game/Services/GameFactory');
var gameController = require('../Game/Controllers/GameController');

app.factory('PlayerFactory', playerFactory);
app.factory('GameFactory', gameFactory);
app.controller('PlayerController', ['$scope', 'PlayerFactory', playerController]);
app.controller('GameController', ['$scope', 'GameFactory', gameController]);