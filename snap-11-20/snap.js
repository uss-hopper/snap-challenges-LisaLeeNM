// In pseudocode, write a function that takes an array of numbers, and returns another array that counts the number of times each number appears in the array.
// Input: (2, 82, 5, 2, 2, 14, 76, 82, 14)
// Input Sorted: (2, 2, 2, 5, 14, 14, 76, 82, 82)
// Output Of Unique Numbers: (2, 5, 14, 76, 82)
// Output Counts For Unique Numbers: (3,1,2,1,2)

// var arr = [2, 82, 5, 2, 2, 14, 76, 82, 14];
// var counts = {};
//
// for (var i = 0; i < arr.length; i++) {
// 	var num = arr[i];
// 	counts[num] = counts[num] ? counts[num] + 1 : 1;
// }
//
// console.log(counts[2], counts[5], counts[14], counts[76], counts[82]);

// Marty's code
function counts ($array){

	$newArray = [];

	foreach( $array as $element){
		if (isset($newArray[$element])){
		$newArray[$element] = $newArray[$element] + 1]; // or ++
		}else{
			$newArray[$element] = 1;
		};

		echo($element . " " . $newArray[$element] . PHP_EOL);
	};
	return $newArray;
};

$origArray = [1,1,1,2,3,3,4,4,4,4];
var_dump(counts($origArray));

// In pseudocode, write a function that takes two integers. For each integer in between those two numbers (inclusive), output 'fizz' if the number is even, 'buzz' if the number is divisible by 3, and 'baz' without 'fizz' or 'buzz' if the number is divisible by both.
// Two integers
// Integer a = 1
// Integer b = 10
// for(var i=1; i<11; i++) {
// 	if( (i%2) === 0 ) {
// 		console.log("fizz");
// 	}else if( (i%3) === 0) {
// 		console.log("buzz");
// 	}else if( (i%2) === 0 && (i%3) === 0) {
// 		console.log("baz");
// 	}else {
// 		console.log(i);
// 	}
// }

