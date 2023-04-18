function findPolygonName() {
    let input = document.getElementById("input").value;
    let sides;

    if (input < 0) {
        sides = Math.abs(Math.round(input));
    } else {
        sides = Math.round(input);
    }

    let polygonName;
    switch(sides) {
        case 1:
            polygonName = "Henagon";
            break;
        case 2:
            polygonName = "Digon";
            break;
        case 3:
            polygonName = "Triangle";
            break;
        case 4:
            polygonName = "Quadrilateral";
            break;
        case 5:
            polygonName = "Pentagon";
            break;
        case 6:
            polygonName = "Hexagon";
            break;
        case 7:
            polygonName = "Heptagon";
            break;
        case 8:
            polygonName = "Octagon";
            break;
        case 9:
            polygonName = "Nonagon";
            break;
        case 10:
            polygonName = "Decagon";
            break;
        default:
            polygonName = "Unknown";
    }

    alert("A polygon with " + sides + " sides is called a " + polygonName + ".");
}
