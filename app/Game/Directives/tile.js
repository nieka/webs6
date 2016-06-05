/**
 * Created by Raymond Phua on 29-5-2016.
 */
module.exports = function(){
    return {
        restrict : 'EA',
        scope: {
            tile: "=tileinfo"
        },
        controller: 'TileController',
        controllerAs: 't',
        bindToController: true,
        template: '<div class="tile {{t.tile.tile.suit}}{{t.tile.tile.name}}" style="left: {{t.tile.xPos * 36 - 12* t.tile.zPos}}px; top: {{t.tile.yPos * 45 - 12 * t.tile.zPos}}px; z-index: {{t.tile.zPos}};"></div>'
    }
};