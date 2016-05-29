/**
 * Created by Raymond Phua on 29-5-2016.
 */
module.exports = function(){
    return {
        restrict : 'E',
        template: '<div class="tile" ng-click="sg.checkAvailable(tile)"></div>'
    }
};