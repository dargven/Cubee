//x = a*sin(t)*cos(p);
// y = b*sin(t)*sin(p)
// z = c*cos(t);
class Ellipsoid extends Figure {
    constructor(a = 10, b = 20, c = 30, count = 20, color = 'blue') {
        super();
        // about points
        const points = [];
        for (let i = 0; i <= count; i++) {
            const T = Math.PI / count * i;
            for (let j = 0; j <= count; j++) {
                const P = 2 * Math.PI / count * j;
                points.push(new Point(
                    a * Math.sin(T) * Math.cos(P),
                    b * Math.sin(T) * Math.sin(P),
                    c * Math.cos(T)
                ))
            }
        }
        //about edges
        const edges = [];
        for (let i = 0; i <= points.length; i++) {
            if (points[i + 1]) {
                if (((i + 1) % count) === 0) {
                    edges.push(new Edge(i, i + 1 - count));
                } else {
                    edges.push(new Edge(i, i + 1));
                }
            }
            if (points[i + count]) {
                edges.push(new Edge(i, i + count));
            }

        }
        //about polygons
        const polygons = [];
        for (let i = 0; i < points.length; i++) {
            if (points[i + 1 + count]) {
                if ((i + 1) % count === 0) {
                    polygons.push(new Polygon([
                        i,
                        i + 1 - count,
                        i + 1,
                        i + count]
                    ))
                } else {
                    polygons.push(new Polygon([
                        i,
                        i + 1,
                        i + 1 + count,
                        i + count
                    ]))
                }
            }
        }
        const lastNo = points.length - 1;
        const penultimatel = lastNo - count;
        polygons.push(new Polygon([
            penultimatel,
            penultimatel + 1 - count,
            penultimatel + 1,
            penultimatel + count
        ]))
        this.polygons = polygons;
        this.points = points;
        this.edges = edges;

    }
}