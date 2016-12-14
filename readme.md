A readme.md file with:
A description of your game ([Use Your Game's Name])

**Simon Game**
<description>

*Technologies Used*
1. HTML/CSS
2. Javascript

*Getting Started / How to Play (Single Player)*
1. Start game by clicking GAME button
2. Select level of difficulty by selecting lens
    2a. 'green' = Level 1 (8 signals)
    2b. 'yellow' = Level 2 (14 signals)
    2c. 'blue' = Level 3 (20 signals)
    2d. 'red' = Level 4 (31 signals)
3. Click START button to begin
    3a. Simon will start by giving 1st signal
    3b. Click same signal (WITHIN 3 SECONDS) to match Simon's sequence
4. Game Play
    4a. Simon will build sequence length, up to 31 signals
    4b. Simon will speed up signal release
5. How to Win
    5a. Follow all of Simon's sequences correctly, up to sequence.length==31 through the most difficult level

*Next Steps*
* Make Simon play his own sequence
* Black out Start button after first click (and until streak break)
* Timer (player has 3 seconds to make next selection)
* Track record streak
* Keep track of rounds played (successfully) to increment difficulty
* Make tiered difficulty levels (lengthen sequences, speed up signals)
* Implement multi-player and corresponding winners/losers
* Make game playable on keyboard (number keys = color selection)


*Current Bugs*
* Simon's sequence doubles up if start is clicked multiple times
