class Cube extends Figure {
    constructor(x = -5, y = -5, z = -5, size = 10, color) {//--?????
        super();
        this.points = [
            new Point(10, 10, 10),
            new Point(-10, 10, 10),
            new Point(-10, -10, 10),
            new Point(10, -10, 10),
            new Point(10, 10, -10),
            new Point(-10, 10, -10),
            new Point(-10, -10, -10),
            new Point(10, -10, -10)
        ];
        this.edges = [
            new Edge(0, 1),
            new Edge(1, 2),
            new Edge(2, 3),
            new Edge(3, 0),
            new Edge(0, 4),
            new Edge(1, 5),
            new Edge(2, 6),
            new Edge(3, 7),
            new Edge(6, 5),
            new Edge(7, 4),
            new Edge(7, 6),
            new Edge(4, 5),

        ];
        this.polygons = [
            new Polygon([0, 1, 2, 3], color),
            new Polygon([4, 0, 3, 7], color),
            new Polygon([1, 2, 6, 5], color),
            new Polygon([0, 1, 5, 4], color),
            new Polygon([6, 7, 3, 2], color),
            new Polygon([5, 4, 7, 6], color)
        ]
    }
}
//Поверхности второго порядка, которые нужны:цилиндры(гиперболический, параболический, элиптический).
//Гиперболоиды(однополосной,двуполосной)
//Эллипсоид
//Сфера
//КОнус
//Парабалоиды(два каких-то)