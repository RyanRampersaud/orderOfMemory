//Round Number
var roundNum = 0;

//Displayed Number
var screenNum = ['1','3','2','1','4'];

//The number sequence for each round
var buttonSeq = [
					['1','2','3','4'],
					['2','1','4','3'],
					['3','4','2','1'],
					['4','3','1','2'],
					['2','4','3','1'] ];
//row variable
var row =0;

//colu variable
var colu = 0;
//Text to display task
var text = "This is a test";

//The user choice
var userSelection = 0;

//Check if it is round 1 and update 
	$('.screen').text(screenNum[roundNum]);
	$('.btnOne').text(buttonSeq[row][colu]);
	colu++;
	$('.btnTwo').text(buttonSeq[row][colu]);
	colu++;
	$('.btnThree').text(buttonSeq[row][colu]);
	colu++;
	$('.btnFour').text(buttonSeq[row][colu]);



//Stage 1:
// If the display is 1, press the button in the second position.
// If the display is 2, press the button in the second position.
// If the display is 3, press the button in the third position.
// If the display is 4, press the button in the fourth position.

// Stage 2:
// If the display is 1, press the button labeled "4".
// If the display is 2, press the button in the same position as you pressed in stage 1.
// If the display is 3, press the button in the first position.
// If the display is 4, press the button in the same position as you pressed in stage 1.

// Stage 3:
// If the display is 1, press the button with the same label you pressed in stage 2.
// If the display is 2, press the button with the same label you pressed in stage 1.
// If the display is 3, press the button in the third position.
// If the display is 4, press the button labeled "4".

// Stage 4:
// If the display is 1, press the button in the same position as you pressed in stage 1.
// If the display is 2, press the button in the first position.
// If the display is 3, press the button in the same position as you pressed in stage 2.
// If the display is 4, press the button in the same position as you pressed in stage 2.

// Stage 5:
// If the display is 1, press the button with the same label you pressed in stage 1.
// If the display is 2, press the button with the same label you pressed in stage 2.
// If the display is 3, press the button with the same label you pressed in stage 4.
// If the display is 4, press the button with the same label you pressed in stage 3.
