// Reversing a String
let str = "Not ChatGPT";
let rev = "";

for(let i=str.length-1; i>=0; i--) {
    rev += str[i];
}
console.log(rev);


// Check Palindrome
let pal = "ABCDcba";
let n = pal.length;
let flag = 0;

pal = pal.toUpperCase();

for(let i=0; i<pal.length/2; i++) {
    if(pal[i] != pal[n-i-1]) {
        flag++;
        console.log("Not a Palindrome");
        break;
    }
        
}
if(flag == 0)
    console.log("Is a Palindrome");


// Find max number in an array
let arr = [1, 4, 8, 2, 5, 9, 4];
let maxele = arr[0];

for(let i=0; i<arr.length; i++)
    maxele = maxele < arr[i] ? arr[i] : maxele;

console.log(maxele);

