"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VideoCard = function VideoCard(_ref) {
  var info = _ref.info;
  console.log("inside videocard");
  console.log(info); // const {snippet, statistics} = info;
  // const {channelTitle , title , thumbnails} = snippet;
  // return (
  //     <div>
  //         <img alt="thumbnail" src= {thumbnails.high.url} />
  //         <ul>
  //             <li>{title}</li>
  //             <li>{channelTitle}</li>
  //             <li>{statistics.viewCount}</li>
  //         </ul>
  //     </div>
  // )
};

var _default = VideoCard;
exports["default"] = _default;