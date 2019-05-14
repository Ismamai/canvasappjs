"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (Component, sampleViews) {
    "use strict";

    var Next = function (_Component) {
        _inherits(Next, _Component);

        function Next() {
            _classCallCheck(this, Next);

            var _this = _possibleConstructorReturn(this, (Next.__proto__ || Object.getPrototypeOf(Next)).call(this));

            _this.goNext = _this.goNext.bind(_this);
            _this.goBack = _this.goBack.bind(_this);
            return _this;
        }

        _createClass(Next, [{
            key: "goNext",
            value: function goNext() {
                var nextValue = parseInt(this.props.match.params.featureId) + 1;
                window.location.hash = "Next/" + nextValue;
            }
        }, {
            key: "goBack",
            value: function goBack() {
                // es.SFDC.client.navigateBack();
                history.back();
            }
        }, {
            key: "open",
            value: function open() {
                // alert("going to open an object");
                es.SFDC.client.openObject("00Q1t000004EoE8");
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
                        "h2",
                        null,
                        " We are currently on ",
                        this.props.match.params.featureId,
                        " "
                    ),
                    React.createElement(
                        "button",
                        { onClick: this.goNext },
                        " Next"
                    ),
                    React.createElement(
                        "button",
                        { onClick: this.goBack },
                        " Back"
                    ),
                    React.createElement(
                        "button",
                        { onClick: this.open },
                        " Open record"
                    )
                );
            }
        }]);

        return Next;
    }(Component);

    sampleViews.Next = Next;
})(React.Component, sampleViews);
//# sourceMappingURL=next.js.map
