import React, {ComponentProps} from "react";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import { Story } from "@storybook/react"
import Accordion from "../src/Accordion";

export default {
    title: "Accordion",
    component: Accordion
}

const Template: Story<ComponentProps<typeof Accordion>> = (args) => (
    <Accordion {...args}>
        <Accordion.Content title="Item 1">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Accordion.Content>
        <Accordion.Content title="Item 2">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Accordion.Content>
        <Accordion.Content title="Item 3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Accordion.Content>
    </Accordion>
)

export const Example = Template.bind({});

Example.args = {
    active: 1,
    collapsible: true,
    
}
