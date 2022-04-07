// PANGRAMS

// Je krijgt een zin waarvan je moet controleren of alle letters van het alfabet daarin voorkomen
// Bij een positief resultaat is je antwoord "pangram"
// Bij een negatief resultaat is je antwoord "not pangram"

function pangrams(s) {
    const alfabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const str = s.toLowerCase();
    for (let i = 0; i < 26; i++) {
        if (str.includes(alfabet[i])) {
            //console.log("check");
        } else {
            console.log("not pangram");
            return "not pangram";
        };
    };
    console.log("pangram");
    return "pangram";
};

pangrams("Hallo");
pangrams("We promptly judged antique ivory buckles for the next prize");
pangrams("We promptly judged antique ivory buckles for the prize");
pangrams("abcdefghijklmnopqrstuvwxyz");
