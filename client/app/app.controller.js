function AppController(raceAPIService) {
    const ctrl = this;

    raceAPIService.getMe().then((me) => {
        ctrl.username = me.username;
        ctrl.me = me;
    });
}

export default AppController;
