const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [8, 9, 10, 11, 12, 13, 14];

let array3 = [];

for (let i = 0; i < array1.length; i++) {
    if (array1[i] == array2[i]) {
        array3.push(array1[i]);
    }
    array3.push(array1[i]);
}

for (let i = 0; i < array2.length; i++) {
    if (array2[i] == 5) {
        continue;
    }
    array3.push(array2[i]);
}

console.log(array3);
