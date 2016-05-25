/**
 * Created by niek on 23-5-2016.
 */
module.exports = function(){
  return {
      restrict : 'E',
      templateUrl: '../../GameList/Views/addGame.html',
      controller : 'AddGameController',
      controllerAs: 'ag',
      bindToController: true //required in 1.3+ with controllerAs
  }
};