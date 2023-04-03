class SelectEntities extends Component {
    addEventListeners() {
        const figures = {
            Cube: new Cube(),
            Sphere: new Sphere(),
            Ellipsoid: new Ellipsoid(),
            Tor: new Tor()
        }
        const selector = document.getElementById('selectentities');
        selector.addEventListener('change', () => {
            // this.showParam(selector.value);
            this.callbacks.updateScene(figures[selector.value]);
        })

    }

    // showParam(id) {
    //     document.querySelectorAll(".paramsFigures")
    //         .forEach(elem => elem.classList.add("hidden"));
    //     document.getElementById(id).classList.remove("hidden");
    // }
}