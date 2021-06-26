import React, {ComponentProps} from "react";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import { Story } from "@storybook/react"
import Column from "../src/Column";


export default {
    title: "Column",
    component: Column
}

const Template: Story<ComponentProps<typeof Column>> = (args) => (
    <Column {...args}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. In arcu cursus euismod quis viverra nibh cras pulvinar. Posuere lorem ipsum dolor sit amet. </p>
        <p>Magnis dis parturient montes nascetur ridiculus. Nulla pellentesque dignissim enim sit amet venenatis urna. Tortor at risus viverra adipiscing at. </p>
        <p>Et ligula ullamcorper malesuada proin. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Molestie at elementum eu facilisis sed odio morbi quis commodo. Sed risus ultricies tristique nulla. </p>
        <p>Ut faucibus pulvinar elementum integer enim. Sed cras ornare arcu dui vivamus. Sed augue lacus viverra vitae congue eu. Malesuada fames ac turpis egestas sed tempus urna. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae.</p>
    </Column>
)

export const Example = Template.bind({});

Example.args = {
    count: "2",
    divider: false
}

export const WithDivider: Story<ComponentProps<typeof Column>> = () => (
    <Template count="2" divider/>
)

export const WithSpan: Story<ComponentProps<typeof Column>> = () => (
    <Column>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. In arcu cursus euismod quis viverra nibh cras pulvinar. Posuere lorem ipsum dolor sit amet. </p>
        <p>Magnis dis parturient montes nascetur ridiculus. Nulla pellentesque dignissim enim sit amet venenatis urna. Tortor at risus viverra adipiscing at. </p>
        <Column.Span>
            <blockquote>
                <p>“Give all the power to the many, they will oppress the few. Give all the power to the few, they will oppress the many.”</p>
                <footer>Alexander Hamilton</footer>
                </blockquote>
        </Column.Span>
        <p>Et ligula ullamcorper malesuada proin. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Molestie at elementum eu facilisis sed odio morbi quis commodo. Sed risus ultricies tristique nulla. </p>
        <p>Ut faucibus pulvinar elementum integer enim. Sed cras ornare arcu dui vivamus. Sed augue lacus viverra vitae congue eu. Malesuada fames ac turpis egestas sed tempus urna. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae.</p>
    </Column>
)
