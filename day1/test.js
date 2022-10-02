let pattern = "+-+-+-+";
// add space to the beginning,
// chop out first last index of the pattern

let start = 0;

let end = pattern.length;
let space = "";
while (end > start) {
    console.log(space + pattern.slice(start, end));
    // start++;
    // end--;
    // space += " ";
}


console.log(pattern)