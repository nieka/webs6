/**
 * Created by Raymond Phua on 28-5-2016.
 */

module.exports = function($scope,BoardService) {
    var self = this;

    self.selected = false;

    self.tileClick = function(tile){
        if(self.selected){
            self.selected = false;
            BoardService.deselect(tile);
        } else {
            self.selected = BoardService.checkAvailable(tile);
        }

        if(BoardService.amountOfSelectedTiles() === 2){
            self.match();
        }
    }
};