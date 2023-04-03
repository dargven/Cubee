class SelectVariants extends Component{

    addEventListeners() {
        const colorPicker = document.getElementById('colorSelector');
        colorPicker.addEventListener('change', () => {
            this.callbacks.recolor(colorPicker.value);
        })
        const selectedColor = document.getElementById('selectentities')
        selectedColor.addEventListener('change', () => {
            this.callbacks.recolor(colorPicker.value);
        })
        const edgesCheck = document.querySelector('#edges');
        edgesCheck.addEventListener('change', () => {
            this.callbacks.updateVar('edges',edgesCheck.checked);
        })
        const pointsCheck = document.querySelector('#points');
        pointsCheck.addEventListener('change', () => {
            this.callbacks.updateVar('points',pointsCheck.checked);
        })
        const polygonsCheck = document.querySelector('#polygons');
        polygonsCheck.addEventListener('change', () => {
            this.callbacks.updateVar('polygons',polygonsCheck.checked);
        })
        const countP = document.querySelector('#count')
        countP.addEventListener('change', () => {
            this.nmbOfCnt = countP.value;

        })

    }
}