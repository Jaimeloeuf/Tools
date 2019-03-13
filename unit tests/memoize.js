'use strict'; // Enforce use of strict verion of JavaScript

/*  @Doc
    Unit test module for the memoize module
    All the tested functions are pure functions that takes in one input and produces one output
    This test focuses on showing the speed/time improvements with function results caching a.k.a memoization

    @Todo
    - Fix the bug (Make the inputs more randomized but controlled so that v8 cannot optimize the)
    - Test this memoization function with function that parses JSON from a file

*/

const memoize = require('../memoize');
const print = console.log;

function f1(input) {
    // Calculate the cube of the input
    let result = input * input * input;
    return result;
}

function f2(input) {
    // Calculate the cube of the input and return it directly
    return input * input * input;
}

// Calculate the cube of the input and return it directly
const f3 = (input) => input * input * input;


function f4(input) {
    // Calculate the cube of the input
    let result = input * input * input * input * input * input;
    return result;
}

function f5(input) {
    // Calculate the cube of the input and return it directly
    return input * input * input * input * input * input;
}

// Calculate the cube of the input and return it directly
const f6 = (input) => input * input / input * input / input * input;


// Func is a function binding for calling the different functions with the same name below
const normal_fn = f6;


// Run empty trial to make v8 started..
normal_fn(5);

const value = () => Math.random() * 10000;

setInterval(() => {
    // Run the function without memoization
    console.time('Without memoization');
    normal_fn(value());
    console.timeEnd('Without memoization');
}, 1000);



// Memoize the function
const memoized_fn = memoize(normal_fn);
setInterval(() => {

    // Run the function after memoization
    console.time('With memoization');
    memoized_fn(value());
    console.timeEnd('With memoization');

    console.log('----------------------------------------------------------')

    // Display the before and after results
}, 1000);