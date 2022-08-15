const A = [[2, 3, 4, 0, 0, 0],
           [3, 2, 1, 1, 0, 10],
           [2, 5, 3, 0, 1, 15]];
simplex(A)
console.table(A)
console.log("Solução ótima:", -A[0][5]);

const B = [[25, 35, 50, 11, 12, 0, 0, 0],
           [3, 4, 5, 1, 2, 1, 0, 42],
           [2, 3, 4, 1, 1, 0, 1, 24]];
simplex(B);
console.table(B)
console.log("Solução ótima:", -B[0][7]);

const C = [[30, 50, 0, 0, 0, 0],
           [2, 1, 1, 0, 0, 16],
           [1, 2, 0, 1, 0, 11],
           [1, 3, 0, 0, 1, 15]];
simplex(C)
console.table(C)
console.log("Solução ótima:", -C[0][5]);

const D = [[10, 12, 12, 0, 0, 0],
           [5, 2, 1, 1, 0, 3],
           [1, 2, 4, 0, 1, 2]];
simplex(D)
console.table(D)
console.log("Solução ótima:", -D[0][5]);