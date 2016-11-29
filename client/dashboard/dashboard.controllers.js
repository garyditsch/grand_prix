function DashboardController(resultsEditService, moment) {
    const ctrl = this;

    ctrl.getNewTime = function getNewTime() {
        for (let i = 0; i < ctrl.userResults.length; i++) {
            const newTime = ctrl.userResults[i].time;
            console.log(newTime);
            const formattedTime = moment().startOf('day').seconds(newTime).format('H:mm:ss');
            console.log(formattedTime);
            ctrl.userResults[i].updatedTime = formattedTime;
            // console.log(ctrl.updatedTime);
        }
    };
    ctrl.getNewTime();

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
