"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _appSlice = _interopRequireDefault(require("./appSlice"));

var _searchSlice = _interopRequireDefault(require("./searchSlice"));

var _chatSlice = _interopRequireDefault(require("./chatSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _toolkit.configureStore)({
  reducer: {
    app: _appSlice["default"],
    search: _searchSlice["default"],
    chat: _chatSlice["default"]
  }
});
var _default = store;
exports["default"] = _default;