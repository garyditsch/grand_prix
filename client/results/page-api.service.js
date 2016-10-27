function raceAPIService($resource) {
    const raceResource = $resource('/api/race/:id/',
            { id: '@id' });
    return {
        getRaces() {
            return raceResource.get().$promise.then((data) => {
                return data.results;
            });
        },
    };
}

export default raceAPIService;

