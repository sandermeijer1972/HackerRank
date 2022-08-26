// maak een functie getArea en getPerimeter om de oppervlakte en de omtrek van een rechthoek te bereken, waarvan je de lengte 
// en breedte meegeeft aan de functie

const getArea = (length, width) => {
    const area = length*width;
    console.log("oppervlakte: " + area);
    return area;
};

const getPerimeter = (length, width) => {
    const perimeter = length + length + width + width;
    console.log("omtrek: " + perimeter);
    return perimeter;
};

getArea(3, 4.5); // 13.5
getPerimeter(3, 4.5); // 15

getArea(10, 10); // 100
getPerimeter(10, 10); // 40
