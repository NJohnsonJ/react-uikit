import React, {ComponentProps} from "react";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import { Story } from "@storybook/react"
import Align from "../src/Align";


export default {
    title: "Align",
    component: Align
}

const Template: Story<ComponentProps<typeof Align>> = (args) => (
    <div>
        <Align {...args}>
            <img width="450px" src="https://cdn.pixabay.com/photo/2020/12/14/11/18/cat-5830643_960_720.jpg"/>
        </Align>
        <h1>Flashy Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras sed felis eget velit aliquet sagittis id consectetur purus. Aenean pharetra magna ac placerat. Aliquam malesuada bibendum arcu vitae elementum curabitur. Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Nec ultrices dui sapien eget. Duis tristique sollicitudin nibh sit amet commodo nulla. Vitae turpis massa sed elementum tempus. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Pharetra vel turpis nunc eget lorem dolor sed. Massa enim nec dui nunc mattis enim.</p>
    </div>
)

export const Example = Template.bind({});

Example.args = {
    alignment: "left"
}