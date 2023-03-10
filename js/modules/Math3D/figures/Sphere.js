//x = r*sin(T)*cos(p);
// y = r*sin(T)*sin(p);
//z = r*cos(T);
// T = [0..PI]
// p = [0..2*PI]
class Sphere extends Figure {
    constructor(r = 10, count = 20,color = 'blue') {
        super();
        //about points
        const points = [];
        for (let i = 0; i <= count; i++) {
            const T = Math.PI / count * i;//
            for (let j = 0; j < count; j++) {
                const p = 2 * Math.PI / count * j;
                points.push(new Point(
                    r * Math.sin(T) * Math.cos(p),
                    r * Math.cos(T),
                    r * Math.sin(T) * Math.sin(p),
                ))
            }
        }
        //about edges;
        const edges = [];
        for (let i = 0; i < points.length; i++) {
            if (points[i + 1]) {
                if ((i + 1) % count === 0) {
                    edges.push(new Edge(i, i + 1 - count))//

                } else {
                    edges.push(new Edge(i, i + 1))
                }
            }
            if (points[i + count]) {
                edges.push(new Edge(i, i + count))
             }
        }

        //about polygons
        const polygons = [];
        for (let i = 0; i < points.length; i++) {
            if (points[i + 1 + count]) {
                if ((i + 1) % count === 0){
                    polygons.push(new Polygon([
                            i,
                            i + 1-count,
                            i + 1,
                            i + count],
                        color));
                }
                else{
                    polygons.push(new Polygon([
                        i,
                        i + 1,
                        i + 1 + count,
                        i + count],
                        color));
                }
            }

            const lastNo = points.length - 1;
            const penultimatel = lastNo-count;
            polygons.push(new Polygon([
                penultimatel,
                penultimatel + 1 - count,
                penultimatel + 1,
                penultimatel + count
            ],color))



        }
        this.polygons = polygons;
        this.points = points;
        this.edges = edges;

    } //Дз для каждой выбранной фигуры, показывать настройки.
}