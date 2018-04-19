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
import { Card, Icon, Row, Col, Tooltip, Popconfirm } from 'antd';
var style = require('./index.scss');
var AntUserCards = /** @class */ (function (_super) {
    __extends(AntUserCards, _super);
    function AntUserCards() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 删除卡片
         */
        _this.handleDelete = function (userId) {
            _this.props.onDelete && _this.props.onDelete(userId);
        };
        /**
         * 修改卡片
         */
        _this.handleEdit = function (userId) {
            _this.props.onEdit && _this.props.onEdit(userId);
        };
        return _this;
    }
    AntUserCards.prototype.render = function () {
        var _this = this;
        var _a = this.props, dataSource = _a.dataSource, userMsg = _a.userMsg, cardWidth = _a.cardWidth;
        var cardContent = dataSource.map(function (v) {
            return (React.createElement("div", { key: v.userId },
                React.createElement("div", { className: style['user_gender'], style: v.gender === '1'
                        ? { borderTop: '60px solid #3499fb' }
                        : v.gender === '2'
                            ? { borderTop: '60px solid #efc45d' }
                            : { borderTop: '60px solid #ddd' } },
                    React.createElement("span", null, v.gender === '1' ? '男' : v.gender === '2' ? '女' : '无')),
                React.createElement(Row, null,
                    React.createElement(Col, { md: 24, className: style['user_card'] },
                        React.createElement("img", { alt: "example", src: v.face
                                ? "/file/" + v.face
                                : require('../../assets/images/avatar.png'), style: {
                                width: '90px',
                                height: '90px',
                                borderRadius: '90px'
                            } }),
                        React.createElement(Tooltip, { key: "uc2", placement: "bottom", title: "修改" }, _this.props.onEdit && (React.createElement(Icon, { type: "form", className: style['user_icon'], onClick: function () { return _this.handleEdit(v.userId); } }))),
                        React.createElement("p", { style: { fontSize: '18px', color: '#262626' } }, v.username)),
                    React.createElement(Col, { span: 24, className: style['user_msg'] }, userMsg)),
                React.createElement(Tooltip, { key: "uc1", placement: "bottom", title: "删除" }, _this.props.onDelete && (React.createElement(Popconfirm, { title: '确定删除 ？', onConfirm: function () { return _this.handleDelete(v.userId); } },
                    React.createElement(Icon, { type: "delete", className: style['user_delete'] }))))));
        });
        return (React.createElement(Card, { style: { borderRadius: '5px', width: cardWidth }, hoverable: true, type: 'inner' }, cardContent));
    };
    return AntUserCards;
}(React.Component));
export default AntUserCards;
//# sourceMappingURL=index.js.map