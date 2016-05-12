/**
 * Created by niek on 25-4-2016.
 */

describe('gameCRl', function(){
    var gameFactory;
    var scope;
    var gameCtrl;
    var httpBackend;


    beforeEach(function(){
        module('mahjong');

        inject(function($rootScope, $controller, $injector){

            httpBackend = $injector.get('$httpBackend');
            scope = $rootScope.$new();
            gameFactory = $injector.get('GameFactory');
            gameCtrl = $controller('GameController',{$scope: scope});

        })
    });

    describe('matching', function(){
        it('should return that there is no match', function(){
            var gameId = 9;
            var tiles =
                [
                    {
                        "xPos": 11, "yPos": 12, "zPos": 3,
                        "tile": {
                            "_id": 48, "suit": "Bamboo", "name": "4", "matchesWholeSuit": false, "__v": 0, "id": "48"
                        }
                        , "_id": "1"
                    },
                    {
                        "xPos": 19, "yPos": 10, "zPos": 3,
                        "tile": {
                            "_id": 125, "suit": "Dragon", "name": "2", "matchesWholeSuit": false, "__v": 0, "id": "125"
                        },
                        "_id": "2"
                    }
                ];

            httpBackend
                .when('GET','https://mahjongmayhem.herokuapp.com/games/' + gameId + '/tiles')
                .respond(tiles);

            //Act
            gameCtrl.newGame();
            gameCtrl.showGame(gameId);

            httpBackend.flush();

            //Assert
            expect(gameCtrl.matchTiles("1","2")).to.equal(false);
        });
        it('should return that there is a match', function(){
            var gameId = 9;
            var tiles =
                [
                    {
                        "xPos": 11, "yPos": 12, "zPos": 3,
                        "tile": {
                            "_id": 48, "suit": "Bamboo", "name": "4", "matchesWholeSuit": false, "__v": 0, "id": "48"
                        }
                        , "_id": "1"
                    },
                    {
                        "xPos": 19, "yPos": 10, "zPos": 3,
                        "tile": {
                            "_id": 125, "suit": "Bamboo", "name": "4", "matchesWholeSuit": false, "__v": 0, "id": "125"
                        },
                        "_id": "2"
                    }
                ];
            httpBackend
                .when('GET','https://mahjongmayhem.herokuapp.com/games/' + gameId + '/tiles')
                .respond(tiles);

            //Act
            gameCtrl.newGame();
            gameCtrl.showGame(gameId);

            httpBackend.flush();

            //Assert
            expect(gameCtrl.matchTiles("1","2")).to.equal(true);
        });
        it('should return that there is a match with matchesWholeSuit true', function(){
            var gameId = 9;
            var tiles =
                [
                    {
                        "xPos": 11, "yPos": 12, "zPos": 3,
                        "tile": {
                            "_id": 48, "suit": "Dragon", "name": "4", "matchesWholeSuit": true, "__v": 0, "id": "48"
                        }
                        , "_id": "1"
                    },
                    {
                        "xPos": 19, "yPos": 10, "zPos": 3,
                        "tile": {
                            "_id": 125, "suit": "Dragon", "name": "2", "matchesWholeSuit": true, "__v": 0, "id": "125"
                        },
                        "_id": "2"
                    }
                ];
            httpBackend
                .when('GET','https://mahjongmayhem.herokuapp.com/games/' + gameId + '/tiles')
                .respond(tiles);

            //Act
            gameCtrl.newGame();
            gameCtrl.showGame(gameId);

            httpBackend.flush();

            //Assert
            expect(gameCtrl.matchTiles("1","2")).to.equal(true);
        });
    });

    describe('selecting a tile', function(){
        it('should return false if the selected tile is not available (tiles left and right)', function(){
            var gameId = 9;
            var tiles =
                [
                    {
                        "xPos": 0, "yPos": 1, "zPos": 3,
                        "tile": {
                            "_id": 48, "suit": "Bamboo", "name": "4", "matchesWholeSuit": false, "__v": 0, "id": "48"
                        }
                        , "_id": "1"
                    },
                    {
                        "xPos": 2, "yPos": 0, "zPos": 3,
                        "tile": {
                            "_id": 125, "suit": "Bamboo", "name": "4", "matchesWholeSuit": false, "__v": 0, "id": "125"
                        },
                        "_id": "2"
                    },
                    {
                        "xPos": 4, "yPos": 0, "zPos": 3,
                        "tile": {
                            "_id": 48, "suit": "Bamboo", "name": "4", "matchesWholeSuit": false, "__v": 0, "id": "48"
                        }
                        , "_id": "1"
                    },
                    {
                        "xPos": 0, "yPos": 2, "zPos": 3,
                        "tile": {
                            "_id": 125, "suit": "Bamboo", "name": "4", "matchesWholeSuit": false, "__v": 0, "id": "125"
                        },
                        "_id": "2"
                    },
                    {
                        "xPos": 2, "yPos": 2, "zPos": 3,
                        "tile": {
                            "_id": 48, "suit": "Bamboo", "name": "4", "matchesWholeSuit": false, "__v": 0, "id": "48"
                        }
                        , "_id": "1"
                    },
                    {
                        "xPos": 4, "yPos": 2, "zPos": 3,
                        "tile": {
                            "_id": 125, "suit": "Bamboo", "name": "4", "matchesWholeSuit": false, "__v": 0, "id": "125"
                        },
                        "_id": "2"
                    },
                    {
                        "xPos": 0, "yPos": 4, "zPos": 3,
                        "tile": {
                            "_id": 48, "suit": "Bamboo", "name": "4", "matchesWholeSuit": false, "__v": 0, "id": "48"
                        }
                        , "_id": "1"
                    },
                    {
                        "xPos": 2, "yPos": 4, "zPos": 3,
                        "tile": {
                            "_id": 125, "suit": "Bamboo", "name": "4", "matchesWholeSuit": false, "__v": 0, "id": "125"
                        },
                        "_id": "2"
                    },
                    {
                        "xPos": 4, "yPos": 4, "zPos": 3,
                        "tile": {
                            "_id": 48, "suit": "Bamboo", "name": "4", "matchesWholeSuit": false, "__v": 0, "id": "48"
                        }
                        , "_id": "1"
                    }
                ];

            httpBackend
                .when('GET','https://mahjongmayhem.herokuapp.com/games/' + gameId + '/tiles')
                .respond(tiles);

            //Act
            gameCtrl.newGame();
            gameCtrl.showGame(gameId);

            httpBackend.flush();

            //Assert
            expect(gameCtrl.selectTile(tiles[1])).to.equal(false);
        });

        it('should return false if the selected tile is not available (tile on top)', function(){
            var gameId = 9;

            //tile zPos = 3 and tile zPos = 4 == on top == no clickable
            var tiles =
                [
                    {
                        "xPos": 2, "yPos": 0, "zPos": 3,
                        "tile": {
                            "_id": 125, "suit": "Bamboo", "name": "4", "matchesWholeSuit": false, "__v": 0, "id": "125"
                        },
                        "_id": "2"
                    },
                    {
                        "xPos": 2, "yPos": 0, "zPos": 4,
                        "tile": {
                            "_id": 125, "suit": "Bamboo", "name": "4", "matchesWholeSuit": false, "__v": 0, "id": "125"
                        },
                        "_id": "2"
                    }
                ];

            httpBackend
                .when('GET','https://mahjongmayhem.herokuapp.com/games/' + gameId + '/tiles')
                .respond(tiles);

            //Act
            gameCtrl.newGame();
            gameCtrl.showGame(gameId);

            httpBackend.flush();

            //Assert
            expect(gameCtrl.selectTile(tiles[0])).to.equal(false);
        });

        it('should return true if the selected tile is available (no tile on the left side + no tile on top)', function(){
            var gameId = 9;

            //tile 1 has no tile to the left, but does have a tile to the right
            var tiles =
                [
                    {
                        "xPos": 2, "yPos": 0, "zPos": 3,
                        "tile": {
                            "_id": 125, "suit": "Bamboo", "name": "4", "matchesWholeSuit": false, "__v": 0, "id": "125"
                        },
                        "_id": "2"
                    },
                    {
                        "xPos": 4, "yPos": 0, "zPos": 3,
                        "tile": {
                            "_id": 48, "suit": "Bamboo", "name": "4", "matchesWholeSuit": false, "__v": 0, "id": "48"
                        }
                        , "_id": "1"
                    }
                ];

            httpBackend
                .when('GET','https://mahjongmayhem.herokuapp.com/games/' + gameId + '/tiles')
                .respond(tiles);

            //Act
            gameCtrl.newGame();
            gameCtrl.showGame(gameId);

            httpBackend.flush();

            //Assert
            expect(gameCtrl.selectTile(tiles[0])).to.equal(true);
        });

        it('should return true if the selected tile is available (no tile on the right side + no tile on top)', function(){
            var gameId = 9;

            //tile 1 has no tile to the left, but does have a tile to the right
            var tiles =
                [
                    {
                        "xPos": 0, "yPos": 0, "zPos": 3,
                        "tile": {
                            "_id": 125, "suit": "Bamboo", "name": "4", "matchesWholeSuit": false, "__v": 0, "id": "125"
                        },
                        "_id": "2"
                    },
                    {
                        "xPos": 2, "yPos": 0, "zPos": 3,
                        "tile": {
                            "_id": 48, "suit": "Bamboo", "name": "4", "matchesWholeSuit": false, "__v": 0, "id": "48"
                        }
                        , "_id": "1"
                    }
                ];

            httpBackend
                .when('GET','https://mahjongmayhem.herokuapp.com/games/' + gameId + '/tiles')
                .respond(tiles);

            //Act
            gameCtrl.newGame();
            gameCtrl.showGame(gameId);

            httpBackend.flush();

            //Assert
            expect(gameCtrl.selectTile(tiles[1])).to.equal(true);
        });
    });
});