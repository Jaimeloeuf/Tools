'use strict'; // Use strict version of JavaScript

/*
	Make this into a CLI tool like the docker tool.



	Currently this file works as one single app where it only does one operation.
	Example:
	input:
		#hashtag #hashtag1 #hashtag2 #hashtag3
	output:
		session.like_by_tags(["hashtag", "hashtag1", "hashtag2", "hashtag3"], amount=30)
*/

/* Dependencies */
const fs = require('fs');
const prompt = require('./cli_prompt');

// Simple console.log() function wrapper
const log = (str) => console.log(str);


// log('Enter a file name man for manual');

// prompt('Hello: ')
// 	.then((val) => {
// 		switch (val) {
// 			case 'man':
// 				print_menu();
// 				break;
// 			case a:

// 			default:
// 				log('ERR: Invalid input. Please try again.')
// 		}
// 		console.log(val)
// 	});

function hashtags_to_python_list() {
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
}

// Run the default action
hashtags_to_python_list();

// Function to remove duplicate hashtags inside a hashtag file
function remove_duplicates(file_name = None) {
	/*	@Doc
		This should be a CLI tool that you can pass names of the file to clean up as CLI arguements.

		@Function/Process flow
		Read the file into memory
			Create a transform stream with a data transformer
		Read all the hashtags one by one and check each one
			if the hashtag is new in the cache object, add it into the cache object
		After looping through all the hashtags, create the list of hashtags in the same hashtag file format using the hashtags in the cache object
		Write the newly created string back into the original file and signal process end to the user.
	*/
}