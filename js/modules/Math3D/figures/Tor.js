//x = (R+r*cosT)*sinp;
//y = (R+r*cosT)*sinp;
//z = r*sinT;
class Tor extends Figure {
    constructor(r = 5, R = 15, count = 20, color = 'blue') {
        super();
        //about points
        const points = [];
        for (let i = 0; i < count; i++) {
            const T = 2 * Math.PI / count * i;
            for (let j = 0; j < count; j++) {
                const p = 2 * Math.PI / count * j;
                points.push(new Point(
                    (R + r * Math.cos(T)) * Math.cos(p),
                    (R + r * Math.cos(T)) * Math.sin(p),
                    r * Math.sin(T)
                ))
            }
        }
        //about edges
        const edges = [];
        for (let i = 0; i < points.length; i++) {
            if (points[i + 1]) {
                edges.push(new Edge(i, i + 1))
            }
            if (points[i + count]) {
                edges.push(new Edge(i, i + count));

            } else {

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
                            i + count],
                        color));
                } else {
                    polygons.push(new Polygon([
                            i,
                            i + 1,
                            i + 1 + count,
                            i + count],
                        color));
                }
            }

            const lastNo = points.length - 1;
            const penultimatel = lastNo - count;
            polygons.push(new Polygon([
                penultimatel,
                penultimatel + 1 - count,
                penultimatel + 1,
                penultimatel + count
            ], color))
        }
        this.points = points;
        this.polygons = polygons;
        this.edges = edges;
    }
}