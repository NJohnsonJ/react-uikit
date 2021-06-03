import React, {ComponentProps} from "react";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import { Story } from "@storybook/react"
import Animation from "../src/Animation";


export default {
    title: "Animation",
    component: Animation
}

const Template: Story<ComponentProps<typeof Animation>> = (args) => (
    <Animation.Hover>
        <Animation {...args}>
            <img src="https://cdn.pixabay.com/photo/2020/12/14/11/18/cat-5830643_960_720.jpg"/>
        </Animation>
    </Animation.Hover>
)

export const Example = Template.bind({});

Example.args = {
    type: "fade"
}
