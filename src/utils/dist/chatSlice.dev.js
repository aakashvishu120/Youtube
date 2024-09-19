"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.addMessage = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _constants = require("./constants");

var chatSlice = (0, _toolkit.createSlice)({
  name: "chat",
  initialState: {
    messages: []
  },
  reducers: {
    addMessage: function addMessage(state, action) {
      state.messages.splice(_constants.LIVE_CHAT_COUNT, 1); // state.messages.push(action.payload); //push from end

      state.messages.unshift(action.payload); //push from start
    }
  }
});
var addMessage = chatSlice.actions.addMessage;
exports.addMessage = addMessage;
var _default = chatSlice.reducer;
exports["default"] = _default;