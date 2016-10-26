function PageController(raceAPIService) {
    const ctrl = this;

    function getRaces() {
        raceAPIService.race_list.get().$promise.then((data) => {
            ctrl.race_list = data.results;
        });
    }
    getRaces();
}
export default PageController;
