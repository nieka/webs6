/**
 * Created by niek on 18-5-2016.
 */
module.exports = function () {
    return {
        request: function (config) {

            if(window.localStorage['token'] === undefined || window.localStorage['username'] === undefined){
                alert("Je moet ingelogd zijn om deze actie te kunnen doen");
            } else {
                config.headers['x-username'] = window.localStorage['username'];
                config.headers['x-token'] = window.localStorage['token'];
            }


            return config;
        }
    };
};
