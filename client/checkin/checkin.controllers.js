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
}
export default CheckinController;
