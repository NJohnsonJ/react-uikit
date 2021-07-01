import React, { ComponentProps, useMemo, useState } from "react";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import { Story } from "@storybook/react"
import DescriptionList from "../src/DescriptionList";

export default {
    title: "Description List",
    component: DescriptionList
}

export const Example: Story<ComponentProps<typeof DescriptionList>> = () => {
    return (
        <DescriptionList>
            <dt>Description term</dt>
            <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd>
            <dt>Description term</dt>
            <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
            <dt>Description term</dt>
            <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
        </DescriptionList >
    );
}

export const WithDividers: Story<ComponentProps<typeof DescriptionList>> = () => {
    return (
        <DescriptionList divider>
            <dt>Description term</dt>
            <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd>
            <dt>Description term</dt>
            <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
            <dt>Description term</dt>
            <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
        </DescriptionList >
    );
}