import React, {ComponentProps} from "react";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import { Story } from "@storybook/react"
import Background from "../src/Background";


export default {
    title: "Background",
    component: Background 
}

const Template: Story<ComponentProps<typeof Background>> = (args) => (
    <div style={{height: "100%", width: "100%"}}>
        <Background {...args}>
            <p className="uk-h4">Example</p>
        </Background>
    </div>
)

export const Example = Template.bind({});

Example.args = {
    image: "https://cdn.pixabay.com/photo/2020/12/14/11/18/cat-5830643_960_720.jpg"
}
