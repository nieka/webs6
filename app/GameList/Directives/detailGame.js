/**
 * Created by niek on 25-5-2016.
 */
module.exports = function(){
    return {
        restrict : 'EA',
        scope: {
            selectedgame: '=selectedgame'
        },
        templateUrl: '../../GameList/Views/detailGame.html',
        controller : 'DetailGameController',
        controllerAs: 'dg',
        bindToController: true //required in 1.3+ with controllerAs
    }
};