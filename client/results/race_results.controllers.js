function RaceResultsController(resultsEditService, moment) {
    const ctrl = this;
    ctrl.viewChart = false;

    // google chart example

    ctrl.myChartObject = {};

    ctrl.myChartObject.type = 'ColumnChart';

    ctrl.myChartObject.data = { cols: [
        { id: 't', label: 'Topping', type: 'string' },
        { id: 's', label: 'Slices', type: 'number' },
    ],
    rows: [
        { c: [
            { v: 'Mushrooms' },
            { v: 3 },
        ] },
        { c: [
            { v: 'Olives' },
            { v: 31 },
        ] },
    ] };

    ctrl.myChartObject.options = {
        title: 'How Much Pizza I Ate Last Night',
    };

    // The race results data formatting and graphing
    // ctrl.myChartObject.data = [];
    // for (let i = 0; i < ctrl.results.length; i++) {
    //     const newTime = ctrl.results[i].time;
    //     const formattedTime = moment().startOf('day').seconds(newTime).format('H:mm:ss');
    //     ctrl.data.push(formattedTime);
    // }

    // ctrl.labels = [];
    // for (let i = 0; i < ctrl.results.length; i++) {
    //     ctrl.labels.push(ctrl.results[i].id);
    // }

    // ctrl.datasetOverride = [{ yAxisID: 'y-axis-1' }];

    // ctrl.options = {
    //     scales: {
    //         yAxes: [
    //             {
    //                 id: 'y-axis-1',
    //                 type: 'linear',
    //                 display: true,
    //                 position: 'left',
    //             },
    //         ],
    //     },
    // };

    // ctrl.series = ['Series A', 'Series B'];

    // Change result time data from seconds to H:mm:ss, then add to results data list
    // ctrl.standardTime = {};
    ctrl.getNewTime = function getNewTime() {
        for (let i = 0; i < ctrl.results.length; i++) {
            const newTime = ctrl.results[i].time;
            const formattedTime = moment().startOf('day').seconds(newTime).format('H:mm:ss');
            ctrl.results[i].updatedTime = formattedTime;
        }
    };
    ctrl.getNewTime();

    // console.log(ctrl.results);
    // ctrl.resultsEdited = R.merge({}, ctrl.results, ctrl.standardTime);

    // This function allows user to show / hide results chart
    ctrl.showChart = function showChart() {
        ctrl.viewChart = !ctrl.viewChart;
    };

    // This function allows user to set race to claimed
    ctrl.claimRaceResult = function claimRaceResult(runner) {
        runner.claim = true;
        runner.user = ctrl.me.id;
        resultsEditService.resultsEdit.update(runner).$promise.then((data) => {
            runner = data;
        });
    };

    // This function allows user to set a race to unclaimed
    ctrl.unclaimRaceResult = function unclaimRaceResult(runner) {
        runner.claim = false;
        runner.user = null;
        resultsEditService.resultsEdit.update(runner).$promise.then((data) => {
            runner = data;
        });
    };
}

export default RaceResultsController;
