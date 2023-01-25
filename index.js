
// Rigima.js
// (C) 2023 e6nlaq

function isodd(x) {
    return x % 2 == 1;
}

function iseven(x) {
    return x % 2 == 0;
}

function isprime(x) {
    if (x == 1) return false;
    else if (x == 2) return true;
    else {
        for (var i = 2; i < x; i++) {
            if (x % i == 0) return false;

            if (i + 1 == x) return true;
        }
    }

}

function average(a) {
    var ans = 0;
    a.forEach(function (v) {
        ans += v;
    })

    return ans / a.length;
}

function sum(a) {
    var ans = 0;
    a.forEach(function (v) {
        ans += v;
    })

    return ans;
}