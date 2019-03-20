"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (Component, sampleViews) {
    "use strict";

    var FullScreens = function (_Component) {
        _inherits(FullScreens, _Component);

        function FullScreens() {
            _classCallCheck(this, FullScreens);

            var _this = _possibleConstructorReturn(this, (FullScreens.__proto__ || Object.getPrototypeOf(FullScreens)).call(this));

            _this.state = {
                showOverlay: false
            };

            var view = _this;

            return _this;
        }

        _createClass(FullScreens, [{
            key: "render",
            value: function render() {
                var MapControls = sampleViews.MapControls;
                var Next = sampleViews.Next;
                return React.createElement(
                    "div",
                    { className: "fullScreenMain" },
                    React.createElement(
                        ReactRouterDOM.HashRouter,
                        null,
                        React.createElement(
                            "div",
                            null,
                            React.createElement(ReactRouterDOM.Route, { exact: true, path: "/", component: MapControls }),
                            React.createElement(ReactRouterDOM.Route, { path: "/Next/:featureId", component: Next })
                        )
                    )
                );
            }
        }]);

        return FullScreens;
    }(Component);

    sampleViews.FullScreens = FullScreens;
})(React.Component, sampleViews);
//# sourceMappingURL=fullScreens.js.map
