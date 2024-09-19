"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.closeMenu = exports.toggleMenu = void 0;

var _toolkit = require("@reduxjs/toolkit");

var appSlice = (0, _toolkit.createSlice)({
  name: "app",
  initialState: {
    isMenuOpen: true
  },
  reducers: {
    toggleMenu: function toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: function closeMenu(state) {
      state.isMenuOpen = false;
    }
  }
});
var _appSlice$actions = appSlice.actions,
    toggleMenu = _appSlice$actions.toggleMenu,
    closeMenu = _appSlice$actions.closeMenu;
exports.closeMenu = closeMenu;
exports.toggleMenu = toggleMenu;
var _default = appSlice.reducer;
exports["default"] = _default;