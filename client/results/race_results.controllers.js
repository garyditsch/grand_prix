function RaceResultsController(resultsEditService) {
    const ctrl = this;

    // The race results data formatting and graphing
    ctrl.data = [];
    for (let i = 0; i < ctrl.results.length; i++) {
        const newTime = ctrl.results[i].time;
        ctrl.data.push(newTime);
    }

    ctrl.labels = [];
    for (let i = 0; i < ctrl.results.length; i++) {
        ctrl.labels.push(ctrl.results[i].id);
    }

    ctrl.datasetOverride = [{ yAxisID: 'y-axis-1' }];

    ctrl.options = {
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left',
                },
            ],
        },
    };

    // ctrl.series = ['Series A', 'Series B'];

    // This function allows user to set race to claimed
    ctrl.claimRaceResult = function claimRaceResult(runner) {
        runner.claim = !runner.claim;
        runner.user = ctrl.me.id;
        resultsEditService.resultsEdit.update(runner).$promise.then((data) => {
            runner = data;
        });
    };

    // // This function allows user to set a race to unclaimed
    // ctrl.unclaimRaceResult = function(result) {
    //     const index = ctrl.results.indexOf(result);
    //     ctrl.results[index].claim = false;
    // };

    // ctrl.updateGrocery = function updateGrocery(groceryToUpdate) {
    //     groceryAPIService.groceries.update(groceryToUpdate).$promise.then(() => {
    //     flashesService.displayMessage('Grocery Updated', 'success');
    //     });
    // };

    // ctrl.checkGrocery = function checkGrocery() {
    //    ctrl.grocery.checked = !ctrl.grocery.checked;
    //    ctrl.update({ groceryToUpdate: ctrl.grocery });
}

export default RaceResultsController;
