function pair(arr, key) {

    var a = []
    var b
    for (var i = 0; i < a.length - 1; i++) {
        b = i + 1;
        if (arr[i] + arr[c] == key) {
            a.push(arr[i])
            a.push(arr[b])
            return a;

        }
    }
}
var arr = [3, 9, 2, 5, 6, 7]
var key = 11
var output = findpair(arr, key)
console.log(output);