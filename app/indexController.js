/**
 * Created by Raymond Phua on 11-6-2016.
 */
module.exports = function($state) {

    if (window.localStorage['username'] == undefined && window.localStorage['token'] == undefined) {
        window.open("http://mahjongmayhem.herokuapp.com/auth/avans?callbackUrl=http://localhost:3000/%23/authcallback","_self")
    }
};