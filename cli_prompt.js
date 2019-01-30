// 'use strict'; // Use strict version of JavaScript

const log = (str) => console.log(str);
const print = (buf) => process.stdout.write(buf);

// Get process.stdin as the standard input object with UTF8 encoding
const stdin = process.stdin.setEncoding('utf-8');

// print('Please input text in command line.\n');

const prompt = (prompt_symbol = '> ') => print(prompt_symbol);

// Display prompt to user to input data in console at the start of the prompt running.
prompt();



// The user of this library can either use the default event Handler for new data or use their own functions


// Function used to clean a string up, to only return ascii characters with no system control characters
function clean(str) {
	// Clean up whitespaces around the sentence body
	str = str.trim();

	// Clean the input of hidden unix type control/command keys with Regex replace
	str = str.replace(/[\n\r\t]/g, '');

	// Remove any non-ascii characters
	str = str.replace(/[^\x20-\x7E]/g, '');

	return str;
}

// What is the input is more than one word? A sentence seperated by space?
// Allow the user to do something like the Path-to-RegExp lib with URLs

// When user input data and click enter key.
stdin.on('data', (input) => {
	// Clean up the input for further processing.
	input = clean(input);

	// Split the input, which can be sentences by their spaces into an array
	input = input.split(' ');

	// If the user entered only 1 word, or enter is pressed directly without any words
	if (input.length < 2) {
		// Get a function from the object and call that function immediately. This does direct word mapping unlike a sentence
		single_word_fn(input)();
	}
	else {
		// If the user entered a sentence, of 2 or more words, check through all the possible sentence structures

	}


	// Display the prompt again on every new line / input.
	prompt();
});

const single_word_fn = (input) => single_word_commands[input] ? single_word_commands[input] : none;

// This should be a function that the user can specify,
// Function to be ran when word does not match any specified words
function none() {
	// Print user input in console.
	print('User Input Data : ' + input);
}

single_word_commands = {
	exit: () => {
		// User inputs 'exit' to quit program
		log("Exiting prompt now...");
		process.exit();
	}
};



/*	References
https://nodejs.org/api/readline.html
https://blog.logrocket.com/creating-nodemon-in-node-js-70b295c2610c
https://medium.com/netscape/nodemon-events-run-tasks-at-server-start-restart-crash-exit-93a34c54dfd8
https://www.dev2qa.com/node-js-get-user-input-from-command-line-prompt-example/ */


/* Create the router thing for user to build upon it for theri own use. */