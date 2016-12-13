/***** RULES *******
** foundations container - starts at A(1) and adds up to King(13);
** there are 4 suits, spades, hearts, clubs, diamonds
** last card from any suite can be placed back onto the board
** valid move - selected card can only be placed on foundation if it
*******       - is a 1 or
*******       - if last card in array is equal to selected card minus 1 &&
*******       - suite equals same suite (1, 2, 3, 4)
*******       - if array is empty display suite else display last card in array
*******       - can move card on top to another card on the board
*******       - if moving card is smaller than target card by minus 1 && !color
*******       - so foundation suite array.pop and target playArrayX(col 1-7).push
*******       - if foundation event click, array !empty, run isValidMove
*******
**isValidMove - get selected card data
*******       - moving card from board to foundation
*******       - if selected card.value is target card.value + 1 &&
*******       - selected card.suite === target card.suite ||
*******       - selected card.value === 1 && target.value === empty array
*******       - moving card from board to board
*******       - if selected card.value is target card.value minus 1 && !same color
*******       - else return false (do nothing)
*******
** game board - contains 7 rows and 7 columns
*******       - first row, first column card is face up, rest of cards is hidden
*******       - second row, second column card is face up, rest is hidden
*******       - third row, third column card is face up, rest is hidden
*******       - 4th row, 4th column card is shown, rest is hidden
*******       - 5th row, 5th column card is shown, rest is hidden
*******       - 6th row, 6th column card is shown, rest is hidden
*******       - 7th row, 7th column card is shown, rest is hidden
** draw pile  - contains remaining cards after setting up the board;
*******       - populate array
*******       - cards are hidden, if empty, show option to move waste pile cards
*******       - back into pile and clear waste pile;
*******       - click draws/shifts top/front card,
*******       - shifts draw pile by 1 from the front/top of array
** waste pile - top card contains card drawn from draw pile;
*******       - push drawn card into array
*******       - next card drawn replaces current card, display last card in array
*******       - pushing drawn card to end of array
*******
** move card  - target array.push selected array.pop value
