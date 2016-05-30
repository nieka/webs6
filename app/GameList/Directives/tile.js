/**
 * Created by Raymond Phua on 29-5-2016.
 */
module.exports = function(){
    return {
        restrict : 'EA',
        scope: {
            // name: "=",
            // suit: "=",
            // left: "=",
            // top: "=",
            // z: "=",
            tile: "=tileInfo"
        },
        controller: 'TileController',
        controllerAs: 't',
        bindToController: true,
        template: '<div class="tile test" style="left: {{t.tile.xPos}}px; top: {{t.tile.yPos}}px; z-index: {{t.tile.zPos}};">{{t.tile.tile.suit}} {{t.tile.tile.name}}</div>'
    }
};