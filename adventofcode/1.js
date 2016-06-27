var input = '(())'
var floor = 0;

for(var i = 0; i < input.length; i++) {
    var command = input[i];
    if (command == '(') {
        floor = floor + 1;
    } else if (command == ')') {
        floor = floor - 1;
    }
}

console.log("Santa is on floor: " + floor);