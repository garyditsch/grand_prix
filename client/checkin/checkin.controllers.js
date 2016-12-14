function CheckinController(checkinsSaveService) {
    const ctrl = this;
    ctrl.editedCheckin = {};

    ctrl.saveCheckin = function saveCheckin(editedCheckin) {
        checkinsSaveService.checkins.save(editedCheckin).$promise.then((savedCheckin) => {
            // console.log(editedCheckin);
            ctrl.checkins = [
                savedCheckin,
                ...ctrl.checkins,
            ];
            ctrl.editedCheckin = {};
        });
    };

    ctrl.getRaceName = function getRaceName(raceid) {
        for (let i = 0; i < ctrl.races.length; i += 1) {
            if (raceid === ctrl.races[i].id) {
                return ctrl.races[i].name;
            }
        }
    };
}
export default CheckinController;
