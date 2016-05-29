/**
 * Created by niek on 10-5-2016.
 */
module.exports = function($stateProvider) {
    $stateProvider
        .state('games', {
            url: '/games',
            templateUrl: 'GameList/Views/GameList.html',
            controller: 'GameListController as g'
        })
        .state('authcallback', {
            url: '/authcallback?:username&:token',
            templateUrl : 'Profiel/Views/profiel.html',
            controller  : 'ProfielController as p'
        })
        .state('profiel', {
            url: '/profiel',
            templateUrl : 'Profiel/Views/profiel.html',
            controller  : 'ProfielController as p'
        })
        .state('profiel.gamelist', {
            params: {
                userid: null
            },
            templateUrl: 'GameList/Views/GameList.html',
            controller: 'GameListController as g'
        })
        .state('showGame', {
            params: {
               id: null
            },
            url: '/showGame',
            templateUrl: 'GameList/Views/showGame.html',
            controller: 'ShowGameController as sg'
        });
};