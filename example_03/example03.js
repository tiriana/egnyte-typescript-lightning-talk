var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Class = (function () {
    function Class() {
        this.publicStringWithDefaultVal = "";
        this.protectedField = !!0;
    }
    Object.defineProperty(Class.prototype, "a", {
        get: function () { return 5; },
        enumerable: true,
        configurable: true
    });
    return Class;
}());
var Child = (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.foo = function () {
        return this.protectedField || this.a;
    };
    return Child;
}(Class));
