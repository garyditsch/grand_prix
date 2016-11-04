function RaceResultsController(resultsEditService) {
    const ctrl = this;
    ctrl.viewChart = false;

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

    // This function allows user to show / hide results chart
    ctrl.showChart = function showChart() {
        ctrl.viewChart = !ctrl.viewChart;
    };

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

export default RaceResultsController;
