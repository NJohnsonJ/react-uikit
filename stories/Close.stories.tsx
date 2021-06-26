import { Story } from "@storybook/react";
import React, { ComponentProps, useState } from "react";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import Card from "../src/Card";
import Close from "../src/Close";


export default {
    title: "Close",
    component: Close
}

export const Primary: Story<ComponentProps<typeof Close>> = () => (
    <Close />
)

export const CardCloser: Story<ComponentProps<typeof Close>> = () => {
    const [closed, setClosed] = useState(false);

    if (closed) {
        return (<div/>);
    }

    return (
        <Card>
            <Card.Body>
                <Close onClick={() => setClosed(true)}/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. In arcu cursus euismod quis viverra nibh cras pulvinar. Posuere lorem ipsum dolor sit amet. Magnis dis parturient montes nascetur ridiculus. Nulla pellentesque dignissim enim sit amet venenatis urna. Tortor at risus viverra adipiscing at. Et ligula ullamcorper malesuada proin. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Molestie at elementum eu facilisis sed odio morbi quis commodo. Sed risus ultricies tristique nulla. Imperdiet dui accumsan sit amet nulla facilisi. Neque laoreet suspendisse interdum consectetur libero id faucibus. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. Ut faucibus pulvinar elementum integer enim. Sed cras ornare arcu dui vivamus. Sed augue lacus viverra vitae congue eu. Malesuada fames ac turpis egestas sed tempus urna. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae.
            </p>
            </Card.Body>
        </Card>
    )
}

