class Graph3D extends Component {
    constructor(params) {
        super(params);
        this.WIN = {
            LEFT: -10,
            BOTTOM: -10,
            WIDTH: 20,
            HEIGHT: 20,
            FOCUS: new Point(0, 0, 30),
            CAMERA: new Point(0, 0, 50)

        };
        this.LIGHT = new Light(20, 20, 10, 1e4);
        this.graph = new Graph({
            id: 'canvas3d',
            WIN: this.WIN,
            width: 700,
            height: 700,
            callbacks: {
                wheel: (event) => this.wheel(event),
                mouseup: () => this.mouseup(),
                mousedown: () => this.mousedown(),
                mousemove: (event) => this.mousemove(event),
                mouseleave: () => this.mouseleave()
            }
        });
        new SelectEntities({
            id: 'selectEntities',
            parent: this.id,
            template: template.SelectEntities,
            callbacks: {
                updateScene: (newFigure) => this.updateScene(newFigure)
            }
        })
        new SelectVariants({
            id: 'selectVariants',
            parent: this.id,
            template: template.SelectVariants,
            callbacks: {
                recolor: (color) => this.recolor(color),
                updateVar: (variant, statement) => this.updateVar(variant,statement)
            }
        })
        this.math3D = new Math3D({WIN: this.WIN});
        this.scene = [new Cube]
        this.selectV = {
            'edges': true,
            'points': true,
            'polygons': true
        }
        this.canRotate = false;
        this.renderScene();

    }

    wheel(event) {
        const delta = 1 + event.wheelDelta / 1200;
        this.scene.forEach(figure => {
            figure.points.forEach(point => {
                this.math3D.zoom(delta, point)
            });
            this.renderScene();
        })
    }



    mousemove(event) {
        if (this.canRotate) {
            const {movementX, movementY} = event;
            this.scene.forEach(figure => {
                figure.points.forEach(point => {
                    this.math3D.rotateOY(movementX / 180, point);
                    this.math3D.rotateOX(movementY / 180, point);
                });
            });
            this.renderScene();
        }
    }

    mouseup() {
        this.canRotate = false;
    }

    mousedown() {
        this.canRotate = true;
    }

    mouseleave() {
        this.canRotate = false;
    }

    updateScene(newFigure) {
        this.scene = [newFigure];
        this.renderScene();
    }

    recolor(color) {
        this.scene.forEach(figure => {
            figure.polygons.forEach(polygon => {
                polygon.color = polygon.hexToRgb(color);
            })
            this.renderScene();

    })
    }
    updateVar(variant = '',statement){
        this.selectV.variant = statement;
        console.log(this.selectV);
    }

    renderScene() {
        this.graph.clear();
        this.scene.forEach(figure => {
            this.math3D.calcCenters(figure);
            this.math3D.calcDistance(figure, this.WIN.CAMERA, 'distance');
            this.math3D.calcDistance(figure, this.LIGHT, 'lumen')
            this.math3D.sortByArtistAlgoritm(figure.polygons);
            if (this.selectV.polygons) {
            figure.polygons.forEach(polygon => {
                const points = [
                    figure.points[polygon.points[0]],
                    figure.points[polygon.points[1]],
                    figure.points[polygon.points[2]],
                    figure.points[polygon.points[3]]
                ];
                let {r, g, b} = polygon.color;
                const lumen = this.math3D.calcIllumination(polygon.lumen, this.LIGHT.lumen);
                r = Math.round(r * lumen);
                g = Math.round(g * lumen);
                b = Math.round(b * lumen);
                const color = polygon.rgbToHex(r, g, b);

                this.graph.polygon(
                    points.map(point => {
                        return {
                            x: this.math3D.xs(point),
                            y: this.math3D.ys(point)
                        }

                    }), color);

            })
            }
            if (this.selectV.edges) {
            figure.edges.forEach(({p1, p2}) => {
                const point1 = figure.points[p1];
                const point2 = figure.points[p2];
                this.graph.line(
                    this.math3D.xs(point1),
                    this.math3D.ys(point1),
                    this.math3D.xs(point2),
                    this.math3D.ys(point2)
                );
            });
            }
            if (this.selectV.points) {
            figure.points.forEach(point => {
                this.graph.point(
                    this.math3D.xs(point),
                    this.math3D.ys(point)
                );
            });
            }
        })
        }


        // addEventListeners() {//убрать addevent, потому что перенесли в SelectEntites.
        //     const colorPicker = document.getElementById('colorSelector');
        //     colorPicker.addEventListener('change', () => {
        //         this.figure.recolor(colorPicker.value);
        //         this.renderScene(this.figure);
        //     })
        //     const selectedColor = document.getElementById('selectentities')
        //     selectedColor.addEventListener('change', () => {
        //         this.figure.recolor(colorPicker.value);
        //         this.renderScene(this.figure);
        //     })
        //     this.edges = true;
        // const edgesCheck = document.querySelector('#edges');
        // edgesCheck.addEventListener('change', () => {
        //     this.edges = edgesCheck.checked;
        //     this.renderScene(this.figure);
        //})
        // this.points = true;
        // const pointsCheck = document.querySelector('#points');
        // pointsCheck.addEventListener('change', () => {
        //     this.points = pointsCheck.checked;
        //     this.renderScene(this.figure);
        // })
        // this.polygons = true;
        // const polygonsCheck = document.querySelector('#polygons');
        // polygonsCheck.addEventListener('change', () => {
        //     this.polygons = polygonsCheck.checked;
        //     this.renderScene(this.figure);
        // })
        // const countP = document.querySelector('#count')
        // countP.addEventListener('change', () => {
        //     this.nmbOfCnt = countP.value;
        //     this.renderScene(this.figure);
        //
        // })



}


