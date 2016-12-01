import R from 'ramda';

function RaceResultsController(resultsEditService, moment) {
    const ctrl = this;
    ctrl.viewChart = false;

    // google chart example

    const myChartObject = {};

    myChartObject.type = 'ColumnChart';

    // myChartObject.data = google.visualization.arrayToDataTable([


    // ]);

    // myChartObject.data = { cols: [
    //     { id: 'r', label: 'Runner', type: 'string' },
    //     { id: 't', label: 'Time', type: 'string' },
    // ],
    // rows: [
    //     { c: [
    //         { v: 'Mushrooms' },
    //         { v: 3 },
    //     ] },
    //     { c: [
    //         { v: 'Olives' },
    //         { v: 31 },
    //     ] },
    // ] };

    myChartObject.options = {
        title: 'How Much Pizza I Ate Last Night',
    };

    ctrl.Chart = myChartObject;

    // Change result time data from seconds to H:mm:ss, then add to results data list
    ctrl.getNewTime = function getNewTime() {
        for (let i = 0; i < ctrl.results.length; i++) {
            const newTime = ctrl.results[i].time;
            const formattedTime = moment().startOf('day').seconds(newTime).format('H:mm:ss');
            ctrl.results[i].updatedTime = formattedTime;
        }
    };
    ctrl.getNewTime();

    ctrl.getAnalytics = function getAnalytics() {
        const times = [];
        for (let i = 0; i < ctrl.results.length; i++) {
            times.push(ctrl.results[i].time);
        }
        ctrl.finishers = ctrl.results.length;
        const mean = R.mean(times);
        ctrl.formattedMean = moment().startOf('day').seconds(mean).format('H:mm:ss');
    };
    ctrl.getAnalytics();

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
