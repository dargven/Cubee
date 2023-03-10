Template.prototype.Graph3D = () =>
`
        <label>3D Графика. Выберите Фигуру: </label>
            <select id="selectentities">
                <option value="Cube" selected = "selected">Cube</option>
                <option value="Sphere">Sphere</option>
                <option value="Example">Example</option>
                <option value="Example">Example</option>
                <option value="Example">Example</option>
            </select>
            <p>
            Введите цвет: <input type = "text" id = "color">
            </p>
            <canvas id="canvas3d"></canvas>
`
