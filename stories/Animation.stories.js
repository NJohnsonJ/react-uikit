"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("uikit/dist/css/uikit.min.css");
require("uikit/dist/js/uikit.min.js");
const Animation_1 = __importDefault(require("../src/Animation"));
exports.default = {
    title: "Animation",
    component: Animation_1.default
};
const Template = (args) => (jsx_runtime_1.jsx(Animation_1.default.Hover, { children: jsx_runtime_1.jsx(Animation_1.default, Object.assign({}, args, { children: jsx_runtime_1.jsx("img", { style: { width: "100%" }, src: "https://cdn.pixabay.com/photo/2020/12/14/11/18/cat-5830643_960_720.jpg" }, void 0) }), void 0) }, void 0));
exports.Example = Template.bind({});
exports.Example.args = {
    type: "fade"
};
