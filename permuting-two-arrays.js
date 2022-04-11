// PERMUTING TWO ARRAYS

// Je krijgt 2 arrays met getallen
// Je krijgt een getal k
// Kijk of je bij gesorteerde arrays, de 1e, 2e, 3e. etc getallen van de arrays optelt hoger of gelijk is als getal k
// De uitkomst is YES of NO

function twoArrays(k, A, B) {
    const newA = A.sort(function(a, b){return a-b});
    const sortedB = B.sort(function(a, b){return a-b});
    const newB = sortedB.reverse();
    //console.log(newA);
    //console.log(newB);
    for (let i = 0; i < A.length; i++) {
        if ((newA[i] + newB[i]) < k) {
            console.log("NO");
            return "NO";
        };
    };
    console.log("YES");
    return "YES";
};

twoArrays(1, [0,1], [0,2]);
twoArrays(10, [2,1,3], [7,8,9]);
twoArrays(5, [1,2,2,1], [3,3,3,4]);
twoArrays(10, [7,6,8,4,2], [5,2,6,3,1]);

twoArrays(91, [18,73,55,59,37,13,1,33], [81,11,77,49,65,26,29,49]);
twoArrays(94, [84,2,50,51,19,58,12,90,81,68,54,73,81,31,79,85,39,2], [53,102,40,17,33,92,18,79,66,23,84,25,38,43,27,55,8,19]);

