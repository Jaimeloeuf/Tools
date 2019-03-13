'use strict'; // Enforce use of strict verion of JavaScript

/*  @Doc
    Unit test module for the memoize module
    All the tested functions are pure functions that takes in one input and produces one output
    This test focuses on showing the speed/time improvements with function results caching a.k.a memoization
*/

const memoize = require('../memoize');

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
const f6 = (input) => input * input * input * input * input * input;


// Func is a function binding for calling the different functions with the same name below
var func = f1;


// Run the function without memoization
func();

// Memoize the function
func = memoize(func);

// Run the function after memoization
func();

// Display the before and after results
