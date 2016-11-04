function resultsEditService($resource) {
    const editResultsAPI = {
        resultsEdit: $resource('/api/results/:id/',
            { id: '@id' },
            {
                update: {
                    method: 'PUT',
                },
            }),
    };
    return editResultsAPI;
}

export default resultsEditService;
