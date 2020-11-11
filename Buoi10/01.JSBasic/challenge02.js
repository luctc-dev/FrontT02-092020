var scoreJohn = (89 + 120 + 103) / 3, 
    scoreMark = (116 + 94 + 123) / 3,
    scoreMary = (97 + 134 + 105) / 3;

// Test case
// scoreJohn = scoreMary;
scoreMark = 150;
// scoreJohn = 150;
scoreMary = 150;

console.log("scoreJohn = ", scoreJohn);
console.log("scoreMark = ", scoreMark);
console.log("scoreMary = ", scoreMary);



if(scoreJohn > scoreMark && scoreJohn > scoreMary) {
    console.log("Đội của John thắng với số điểm = ", scoreJohn);
} else if (scoreMark > scoreJohn && scoreMark > scoreMary) {
    console.log("Đội của Mark thắng với số điểm = ", scoreMary);
} else if (scoreMary > scoreJohn && scoreMary > scoreMark) {
    console.log("Đội của Mary thắng với số điểm = ", scoreMary);
} else if (scoreJohn === scoreMark && scoreMark === scoreMary){
    console.log("Ba đội hoà nhau với số điểm là = ", scoreJohn);
} else if (scoreJohn === scoreMark) {
    console.log('Đội của John và Mark hoà nhau với số điểm = ', scoreJohn);
} else if (scoreJohn === scoreMary) {
    console.log('Đội của John và Mary hoà nhau với số điểm = ', scoreJohn);
} else {
    console.log('Đội của Mark và Mary hoà nhau với số điểm = ', scoreMark);
}