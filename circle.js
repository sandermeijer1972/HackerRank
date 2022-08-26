//Maak een functie die met een gegeven straal van een cirkel de oppervlakte en omtrek uitrekent

const circle = (r) => {
    const PI = Math.PI;
    let area = PI*r*r;
    console.log(area);
    let perimeter = 2*PI*r;
    console.log(perimeter);
};

circle(2.6); // 21.237166338267002   16.336281798666924
circle(10);
