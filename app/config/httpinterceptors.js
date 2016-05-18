/**
 * Created by niek on 18-5-2016.
 */
module.exports = function () {
    return {
        request: function (config) {

            config.headers['x-username'] = window.localStorage['username'];
            config.headers['x-token'] = window.localStorage['token'];

            return config;
        }
    };
};
