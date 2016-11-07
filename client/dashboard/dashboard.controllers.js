function DashboardController(resultsEditService) {
    const ctrl = this;

    // This function allows user to set race to claimed
    ctrl.claimRaceResult = function claimRaceResult(runner) {
        runner.claim = true;
        runner.user = ctrl.me.id;
        resultsEditService.resultsEdit.update(runner).$promise.then((data) => {
            console.log(data);
            runner = data;
        });
    };

    // This function allows user to set a race to unclaimed
    ctrl.unclaimRaceResult = function unclaimRaceResult(runner) {
        runner.claim = false;
        runner.user = null;
        resultsEditService.resultsEdit.update(runner).$promise.then((data) => {
            console.log(data);
            runner = data;
        });
    };
}

export default DashboardController;
