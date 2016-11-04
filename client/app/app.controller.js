function AppController(raceAPIService) {
    const ctrl = this;

    raceAPIService.getMe().then((me) => {
        ctrl.username = me.username;
    });
}

export default AppController;
