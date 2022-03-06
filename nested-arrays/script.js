
// We can console.log the `8` in this array if we
// console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

// Write a function that returns true if some value is present and false otherwise

var arr2d = [ [2, 5, 8],
[3, 6, 1],
[5, 7, 7] ];

var testnum = 7

function testif(testnum) {
    for (var i=0; i<arr2d.length; i++) {
        for (var b=0; b<arr2d[i].length; b++) {
            if (arr2d[i][b] == testnum) {
                return(true);
            } 
        }
    }
    return(false);
}

console.log(testif(testnum));


// function testif(test) {
//     for (var i=0; i<arr2d.length; i++) {
//         for (var i; i<arr2d.length[i]; i++) {
//             if (arr2d == testnum) {
//                 console.log(true)
//             } else {
//                 console.log(false)
//             }
//         }
//     }
// }



// Given a 2 dimensional array (an array containing arrays), return a new array containing just the values from inside the sub-arrays. 
// complete the following function

var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
    
// We can console.log the `8` in this array if we
// console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

function flatten(arr2d) {
    var flat = [];
    // your code here
    for (var i=0; i<arr2d.length; i++) {
        flat.push(i)
    }
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

