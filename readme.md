========================================================================
I. STAR WAR!
========================================================================

    
Star War is based off of the classic card game of War.


========================================================================
II. TECHNOLOGIES USED
========================================================================


1. HTML
2. Javascript
3. CSS


========================================================================
III. GETTING STARTED
========================================================================


1. To begin the game, press the "Shuffle" button to shuffle the deck of 
cards visible a top the game board.

2. To deal out and equal amount of cards to the players, press the "Deal" 
button. 

3. Each round begins when both players push a card into play. To do so, 
press the "Push" button.

4. Once in play, the cards will be evaluated according to rank.  To do 
so, press the "Battle" button. The player with the higher ranking card
wins the battle and both cards in play.

5. If both cards are evaluated and determined equal, the players enter
into a war.  While at war, the stakes are raised and both players must
push an additional four cards from their hand into play.  To do so, press
the "War" button.  

6. The last card pushed into play by each player is evaluated, and the 
player with the higher ranking card wins the war and all of the cards in 
play. If the last cards in play are equal, the players re-enter war and 
repeat the process until a winner is declared.   

7. The game is over once one player wins all of the cards. 

8. To restart the game, press the "Reset" button. This repopulates the 
deck, which can then be re-shuffled and dealt out to the players for 
another game. 


========================================================================
IV. UNSOLVED PROBLEMS
========================================================================


1. Assigning each card a specific suit and rank to utilize in the game logic
2. Display card images in the DOM
3. Various CSS issues, related to spacing the elements around one another
4. Getting the "Push" button to hide once a round enters war - it allows
the potential for a bug if the player mistakenly presses it instead of the
"War" button
5. Having a visual representation of the cards in player hands, like a tally
score, rather than the numerical values of the cards in both players' hands


========================================================================
USER STORIES
========================================================================

I. MVP 

    A playable version of the classic card game war.  A function to shuffle
    and deal the array of playable cards/items to each player.  A function 
    to evaluate each players' cards in play, and assigns a winner according
    to whomeever had the numerical value in play.  A function that enables 
    the winner player to collect both his and his opponent's card in play. A
    function that declares a winner once a player collects all of the playable
    cards in the game. 

II. Completed
    
    Functions: 
    1. Shuffle deck, 
    2. Deal deck,
    3. Push cards in play, 
    4. Compare values of cards in battle play 
    5. War - if cards in battle are equal, pushes additional cards in play
    6. Compare war - if cards in war are equal, pushes additional cards
    into play. Otherwise evaluates card values to determine a winner
    7. Collection - gathers cards in play and pushes them into player hands
    8. Reset - empties player hands and resets the deck 

    Design: 
    1. Added Star Wars theme 
    2. Added logos for rebel force and empire to distinguish teams
    2. Buttons appear/disappear to execute proper game flow

III. Icebox

    1. Multi-Player mode
    2. How to incorporate cards as objects into existing game logic 
    3. Displaying specific suit and rank values within DOM 
    4. Incorporating Star Wars sound effects into game 



