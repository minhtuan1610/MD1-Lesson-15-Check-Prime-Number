function isNumber(Number) {
    for (let i = 2; i <= Math.sqrt(Number); i++) {
        if (Number % i == 0) {
            return false;
        }
    }
    if (Number <= 1) {
        return false;
    }
    return true;
}

let x = 0;
let cnt = 10000

while (x < cnt) {
    if (isNumber(x)) {
        document.write(x + "&nbsp;");
    }
    x++;
}
