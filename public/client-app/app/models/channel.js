"use strict";
var Channel = (function () {
    function Channel(id, name, url, comments) {
        if (id === void 0) { id = ""; }
        this.id = id;
        this.name = name;
        this.url = url;
        this.comments = comments;
    }
    return Channel;
}());
exports.Channel = Channel;
//# sourceMappingURL=channel.js.map