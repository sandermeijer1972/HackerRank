// LONELY INTEGER

// Je krijgt een array met hele getallen
// de getallen staan er 2 x in, behalve 1
// de uutkomst is het getal dat maar 1 x voorkomt in de array

function lonelyinteger(a) {
    const countedNums = [];
    const numsOnlyOnce = [...new Set(a)];
    const makeNewArray = numsOnlyOnce.forEach(num => {
        const numsCounted = a.filter(getal => getal == num);
        countedNums.push(num + "K" + numsCounted.length);
    });
    const oneNum = countedNums.filter(nums => nums.split("K")[1] == 1);
    //console.log(oneNum);
    const lonelyNum = oneNum[0].split("K")[0];
    console.log(lonelyNum);
    return lonelyNum;
};

lonelyinteger([1,2,3,4,3,2,1]);
lonelyinteger([1]);
lonelyinteger([0,0,1]);
lonelyinteger([2,3,4,5,6,7,8,2,3,4,5,6,7]);
