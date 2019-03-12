'use strict'; // Enforce use of strict verion of JavaScript

/*  @Doc
    Module that provides utility for memoizing functions
*/

function memoize(fn) {

    const results_map = {};


    function memoized_fn(input) {

        let result = results_map[input];
        if (result)
            return result;

            
        result = fn(input);
        results_map[input] = result;
        return result;

        // Different method that spends more operation on data access but less memory on storage and computation for garbage collection
        // if (results_map[input])
        //     return results_map[input];
        // results_map[input] = fn(input);
        // return results_map[input];
    }


    // function memoized_fn(...inputs) {

    //     result = results_map.get

    //         fn(...inputs);
    // }

    return memoized_fn;
}