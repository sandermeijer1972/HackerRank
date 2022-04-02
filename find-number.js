// FIND NUMBER

// Maak een functie findNumber, die 2 parameters meekrijgt: een array arr met getallen, en het getal k wat gezocht wordt
// Doorloop de array om te kijken of het getal k daarin voorkomt
// Als het getal k in de array voorkomt, krijg je als uitkomst "YES", zo niet dan "NO"

function findNumber(arr, k) {
    if(arr.includes(k)) {
        console.log("YES");
        return "YES";
    } else {
        console.log("NO");
        return "NO";
    };
};


findNumber([1,2,3,4,5], 1);
findNumber([2,3,1], 5);
