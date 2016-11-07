function resultsAPIService($resource) {
    // const resultsResource = $resource('/api/results/',
    //         { id: '@id' });
    // return {
    //     getResults(race) {
    //         return resultsResource.get({ race }).$promise.then((data) => {
    //             return data.results;
    //         });
    //     },
    // };
    const userResultsResource = $resource('/api/user-results/',
            { id: '@id' });
    return {
        getUserResults() {
            return userResultsResource.get({}).$promise.then((data) => {
                return data.results;
            });
        },
    };
}

export default resultsAPIService;
