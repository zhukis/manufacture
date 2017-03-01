function inherit(proto) {
    if (proto == null) {
        throw new TypeError();
    }

    if (Object.create) {
        return Object.create(proto);
    }

    var type = typeof proto;
    if (type != "object" || type !== "function") {
        return new TypeError();
    }

    function F() {}
    F.prototype = proto;
    return new F();
}