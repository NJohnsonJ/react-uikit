"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("uikit/dist/css/uikit.min.css");
require("uikit/dist/js/uikit.min.js");
const Background_1 = __importDefault(require("../src/Background"));
exports.default = {
    title: "Background",
    component: Background_1.default
};
const Template = (args) => (jsx_runtime_1.jsx("div", Object.assign({ style: { height: "100%", width: "100%" } }, { children: jsx_runtime_1.jsx(Background_1.default, Object.assign({}, args, { children: jsx_runtime_1.jsx("p", Object.assign({ className: "uk-h4" }, { children: "Example" }), void 0) }), void 0) }), void 0));
exports.Example = Template.bind({});
exports.Example.args = {
    image: "https://cdn.pixabay.com/photo/2020/12/14/11/18/cat-5830643_960_720.jpg"
};
