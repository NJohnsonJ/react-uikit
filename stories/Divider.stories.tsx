import { Story } from "@storybook/react";
import React, { ComponentProps } from "react";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import { Divider } from "../src";

export default {
    title: "Divider",
    component: Divider 
}

export const Default: Story<ComponentProps<typeof Divider>> = () => {
    return (
        <Divider />
    );
}

export const Icon: Story<ComponentProps<typeof Divider>> = () => {
    return (
        <Divider type="icon"/>
    );
}

export const Small: Story<ComponentProps<typeof Divider>> = () => {
    return (
        <Divider type="small"/>
    );
}

export const Vertical: Story<ComponentProps<typeof Divider>> = () => {
    return (
        <Divider type="vertical"/>
    );
}
