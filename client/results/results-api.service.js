function resultsAPIService($resource) {
    const resultsResource = $resource('/api/results/',
            { id: '@id' });
    return {
        getResults(race) {
            return resultsResource.get({ race }).$promise.then((data) => {
                return data.results;
            });
        },
    };
}

export default resultsAPIService;
