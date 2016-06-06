/**
 * Created by Raymond Phua on 29-5-2016.
 */
module.exports = function(){
    return {
        restrict : 'EA',
        scope: {
            tile: "=tileinfo",
            match: "="
        },
        controller: 'TileController',
        controllerAs: 't',
        bindToController: true,
        templateUrl: '../../Game/Views/tile.html'
    }
};