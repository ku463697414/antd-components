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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
function computeHeight(node) {
    var totalHeight = parseInt(getComputedStyle(node).height, 10);
    var padding = parseInt(getComputedStyle(node).paddingTop, 10) +
        parseInt(getComputedStyle(node).paddingBottom, 10);
    return totalHeight - padding;
}
function getAutoHeight(n) {
    if (!n) {
        return 0;
    }
    var node = n;
    var height = computeHeight(node);
    while (!height) {
        node = node.parentNode;
        if (node) {
            height = computeHeight(node);
        }
        else {
            break;
        }
    }
    return height;
}
// tslint:disable-next-line:no-any
var autoHeight = function (WrappedComponent) {
    // tslint:disable-next-line:no-any
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                computedHeight: 0
            };
            _this.handleRoot = function (node) {
                _this.root = node;
            };
            return _this;
        }
        class_1.prototype.componentDidMount = function () {
            var height = this.props.height;
            if (!height) {
                var h = getAutoHeight(this.root);
                this.setState({ computedHeight: h });
            }
        };
        class_1.prototype.render = function () {
            var height = this.props.height;
            var computedHeight = this.state.computedHeight;
            var h = height || computedHeight;
            return (React.createElement("div", { ref: this.handleRoot }, h > 0 && React.createElement(WrappedComponent, __assign({}, this.props, { height: h }))));
        };
        return class_1;
    }(React.Component));
};
export default autoHeight;
//# sourceMappingURL=autoHeight.js.map