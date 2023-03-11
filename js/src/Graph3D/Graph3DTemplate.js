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
            </p>
            
            <canvas id="canvas3d"></canvas>
`
