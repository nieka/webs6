/**
 * Created by niek on 13-5-2016.
 */

var Game = require('../../Game/Models/Game');

module.exports = function($scope,$state, ProfielController,GameListFactory,$stateParams ) {

    var self = this;
    self.username;

    self.init = function(){
        if($stateParams.username === undefined){
            self.username = window.localStorage['username'];
        } else {
            self.username = $stateParams.username;
        }

        var token = $stateParams.token;

        //tokene en username opslaan als het nodig is
        if(window.localStorage['token'] === undefined && window.localStorage['username'] === undefined){
            if($stateParams.token != undefined && $stateParams.username != undefined){
                window.localStorage['token'] = $stateParams.token;
                window.localStorage['username'] = self.username;
            }
        }
        $state.transitionTo('profiel.gamelist',{userid: self.username});

    };
};