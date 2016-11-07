function userResultsAPIService($resource) {
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

export default userResultsAPIService;
