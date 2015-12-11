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
	var row = 0;
	//colu variable
	var colu = 0;
	//Text to display task
	var text = "This is a test";

	//The user choice
	var userSelection = 0;

	//Check if it is round 1 and update 
	if(roundNum==0){
	    $('.screen').text(screenNum[roundNum]);
	    $('.btnOne').text(buttonSeq[row][colu]);
	    colu++;
	    $('.btnTwo').text(buttonSeq[row][colu]);
	    colu++;
	    $('.btnThree').text(buttonSeq[row][colu]);
	    colu++;
	    $('.btnFour').text(buttonSeq[row][colu]);

	    if (screenNum[0]==1) {
	        $('.gametext').text('If the display is 1, press the button in the first position.');
	        
	        $('.btnOne').click(function(){
	        	roundNum++;
	        	console.log('ygygy', roundNum);
	        });

	        console.log("yeas", roundNum);
	    }

	    else if (screenNum[0]==2) {
	        $('.gametext').text('If the display is 2, press the button in the second position.');
	    }

	    else if (screenNum[0]==3) {
	        $('.gametext').text('If the display is 3, press the button in the third position.');
	    }

	    else if(screenNum[0]==4) {
	        $('.gametext').text('If the display is 4, press the button in the fourth position.');
	    }

	};
			
	//Check if its round 2 and update
	if (roundNum == 1) {
	    $('.screen').text(screenNum[roundNum]);
	    row++;
	    $('.btnOne').text(buttonSeq[row][colu]);
	    colu++;
	    $('.btnTwo').text(buttonSeq[row][colu]);
	    colu++;
	    $('.btnThree').text(buttonSeq[row][colu]);
	    colu++;
	    $('.btnFour').text(buttonSeq[row][colu]);

	    if (screenNum[1]==1) {
	        $('.gametext').text('If the display is 1, press the button labeled "4".');
	    }

	    else if (screenNum[1]==2) {
	        $('.gametext').text('If the display is 2, press the button in the same position as you pressed in stage 1.');
	    }

	    else if (screenNum[1]==3) {
	        $('.gametext').text('If the display is 3, press the button in the first position.');
	    }

	    else if (screenNum[1]==4) {
	        $('.gametext').text('If the display is 4, press the button in the same position as you pressed in stage 1.');
	    }
	}

	//Check if its round 3 and update
	if (roundNum==2){
	    $('.screen').text(screenNum[roundNum]);
	    row++;
	    $('.btnOne').text(buttonSeq[row][colu]);
	    colu++;
	    $('.btnTwo').text(buttonSeq[row][colu]);
	    colu++;
	    $('.btnThree').text(buttonSeq[row][colu]);
	    colu++;
	    $('.btnFour').text(buttonSeq[row][colu]);

	    if (screenNum[2]==1) {
	        $('.gametext').text('If the display is 1, press the button with the same label you pressed in stage 2.');
	    };

	    if (screenNum[2]==2) {
	        $('.gametext').text('If the display is 2, press the button with the same label you pressed in stage 1.');
	    };

	    if (screenNum[2]==3) {
	        $('.gametext').text('If the display is 3, press the button in the third position.');
	    };

	    if (screenNum[2]==4) {
	        $('.gametext').text('If the display is 4, press the button labeled "4".');
	    };
	}
	//Check if its round 4 and update
	if (roundNum==3){
	    $('.screen').text(screenNum[roundNum]);
	    row++;
	    $('.btnOne').text(buttonSeq[row][colu]);
	    colu++;
	    $('.btnTwo').text(buttonSeq[row][colu]);
	    colu++;
	    $('.btnThree').text(buttonSeq[row][colu]);
	    colu++;
	    $('.btnFour').text(buttonSeq[row][colu]);

	    if (screenNum[3]==1) {
	        $('.gametext').text('If the display is 1, press the button in the same position as you pressed in stage 1.');
	    };

	    if (screenNum[3]==2) {
	        $('.gametext').text('If the display is 2, press the button in the first position.');
	    };

	    if (screenNum[3]==3) {
	        $('.gametext').text('If the display is 3, press the button in the same position as you pressed in stage 2.');
	    };

	    if (screenNum[3]==4) {
	        $('.gametext').text('If the display is 4, press the button in the same position as you pressed in stage 2.');
	    };
	}
	//Check if its round 5 and update
	 if (roundNum==4){
	    $('.screen').text(screenNum[roundNum]);
	    row++;
	    $('.btnOne').text(buttonSeq[row][colu]);
	    colu++;
	    $('.btnTwo').text(buttonSeq[row][colu]);
	    colu++;
	    $('.btnThree').text(buttonSeq[row][colu]);
	    colu++;
	    $('.btnFour').text(buttonSeq[row][colu]);

	    if (screenNum[4]==1) {
	        $('.gametext').text('If the display is 1, press the button with the same label you pressed in stage 1.');
	    };

	    if (screenNum[4]==2) {
	        $('.gametext').text('If the display is 2, press the button with the same label you pressed in stage 2.');
	    };

	    if (screenNum[4]==3) {
	        $('.gametext').text('If the display is 3, press the button with the same label you pressed in stage 4.');
	    };

	    if (screenNum[4]==4) {
	        $('.gametext').text('If the display is 4, press the button with the same label you pressed in stage 3.');
	    };
	}
	//Checks if the user completes all of the round and display that is is game over and they have won


	//Stage 1:
	// If the display is 1, press the button in the first position.
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
