var api = require('./api');

module.exports = {
    platforms: {
        meta: {
            get: function(callback) {
                api('/platforms/meta', {}, callback);
            }
        },
        get: function(params, callback) {
            api('/platforms', params, callback);
        },
        getById: function(platformId, params, callback) {
            api('/platforms/' + platformId, params, callback);
        },
        getGamesByPlatformId: function(platformId, params, callback) {
            api('/platforms/' + platformId + '/games', params, callback);
        }
    },
    games: {
        meta: {
            get: function(callback) {
                api('/games/meta', {}, callback);
            }
        },
        get: function(params, callback) {
            api('/games', params, callback);
        },
        getById: function(platformId, params, callback) {
            api('/games/' + platformId, params, callback);
        },
        search: function(params, callback) {
            api('/games/search', params, callback);
        }
    },
    companies: {
        meta: {
            get: function(callback) {
                api('/companies/meta', {}, callback);
            }
        },
        get: function(params, callback) {
            api('/companies', params, callback);
        },
        getById: function(platformId, params, callback) {
            api('/companies/' + platformId, params, callback);
        },
        getGamesByCompanyId: function(companyId, params, callback) {
            api('/companies/' + companyId + '/games', params, callback);
        }
    },
    people: {
        meta: {
            get: function(callback) {
                api('/people/meta', {}, callback);
            }
        },
        get: function(params, callback) {
            api('/people', params, callback);
        },
        getById: function(personId, params, callback) {
            api('/people/' + personId, params, callback);
        },
        getGamesByPersonId: function(personId, params, callback) {
            api('/people/' + personId + '/games', params, callback);
        }
    },
    franchises: {
        meta: {
            get: function(callback) {
                api('/franchises/meta', {}, callback);
            }
        },
        get: function(params, callback) {
            api('/franchises', params, callback);
        },
        getById: function(franchiseId, params, callback) {
            api('/franchises/' + franchiseId, params, callback);
        },
        getGamesByFranchiseId: function(franchiseId, params, callback) {
            api('/franchises/' + franchiseId + '/games', params, callback);
        }
    }
};