﻿class Math3D {
    constructor({WIN}) {
        this.WIN = WIN;
    }

    xs(point) {
        const zs = this.WIN.FOCUS.z;
        const z0 = this.WIN.CAMERA.z;
        const x0 = this.WIN.CAMERA.x;
        return (point.x - x0) / (point.z - z0) * (zs - z0) + x0;
    }

    ys(point) {
        const zs = this.WIN.FOCUS.z;
        const z0 = this.WIN.CAMERA.z;
        const y0 = this.WIN.CAMERA.y;
        return (point.y - y0) / (point.z - z0) * (zs - z0) + y0;
    }

    mult(T, M) {
        const c = [0, 0, 0, 0];
        for (let i = 0; i < 4; i++) {
            let s = 0;
            for (let j = 0; j < 4; j++) {
                s += T[j][i] * M[j];
            }
            c[i] = s;
        }
        return c;
    }

    zoom(delta, point) {
        const array = this.mult(
            [[delta, 0, 0, 0],
                [0, delta, 0, 0],
                [0, 0, delta, 0],
                [0, 0, 0, 1]],
            [point.x, point.y, point.z, 1]);
        point.makeFromArray(array);
    }

    rotateOY(alpha, point) {
        const array = this.mult([
                [Math.cos(alpha), 0, -Math.sin(alpha), 0],
                [0, 1, 0, 0],
                [Math.sin(alpha), 0, Math.cos(alpha), 0],
                [0, 0, 0, 1]],
            [point.x, point.y, point.z, 1]);
        point.makeFromArray(array);
    }

    rotateOX(alpha, point) {
        const array = this.mult([
                [1, 0, 0, 0],
                [0, Math.cos(alpha), Math.sin(alpha), 0],
                [0, -Math.sin(alpha), Math.cos(alpha), 0],
                [0, 0, 0, 1]],
            [point.x, point.y, point.z, 1]);
        point.makeFromArray(array);
    }

    calcCenters(figure) {
        figure.polygons.forEach(polygon => {
            const points = polygon.points;
            let x = 0, y = 0, z = 0;
            for (let j = 0; j < points.length; j++) {
                x += figure.points[points[j]].x;
                y += figure.points[points[j]].y;
                z += figure.points[points[j]].z;
            }
            polygon.center.x = x / points.length;
            polygon.center.y = y / points.length;
            polygon.center.z = z / points.length;
        })

    }

    calcDistance(figure, endPoint, name) {
        figure.polygons.forEach(polygon => {
            polygon[name] = Math.sqrt(
                Math.pow(endPoint.x - polygon.center.x, 2) +
                Math.pow(endPoint.y - polygon.center.y, 2) +
                Math.pow(endPoint.z - polygon.center.z, 2));
        });
    }


    calcIllumination(distance, lumen) {
        const res = distance ? lumen / Math.pow(
            distance, 3
        ) : 1;
        return res > 1 ? 1 : res;
    }

    sortByArtistAlgoritm(polygons) {
        polygons.sort((a, b) => b.distance - a.distance)
    }
}//В сфере радиус и количество точек. Выбирать у каждой фигуру.
//Все, что связано с трехмерной графикой здесь.