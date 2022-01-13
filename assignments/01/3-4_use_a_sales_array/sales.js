"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

const quarters = 4;
const regions = [region1, region2, region3, region4, region5];
let total = 0;

function sumArray (integerArray){
/**
 * Sum an array of integers.
 * 
 * @param {array} integerArray - An array of integers.
 * 
 * @returns {integer} sum - The sum of integers in integerArray.
 */
    let sum = 0;
    for (let i in integerArray){
        sum += integerArray[i];
    }
    return sum;
}

function sumArraysVertical (index, ...integerArray){
/**
 * Sums an array of arrays vertically (column-wise)
 * 
 * @param {integer} index - The target index to sum along.
 * @param {array} integerArray - Any number of integer arrays.
 * 
 * @returns {integer} sum - The sum of integers at a specific index of arrays of integerArray.
 */
    let sum = 0;
    for (let i in integerArray){
        sum += integerArray[i][index];
    }
    return sum;
}

document.write("<h2>Sales by Quarter</h2>");

for (let quarter = 1; quarter <= quarters; quarter++){
    document.write(`Q${quarter}: $${sumArraysVertical(quarter-1, region1, region2, region3, region4, region5)}<br>`);
}

document.write("<h2>Sales by Region</h2>");

for (let region = 1; region <= regions.length; region++){
    document.write(`Region ${region}: $${sumArray(regions[region-1])}<br>`);
}

document.write("<h2>Total Sales</h2>");

for (let region = 1; region <= regions.length; region++){
    total += sumArray(regions[region-1]);
}
document.write(`$${total}`);