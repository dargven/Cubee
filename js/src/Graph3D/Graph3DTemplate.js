Template.prototype.Graph3D = () =>
`
        <label>3D Графика. Выберите Фигуру: </label>
            <select id="selectentities">
                <option value="Cube" selected = "selected">Cube</option>
                <option value="Sphere">Sphere</option>
                <option value="Ellipsoid">Ellips</option>
                <option value="Tor">Tor</option>
                <option value="Example">Example</option>
            </select>
            <p>
           <input type = "color" id = "colorSelector">
           <input type="checkbox" id="polygons" checked> Полигоны
           <input type="checkbox" id="edges"checked> Ребра
            <input type="checkbox" id="points"checked> Точки
            <input type = "range" min = "1" max = "100" id="radius"> Радиус
            <input type = "range" min = "1" max = "100" id="count">Количество точек
            </p>
            
            <canvas id="canvas3d"></canvas>
`
