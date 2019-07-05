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
import { Link } from 'react-router-dom';
var style = require('./index.scss');
var AntdLabCard = /** @class */ (function (_super) {
    __extends(AntdLabCard, _super);
    function AntdLabCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 删除卡片
         */
        _this.handleDelete = function (LabId) {
            _this.props.onDelete && _this.props.onDelete(LabId);
        };
        /**
         * 修改卡片
         */
        _this.handleEdit = function (LabId) {
            _this.props.onEdit && _this.props.onEdit(LabId);
        };
        return _this;
    }
    AntdLabCard.prototype.render = function () {
        var _this = this;
        var _a = this.props, dataSource = _a.dataSource, arr = _a.arr;
        var cardContent = dataSource.map(function (v) {
            return (React.createElement("div", { key: v.labId },
                React.createElement(Card, { title: React.createElement(Link, { to: "" + v.link + v.labId }, v.name), actions: [
                        React.createElement("div", { key: 'd1', onClick: function () { return _this.handleEdit(v.labId); } },
                            React.createElement(Icon, { type: "edit" }),
                            "\u00A0\u00A0\u00A0",
                            React.createElement("span", null, "\u7F16\u8F91")),
                        React.createElement("div", { key: 'd2' },
                            React.createElement(Popconfirm, { title: '确认删除?', onConfirm: function () { return _this.handleDelete(v.labId); } },
                                React.createElement(Icon, { type: "delete" }),
                                "\u00A0\u00A0\u00A0",
                                React.createElement("span", null, "\u5220\u9664")))
                    ] },
                    React.createElement("div", { className: style['LabcardM-B'] + " " + style['personCardItemS'] }, v.remark),
                    React.createElement("div", { className: style['personCardItemS'] }, arr
                        .slice(0, _this.props.avatarNumber || 5)
                        .map(function (v, i) {
                        return (React.createElement(Avatar, { key: i, size: "large", src: v, className: style['Avatar'] }));
                    })))));
        });
        return React.createElement("div", { className: style['LabCard'] }, cardContent);
    };
    return AntdLabCard;
}(React.Component));
export default AntdLabCard;
//# sourceMappingURL=index.js.map