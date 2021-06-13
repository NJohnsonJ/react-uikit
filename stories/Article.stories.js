"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("uikit/dist/css/uikit.min.css");
require("uikit/dist/js/uikit.min.js");
const Article_1 = __importDefault(require("../src/Article"));
exports.default = {
    title: "Article",
    component: Article_1.default
};
const Template = (args) => (jsx_runtime_1.jsxs(Article_1.default, { children: [jsx_runtime_1.jsx(Article_1.default.Title, { children: jsx_runtime_1.jsx("a", Object.assign({ className: "uk-link-reset", href: "" }, { children: "Heading" }), void 0) }, void 0),
        jsx_runtime_1.jsxs(Article_1.default.Meta, { children: ["Written by ", jsx_runtime_1.jsx("a", Object.assign({ href: "#" }, { children: "Super User" }), void 0), " on 12 April 2012. Posted in ", jsx_runtime_1.jsx("a", Object.assign({ href: "#" }, { children: "Blog" }), void 0)] }, void 0),
        jsx_runtime_1.jsx("p", Object.assign({ className: "uk-text-lead" }, { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." }), void 0),
        jsx_runtime_1.jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }, void 0),
        jsx_runtime_1.jsxs("div", Object.assign({ className: "uk-grid-small uk-child-width-auto", "uk-grid": true }, { children: [jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsx("a", Object.assign({ className: "uk-button uk-button-text", href: "#" }, { children: "Read more" }), void 0) }, void 0),
                jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsx("a", Object.assign({ className: "uk-button uk-button-text", href: "#" }, { children: "5 Comments" }), void 0) }, void 0)] }), void 0)] }, void 0));
exports.Example = Template.bind({});
