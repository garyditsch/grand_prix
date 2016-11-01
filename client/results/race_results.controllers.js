function RaceResultsController() {
    const ctrl = this;

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
}

export default RaceResultsController;
