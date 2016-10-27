function raceAPIService($resource) {
    const raceResource = $resource('/api/race/:id/',
            { id: '@id' });
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
    };
}

export default raceAPIService;

