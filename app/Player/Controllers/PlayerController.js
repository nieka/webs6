/**
 * Created by Raymond Phua on 18-Apr-16.
 */
// PlayerController.js
module.exports = function($scope, PlayerFactory) {

    this.players = PlayerFactory.players;
    console.log('players: ');
    console.log(this.players);
};