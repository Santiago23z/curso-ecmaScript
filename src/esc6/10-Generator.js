function* iterator (arr) {
    for (const key of arr) {
        yield key
    }
}

const i = iterator(['jhon', 'santi', 'valentina', 'ximena', 'venus']);
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next(),value);