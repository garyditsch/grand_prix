function checkinsAPIService($resource) {
    const resultsResource = $resource('/api/checkins/',
            { id: '@id' });
    return {
        getCheckins() {
            return resultsResource.get({}).$promise.then((data) => {
                return data.results;
            });
        },
    };
}

export default checkinsAPIService;
