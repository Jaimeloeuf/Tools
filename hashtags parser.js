'use strict'; // Use strict version of JavaScript

const fs = require('fs');
const prompt = require('./cli_prompt');

// Simple console.log() function wrapper
const log = (str) => console.log(str);


log('')

prompt('Hello: ')
	.then((val) => {
		console.log(val)
	});

const file_name = 'hashtags.txt';

// Read the file into memory
let file_content = fs.readFileSync(`${file_name}`, 'utf8');
// Split all the tags with the '#' character into an array
file_content = file_content.split('#');
// Get the number of elements in the array
let len = file_content.length;

// Loop through all the elements in the array
while (--len) {
	// Remove any empty elements from the array
	if (!file_content[len]) {
		file_content.splice(len, 1);
		continue; // Skip this loop cycle
	}
	// Remove all white spaces in the words
	file_content[len] = file_content[len].trim();
	// Create the word wrap for the tags.
	file_content[len] = `"${file_content[len]}", `;
}

// Create and clean up the string by joining the array, triming off whitespaces and removing the last comma
file_content = file_content.join('').trim().slice(0, file_content.lastIndexOf(','));
// Finnish up the python code generation.
file_content = `session.like_by_tags([${file_content}], amount=${30})`
// Write the contents to another file for the user to use.
fs.writeFileSync(`transformed_${file_name}`, file_content);


/*	Example:
	input:
		#hashtag #hashtag1 #hashtag2 #hashtag3
	output:
		session.like_by_tags(["hashtag", "hashtag1", "hashtag2", "hashtag3"], amount=30)
*/