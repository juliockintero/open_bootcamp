// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let n = 10;
let r = 1;

let i = 0
while (i < n) {

    if (n==2) {
        r = n;
        break;
    }
    if (n==1) {
        r = n;
        break;
    }

    r = r * (n - i)

    i++
}

console.log(r)
