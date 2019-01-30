// 'use strict'; // Use strict version of JavaScript

// // Create a line reading interface
// const readline = require('readline').createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });


// /* 
// const rl = () =>
// 	new Promise((resolve) => {
// 		readline.question(`What's your name?`, (ans) => {

// 			resolve(ans);

// 			log('Before close')
// 			readline.close();
// 		});
// 	});



// rl()
// 	.then((val) => {
// 		console.log(val)
// 		log('After print')
// 	});

// */




// module.exports = (input = '') =>
// 	new Promise((resolve) => {
// 		readline.question(input, (ans) => {
// 			resolve(ans);
// 			// readline.close();
// 		});
// 	});



// module.exports('Hello: ')
// 	.then((val) => {
// 		console.log(val)
// 	});

// module.exports('Ques fr u: ')
// 	.then((val) => {
// 		console.log(val)
// 		readline.close();
// 	});




// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("Please input text in command line.");

process.stdout.write(': ');

// When user input data and click enter key.
standard_input.on('data', function (data) {

	// User input exit.
	if (data === 'exit\n') {
		// Program exit.
		console.log("User input complete, program exit.");
		process.exit();
	} else {
		// Print user input in console.
		process.stdout.write('User Input Data : ' + data);
	}
	process.stdout.write(': ');
});