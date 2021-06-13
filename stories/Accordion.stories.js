"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("uikit/dist/css/uikit.min.css");
require("uikit/dist/js/uikit.min.js");
const Accordion_1 = __importDefault(require("../src/Accordion"));
exports.default = {
    title: "Accordion",
    component: Accordion_1.default
};
const Template = (args) => (jsx_runtime_1.jsxs(Accordion_1.default, Object.assign({}, args, { children: [jsx_runtime_1.jsx(Accordion_1.default.Content, Object.assign({ title: "Item 1" }, { children: jsx_runtime_1.jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }, void 0) }), void 0),
        jsx_runtime_1.jsx(Accordion_1.default.Content, Object.assign({ title: "Item 2" }, { children: jsx_runtime_1.jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }, void 0) }), void 0),
        jsx_runtime_1.jsx(Accordion_1.default.Content, Object.assign({ title: "Item 3" }, { children: jsx_runtime_1.jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }, void 0) }), void 0)] }), void 0));
exports.Example = Template.bind({});
exports.Example.args = {
    active: 0,
    animation: true,
    collapsible: true,
    duration: 200,
    multiple: false,
    transition: "ease"
};
