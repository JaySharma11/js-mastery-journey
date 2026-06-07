// Sum Array Function
function sumArray(arr) {
    let ans = 0;
    for(let i=0; i<arr.length; i++)
        ans += arr[i];
    return ans;
}


// Avergae Array Function
function averageArray(arr) {
    let sum = sumArray(arr);
    return sum / arr.length;
}


// Find Min Function
function findMin(arr) {
    let min = arr[0];
    for(let i=0; i<arr.length; i++)
        min = min > arr[i] ? arr[i] : min;
    return min;
}


// Find Max Function
function findMax(arr) {
    let max = arr[0];
    for(let i=0; i<arr.length; i++)
        max = max < arr[i] ? arr[i] : max;
    return max;
}


// Remove Duplicates
function removeDuplicates(arr) {
    let newarr = [];
    for(let i=0; i<arr.length; i++) {
        let flag = false;
        for(let j=0; j<newarr.length; j++) {
            if(arr[i] == newarr[j]) {
                flag = true;
                break;
            }
        }
        if(flag == false)
            newarr.push(arr[i]);
    }
    return newarr;
}


// Count Characters
function countCharacters(str) {
    return str.length;
}


// Count Words
function countWords(str) {
    let words = 1;
    for(let i=0; i<str.length; i++) 
        if(str[i] == " ")
            words++;
    
    return words;
}


// Flatten one level
function flattenOneLevel(nested_arr) {
    let flattenarr = [];
    for(let i=0; i<nested_arr.length; i++) {
        if(nested_arr[i].length > 1) {
            for(let j=0; j<nested_arr[i].length; j++) {
                flattenarr.push(nested_arr[i][j]);
            }
        }
        else {
            flattenarr.push(nested_arr[i]);
        }
    }
    return flattenarr;
}


// Group By Age
function groupByAge(usergrp) {
    const useragegrp = new Map();

    for(let i=0; i<usergrp.length; i++) {
        if(useragegrp.has(usergrp[i].age)) {
            useragegrp.get(usergrp[i].age).push(usergrp[i].name);
        }
        else {
            useragegrp.set(usergrp[i].age, [usergrp[i].name]);
        }
    }
    return useragegrp;
}


//Counter using Closure
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumArray(arr));
console.log(averageArray(arr));
console.log(findMin(arr));
console.log(findMax(arr));
console.log(JSON.stringify(removeDuplicates(arr)));

let str = "The quick brown fox jumps over the lazy dog"
console.log(countCharacters(str));
console.log(countWords(str));

let nested_arr = [1, 2, [3, 4], [5, 6]];
console.log(flattenOneLevel(nested_arr));

let usergrp = [
 {name:"A", age:20},
 {name:"B", age:20},
 {name:"C", age:25}
];
console.log(groupByAge(usergrp));

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());