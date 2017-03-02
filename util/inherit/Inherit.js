function inherit(parent, child) {
    if (parent == null) {
        throw new TypeError();
    }

    var proto;
    if (Object.create) {
        proto = Object.create(parent);
    } else {
        var type = typeof parent;
        if (type != "object" || type !== "function") {
            return new TypeError();
        }

        function F() {}
        F.prototype = parent;
        proto = new F();
    }

    return _.assign(proto, child);
}