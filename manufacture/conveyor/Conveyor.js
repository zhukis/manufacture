function conveyor(callback) {
    function wrapper(param) {
        return callback(param);
    }

    wrapper.requiredParamsType = [];

    for (var i = 1; i < arguments.length; i++) {
        wrapper.requiredParamsType.push(arguments[i]);
    }

    return wrapper;
}