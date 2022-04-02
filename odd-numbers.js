// ODD NUMBERS

// Je krijgt 2 getallen, l en r, en als uitkomst krijg je een lijst met alle oneven getallen tussen l en r (inclusief l en r)

function oddNumbers(l, r) {
    const newArray = [];
    for(let i = l; i <= r; i++) {
        if((i % 2) == 1) {
            newArray.push(i);
        };
    };
    console.log(newArray);
    return newArray;
}

oddNumbers(2,5);
oddNumbers(3,9);
oddNumbers(96,97);
