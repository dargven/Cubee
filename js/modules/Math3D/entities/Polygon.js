class Polygon{// Че мы дополняли:
    constructor(points = [], color = 'black') {
        this.points = points;
        // this.lumen = 1; // [0,1]
        this.color = color;//this.hexToRgb(color); // раньше здесь был просто color; Меняем цвет полигона.
        this.center = new Point;
        this.distance = 0;

    }
    // hexToRgb(hex){
    //     const result = /^#?([a-f\d]{2})//Повторяем два раза эту часть
    //     $/i.exec(hex);
    //     return result ?{ r:parseInt(result[1], 16),
    //         g:parseInt(result[2], 16),
    //         b:parseInt(result[3], 16)}:{r:0,g:0,b:0};
    //         }
    // rgbToHex(r,g,b){
    //     return `rgb(${r},${g}, ${b})`
    // }
}

