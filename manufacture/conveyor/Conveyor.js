function conveyor(callback) {
    function wrapper() {
        callback();
    }

    wrapper.requiredParamsType = [];

    for (var i = 1; i < arguments.length; i++) {
        wrapper.requiredParamsType.push(arguments[i]);
    }

    return wrapper;
}