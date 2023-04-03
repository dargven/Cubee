Template.prototype.SelectVariants = () => `
               <p>
               <input type ="color" id = "colorSelector">
               <input type="checkbox" id="polygons" checked> Полигоны
               <input type="checkbox" id="edges"checked> Ребра
               <input type="checkbox" id="points"checked> Точки
               <input type ="range" min = "1" max = "100" id="radius"> Радиус
               <input type ="range" min = "1" max = "100" id="count">Количество точек
               </p>
`
