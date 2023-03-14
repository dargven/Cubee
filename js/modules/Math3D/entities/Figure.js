class Figure {
    constructor(points = [], edges = [], polygons = [],) {
        this.points = points;
        this.edges = edges;
        this.polygons = polygons;
    }

    recolor(color) {
        this.polygons.forEach(polygon => {
            polygon.color = color;
        })
    }

}