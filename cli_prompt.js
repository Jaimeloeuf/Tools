// 'use strict'; // Use strict version of JavaScript

const log = (str) => console.log(str);
const print = (buf) => process.stdout.write(buf);

// Get process.stdin as the standard input object with UTF8 encoding
const stdin = process.stdin.setEncoding('utf-8');

// print('Please input text in command line.\n');

const prompt = (prompt_symbol = '> ') => print(prompt_symbol);

// Display prompt user to input data in console.
prompt();



// The user of this library can either use the default event Handler for new data or use their own functions


// When user input data and click enter key.
stdin.on('data', (data) => {
	// Clean the input of hidden unix type control/command keys with Regex replace
	data = data.replace(/[\n\r\t]/g, '');

	// Get a function from the object and call that function immediately
	map_wrapper(data)();

	// Display the prompt again on every new line / input.
	prompt();
});

const map_wrapper = (input) => hashMap[input] ? hashMap[input] : none;

function none() {
	// Print user input in console.
	process.stdout.write('User Input Data : ' + data);
}

hashMap = {
	exit: () => {
		// User inputs 'exit' to quit program
		console.log("User input complete, program exit.");
		process.exit();
	}
};



/*	References
https://nodejs.org/api/readline.html
https://blog.logrocket.com/creating-nodemon-in-node-js-70b295c2610c
https://medium.com/netscape/nodemon-events-run-tasks-at-server-start-restart-crash-exit-93a34c54dfd8
https://www.dev2qa.com/node-js-get-user-input-from-command-line-prompt-example/ */


/* Create the router thing for user to build upon it for theri own use. */