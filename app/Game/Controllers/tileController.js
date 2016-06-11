/**
 * Created by Raymond Phua on 28-5-2016.
 */

module.exports = function($scope,BoardService) {
    var self = this;

    self.selected = false;

    self.tileClick = function(){
        if(self.tile.selected){
            self.tile.selected = false;
            BoardService.deselect(self.tile);
        } else {
            self.tile.selected = BoardService.checkAvailable(self.tile);
        }

        if(BoardService.amountOfSelectedTiles() === 2){
            self.match();
        }
    };

    self.isSelected = function(){
        return self.tile.selected;
    }
};