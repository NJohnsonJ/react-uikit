import React, {ComponentProps, useEffect, useState} from "react";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import { Story } from "@storybook/react"
import Alert from "../src/Alert";

export default {
    title: "Alert",
    component: Alert
}

const Template: Story<ComponentProps<typeof Alert>> = (args) => (
    <Alert {...args}>
        <Alert.Button />
        <h1>Example Alert</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras sed felis eget velit aliquet sagittis id consectetur purus. Aenean pharetra magna ac placerat. Aliquam malesuada bibendum arcu vitae elementum curabitur. Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Nec ultrices dui sapien eget. Duis tristique sollicitudin nibh sit amet commodo nulla. Vitae turpis massa sed elementum tempus. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Pharetra vel turpis nunc eget lorem dolor sed. Massa enim nec dui nunc mattis enim.</p>
    </Alert>
)

export const Example = Template.bind({});

Example.args = {
    animation: true,
    duration: 200,
    variant: undefined
}

