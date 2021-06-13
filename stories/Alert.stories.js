"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("uikit/dist/css/uikit.min.css");
require("uikit/dist/js/uikit.min.js");
const Alert_1 = __importDefault(require("../src/Alert"));
exports.default = {
    title: "Alert",
    component: Alert_1.default
};
const Template = (args) => (jsx_runtime_1.jsxs(Alert_1.default, Object.assign({}, args, { children: [jsx_runtime_1.jsx(Alert_1.default.Button, {}, void 0),
        jsx_runtime_1.jsx("h1", { children: "Example Alert" }, void 0),
        jsx_runtime_1.jsx("p", { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras sed felis eget velit aliquet sagittis id consectetur purus. Aenean pharetra magna ac placerat. Aliquam malesuada bibendum arcu vitae elementum curabitur. Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Nec ultrices dui sapien eget. Duis tristique sollicitudin nibh sit amet commodo nulla. Vitae turpis massa sed elementum tempus. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Pharetra vel turpis nunc eget lorem dolor sed. Massa enim nec dui nunc mattis enim." }, void 0)] }), void 0));
exports.Example = Template.bind({});
exports.Example.args = {
    animation: true,
    duration: 200,
    variant: undefined
};
