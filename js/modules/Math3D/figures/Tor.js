//x = (R+r*cosT)*sinp;
//y = (R+r*cosT)*sinp;
//z = r*sinT;
class Tor extends Figure{
    constructor(r = 5, R= 15, count = 20) {
        super();
        //about points
        const points = [];
        for(let i =0; i < count; i ++){
            const T = 2*Math.PI/count*i;
            for (let j = 0; j<count; j++){
                const p = 2*Math.PI/count*j;
                points.push(new Point(
                    (R+r*Math.cos(T))*Math.cos(p),
                    (R+r*Math.cos(T))*Math.sin(p),
                    r*Math.sin(T)

                ))
            }
        }
        //about edges
        const edges = [];
        for(let i =0; i< points.length;i++) {
            if (points[i + 1]) {
                edges.push(new Edge(i,i+1))
            }
            if(points[i+count]){
            edges.push(new Edge(i,i+count));

            }
            else{

            }
        }
        this.points = points;
        this.edges = edges;
    }
}