function raceAPIService($resource, $http) {
    const raceResource = $resource('/api/race/:id/',
            { id: '@id' });
    let me = null;
    return {
        getRaces() {
            return raceResource.get().$promise.then((data) => {
                return data.results;
            });
        },
        getRaceDetails(id) {
            return raceResource.get({ id }).$promise.then((data) => {
                return data;
            });
        },
        getMe() {
            return $http.get('/api/me/').then((response) => {
                me = response.data;
                return me;
            });
        },
    };
}

export default raceAPIService;
