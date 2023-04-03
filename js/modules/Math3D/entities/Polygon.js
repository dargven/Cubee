class Polygon {// Че мы дополняли:
    constructor(points = [], color = 'blue') {
        this.points = points;
        this.lumen = 1; // [0,1]
        this.color = this.hexToRgb(color); // раньше здесь был просто color; Меняем цвет полигона.
        this.center = new Point();
        this.distance = 0;

    }

    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : {r: 50, g: 50, b: 50};
    }

    rgbToHex(r, g, b) {
        return `rgb(${r},${g}, ${b})`
    }
}

