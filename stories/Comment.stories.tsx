import React, {ComponentProps} from "react";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import { Story } from "@storybook/react"
import Comment from "../src/Comment";


export default {
    title: "Comment",
    component: Comment
}

const Template: Story<ComponentProps<typeof Comment>> = (args) => (
    <Comment {...args}>
        <Comment.Header>
            <div className="uk-grid-medium uk-flex-middle" uk-grid>
                <div className="uk-width-auto uk-first-column">
                    <Comment.Avatar src="https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg" width="80" height="80"/>
                </div>
                <div className="uk-width-expand">
                    <Comment.Title as="h4" ukComponents={["margin-remove"]}>
                        <a className="uk-link-reset" href="#">Author</a>
                    </Comment.Title>
                    <Comment.Meta as="ul" ukComponents={["subnav", "subnav-divider", "margin-remove-top"]}>
                        <li><a href="#">12 days ago</a></li>
                        <li><a href="#">Reply</a></li>
                    </Comment.Meta>
                </div>
            </div>
        </Comment.Header>
        <Comment.Body>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </Comment.Body>
    </Comment>
)

export const Example = Template.bind({});

Example.args = {
    primary: true
}

export const CommentList = () => (
    <Comment.List>
        <li><Template primary/></li>
        <ul>
            <li><Template /></li>
            <li><Template /></li>
        </ul>
    </Comment.List>
)
