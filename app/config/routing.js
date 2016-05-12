/**
 * Created by niek on 10-5-2016.
 */
module.exports = function($stateProvider) {
    $stateProvider
        .state('games', {
            url: '/games',
            templateUrl: 'GameList/Views/GameList.html',
            controller: 'GameListController as g'
        });
};