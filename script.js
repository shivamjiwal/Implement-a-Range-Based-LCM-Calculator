function smallestCommons(arr) {
const min = Math.min(arr[0], arr[1]);
const max = Math.max(arr[0], arr[1]);
let result = 1;
for (let number = min; number <= max; number++) {
result = (result * number) / gcd(result, number);
}
return result;
}
function gcd(a, b) {
while (b !== 0) {
const remainder = a % b;
a = b;
b = remainder;
}
return a;
}
