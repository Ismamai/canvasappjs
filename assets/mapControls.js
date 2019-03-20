"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (Component, sampleViews) {
    "use strict";

    var MapControls = function (_Component) {
        _inherits(MapControls, _Component);

        function MapControls() {
            _classCallCheck(this, MapControls);

            var _this = _possibleConstructorReturn(this, (MapControls.__proto__ || Object.getPrototypeOf(MapControls)).call(this));

            _this.goNext = _this.goNext.bind(_this);
            return _this;
        }

        _createClass(MapControls, [{
            key: "goNext",
            value: function goNext() {
                window.location.hash = "Next/0";
            }
        }, {
            key: "render",
            value: function render() {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h1",
                        null,
                        "This is the main page"
                    ),
                    React.createElement(
                        "button",
                        { onClick: this.goNext },
                        " Next"
                    )
                );
            }
        }]);

        return MapControls;
    }(Component);

    sampleViews.MapControls = MapControls;
})(React.Component, sampleViews);
//# sourceMappingURL=mapControls.js.map
