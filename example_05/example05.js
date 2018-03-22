"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fooa = 123;
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
