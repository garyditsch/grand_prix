function raceAPIService($resource) {
    const api = {
        race_list: $resource('/api/race/:id/',
            { id: '@id' },
            ),
    };
    return api;
}

export default raceAPIService;
