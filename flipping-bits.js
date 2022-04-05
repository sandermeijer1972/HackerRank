// FLIPPING BITS

// Je krijgt een getal, zet dit om in een 32-bits binair getal
// Verwissel de 0 naar 1 en de 1 naar 0
// Zet dit binaire getal om in een decimaal getal, dit is de uitkomst

function flippingBits(n) {
    const binairNum = n.toString(2);
    //console.log(binairNum);
    //console.log("lengte: " + binairNum.length);
    const binLength = binairNum.length;
    let bin32 = "";
    for (let i = 1; i <= 32-binLength; i++) {
        const newB = bin32+0;
        bin32 = newB;
    };
    const totalBin = bin32+binairNum;
    //console.log(totalBin);
    let flippedBit = "";
    for (let j = 0; j <= 31; j++) {
        if (totalBin[j] == 0) {
            const flipB = flippedBit+1;
            flippedBit = flipB;
        } else {
            const flipB = flippedBit+0;
            flippedBit = flipB;
        };
    };
    //console.log(flippedBit);
    const flippedDec = parseInt(flippedBit, 2);
    console.log(flippedDec);
    return flippedDec;
};

flippingBits(2147483647);
flippingBits(123456);
flippingBits(802743475);
