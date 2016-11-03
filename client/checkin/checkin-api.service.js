function checkinsAPIService($resource) {
    const checkinsResource = $resource('/api/checkins/:id/',
            { id: '@id' });
    return {
        getCheckins() {
            return checkinsResource.get({}).$promise.then((data) => {
                return data.results;
            });
        },
    };
}

export default checkinsAPIService;
