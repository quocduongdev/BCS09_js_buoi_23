function sumWithRecursion(n) {
    var total = 0;
    for (var i = 0; i <= n.length; i++) {
        total = total + i;
    }
    return total
}

console.log(sumWithRecursion(5))