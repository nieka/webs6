/**
 * Created by Raymond Phua on 18-Apr-16.
 */
require('angular/angular');

//Create app
var app = angular.module('mahjong', []);
var playerFactory = require('../Player/Services/PlayerFactory');
var playerController = require('../Player/Controllers/PlayerController');

app.factory('PlayerFactory', playerFactory);
app.controller('PlayerController', ['$scope', 'PlayerFactory', playerController]);