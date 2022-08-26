// maak een functie factorial, die het meegegeven hele getal vermenigvuldigt met alle hele getallen daaronder t/m 1;

// voorbeeld: factorial(4) => 4 * 3 * 2 * 1 = 24;


const factorial = (n) => {
    let output = n;
    for (let i=n-1; i>=1; i--) {
        output = output*i;
        //console.log(output);
    };
    console.log(output);
    return output;
};

factorial(4); // 24
factorial(1); // 1
factorial(7); // 5040
