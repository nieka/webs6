/**
 * Created by niek on 25-4-2016.
 */
describe('gameCRl', function(){
    var gameFactory;
    var scope;
    var gameCtrl;

    beforeEach(function(){
        module('mahjong');

        inject(function($rootScope, $controller, $injector){

            scope = $rootScope.$new();
            gameFactory = $injector.get('GameFactory');
            gameCtrl = $controller('GameController',{$scope: scope});

            //gameFactory stubben
        })
    });
    describe('getGames', function(){
        it('should return 2 games', function(){

            gameCtrl.games = [];

            gameCtrl.newGame();

            expect(gameCtrl.games).to.have.length(1);
        })
    })
});