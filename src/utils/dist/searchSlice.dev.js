"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.cacheResults = void 0;

var _toolkit = require("@reduxjs/toolkit");

var searchSlice = (0, _toolkit.createSlice)({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: function cacheResults(state, action) {
      //merge two object
      state = Object.assign(state, action.payload);
    }
  }
});
var cacheResults = searchSlice.actions.cacheResults;
exports.cacheResults = cacheResults;
var _default = searchSlice.reducer;
exports["default"] = _default;