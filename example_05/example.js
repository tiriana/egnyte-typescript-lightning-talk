(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.foo = "bar";
    exports.default = exports.foo;
    function fn() { return exports.foo; }
    exports.fn = fn;
    var ThisIsClass = (function () {
        function ThisIsClass() {
        }
        Object.defineProperty(ThisIsClass.prototype, "aaa", {
            get: function () { return 1; },
            enumerable: true,
            configurable: true
        });
        return ThisIsClass;
    }());
    exports.ThisIsClass = ThisIsClass;
});
