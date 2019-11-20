// Input: (2, 82, 5, 2, 2, 14, 76, 82, 14)
// Input Sorted: (2, 2, 2, 5, 14, 14, 76, 82, 82)
// Output Of Unique Numbers: (2, 5, 14, 76, 82)
// Output Counts For Unique Numbers: (3,1,2,1,2)

var arr = [2, 82, 5, 2, 2, 14, 76, 82, 14];
var counts = {};

for (var i = 0; i < arr.length; i++) {
	var num = arr[i];
	counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts[2], counts[5], counts[14], counts[76], counts[82]);