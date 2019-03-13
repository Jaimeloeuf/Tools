'use strict'; // Enforce use of strict verion of JavaScript

/*  @Doc
    Module that provides utility for memoizing Pure functions.

    @Todo
    - Currently only available for functions that take one input for a single output, Multi input functions not supported yet
    - Generator functions not supported yet (Should this be memoized? Since the point of them is lazy loading)
*/

function memoize(fn) {
    // Create a results object map in memory, that is only accessible by memoized_fn's closure
    const results_map = {};
    // Create a result object for storing the computed result.
    var result;

    function memoized_fn(input) {
        // Get the output stored in the results_map for the given input
        result = results_map[input];
        // Check if the result have been calculated before, and if so, return the value directly
        if (result)
            return result;
        // Calculate the result it never calculated before
        result = fn(input);
        // Store the result into the results map
        results_map[input] = result;
        // Return the function output to the user.
        return result;

        // Different method that spends more operation on data access but less memory on storage
        // if (results_map[input])
        //     return results_map[input];
        // results_map[input] = fn(input);
        // return results_map[input];
    }


    // Version 2 that should accept functions that can take in multiple arguements
    function memoized_fn_v2(...inputs) {

        result = results_map.get

            fn(...inputs);
    }

    return memoized_fn;
}

// Export the memoizer function
module.exports = memoize;