var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react"], function (require, exports, React) {
    var PropsItem = (function () {
        function PropsItem(test) {
            this.test = test;
        }
        return PropsItem;
    })();
    exports.PropsItem = PropsItem;
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            _super.apply(this, arguments);
        }
        App.prototype.render = function () {
            return (React.createElement("div", {"className": "container"}, this.props.test.test));
        };
        return App;
    })(React.Component);
    exports.App = App;
    var propsItem = new PropsItem("works");
    var b = 1;
    React.render(React.createElement(App, {"test": propsItem, "test2": [propsItem]}), document.getElementById("render-target"));
});
