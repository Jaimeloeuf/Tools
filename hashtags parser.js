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

// Simple console.log() variable binding
const log = console.log;
const write = process.stdout.write;


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

// -htpl Option
function hashtags_to_python_list(input_file, output_file) {
	// 2 input arguements expected. If output_file is undefined, then create the default name

	// Read the file into memory
	let file_content = fs.readFileSync(`${input_file}`, 'utf8');
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

	// If output file is undefined
	if (!output_file)
		output_file = `pyList_${input_file}`; // Create output file's name as a extended input file name
	// Write the contents to another file for the user to use.
	fs.writeFileSync(output_file, file_content);
}


// Run the default action
hashtags_to_python_list('hashtags.txt');



/*
	Create a map for the keywords
	So different function for different keywords, something like the router module of 'fw'
	define all the tags/options too

	Search how to use 'less' program in windows. Using ncurses??
	How to display this help menu> Should I write this in a external file or perhaps a markdown file and print
	it out using a library from npm? Also see how I can start to package parts of my modules and publish on npm
	Learn how to use koa JS


	-rd: Remove Duplicate.
		Expects at least one file name as arguement
		First arguement is the file name where the hashtags can be read from
		Hashtags will be transformed and written back to the same file that was 
	-htpl: Hashtags to python list.			(Update to let user change the amount value)
		Expects at least one file name as arguement
		First arguement is the file name where the hashtags can be read from
		Optional Second arguement is the file name to write the hashtags too.
			If not specified, a new file called "pyList_" + original hashtag file name will be created
				If the file with the default new name already exists, user will be asked for permission before overwriting it.
		Outputs the file name of the completed transformation output
	-aht: Add Hashtags
		Add hashtags to a list of comma seperated words
		Expects at least one file name as arguement
		First arguement is the file name where the hashtags can be read from
		Optional Second arguement is the file name to write the hashtags too.
			If not specified, a new file called "added_hashtag_" + original hashtag file name will be created
				If the file with the default new name already exists, user will be asked for permission before overwriting it.
		Outputs the file name of the completed transformation output
*/





// Function to remove duplicate hashtags inside a hashtag file
function remove_duplicates(input_file) {
	/*	@Doc
		This should be a CLI tool that you can pass names of the file to clean up as CLI arguements.

		This can remove duplicates for both files with comma seperated hashtags and words, as the hashtag will just be treated as part of the word
		Should the file be splitted into words using spaces or using commas?
		Maybe have one more function to add and remove commas?

		@Function/Process flow
		Read the file into memory
			Create a transform stream with a data transformer
		Read all the hashtags one by one and check each one
			if the hashtag is new in the cache object, add it into the cache object
		After looping through all the hashtags, create the list of hashtags in the same hashtag file format using the hashtags in the cache object
		Write the newly created string back into the original file and signal process end to the user.
	*/


	// Read the file into memory
	let file_content = fs.readFileSync(input_file, 'utf8');
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

	// If output file is undefined
	if (!output_file)
		output_file = `pyList_${input_file}`; // Create output file's name as a extended input file name
	// Write the contents to another file for the user to use.
	fs.writeFileSync(output_file, file_content);

}