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
import * as React from 'react';
import { Card, Icon, Popconfirm, Avatar } from 'antd';
var style = require('./index.scss');
var LabCard = /** @class */ (function (_super) {
    __extends(LabCard, _super);
    function LabCard(props) {
        return _super.call(this, props) || this;
    }
    LabCard.prototype.render = function () {
        var _this = this;
        var cardLink = this.props.cardLink;
        return (React.createElement("div", { className: style['LabCard'] },
            React.createElement(Card, { title: cardLink, actions: [
                    React.createElement("div", { key: 'd1', onClick: function () { return _this.props.openModal(); } },
                        React.createElement(Icon, { type: "edit" }),
                        "\u00A0\u00A0\u00A0",
                        React.createElement("span", null, "\u7F16\u8F91")),
                    React.createElement("div", { key: 'd2' },
                        React.createElement(Popconfirm, { title: '确认删除?', onConfirm: function () { return _this.props.handleDelete(); } },
                            React.createElement(Icon, { type: "delete" }),
                            "\u00A0\u00A0\u00A0",
                            React.createElement("span", null, "\u5220\u9664")))
                ] },
                React.createElement("div", { className: style['LabcardM-B'] + " " + style['personCardItemS'] }, this.props.remark),
                React.createElement("div", { className: style['personCardItemS'] }, this.props.arr.slice(0, 5).map(function (v, i) {
                    return (React.createElement(Avatar, { key: i, size: "large", src: "/file/" + v, className: style['Avatar'] }));
                })))));
    };
    return LabCard;
}(React.Component));
export default LabCard;
//# sourceMappingURL=index.js.map