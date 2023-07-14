module.exports = {
    check: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Hello", "coolMethod", [name]);
    }
};
