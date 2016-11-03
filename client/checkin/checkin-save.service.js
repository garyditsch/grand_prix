function checkinsSaveService($resource) {
    const saveapi = {
        checkins: $resource('/api/checkins/:id/',
            { id: '@id' },
            {
                update: {
                    method: 'PUT',
                },
            }),
    };
    return saveapi;
}

export default checkinsSaveService;
