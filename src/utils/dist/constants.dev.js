"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YOUTUBE_SEARCHBAR = exports.YOUTUBE_SEARCH_API = exports.YOUTUBE_VIDEOS_API = exports.LIVE_CHAT_NAME = exports.LIVE_CHAT_COUNT = void 0;
var GOOGLE_API_KEY = "AIzaSyDxK5iU0jjbEh1D8KSuOLVorjj7xjmqvnA";
var LIVE_CHAT_COUNT = 25;
exports.LIVE_CHAT_COUNT = LIVE_CHAT_COUNT;
var LIVE_CHAT_NAME = "Priyanshu";
exports.LIVE_CHAT_NAME = LIVE_CHAT_NAME;
var YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;
exports.YOUTUBE_VIDEOS_API = YOUTUBE_VIDEOS_API;
var YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";
exports.YOUTUBE_SEARCH_API = YOUTUBE_SEARCH_API;
var YOUTUBE_SEARCHBAR = "https://youtube.googleapis.com/youtube/v3/search?maxResults=25&key=" + GOOGLE_API_KEY + "&q=";
exports.YOUTUBE_SEARCHBAR = YOUTUBE_SEARCHBAR;