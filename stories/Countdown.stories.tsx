import React, { ComponentProps, useMemo, useState } from "react";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import { Story } from "@storybook/react"
import Countdown from "../src/Countdown";
import { Button } from "../src";

export default {
    title: "Countdown",
    component: Countdown
}

export const Example: Story<ComponentProps<typeof Countdown>> = () => {
    const date = useMemo(() => {
        const d = new Date();
        d.setUTCDate(d.getUTCDate() + 3);
        return d.toLocaleDateString();
    }, []);

    return (
        <Countdown date={date}>
            <div className="uk-grid-small uk-child-width-auto uk-margin" uk-grid="">
                <Countdown.Days />
                <Countdown.Hours />
                <Countdown.Minutes />
                <Countdown.Seconds />
            </div>
        </Countdown>
    );
}

export const WithSeparators: Story<ComponentProps<typeof Countdown>> = () => {
    const date = useMemo(() => {
        const d = new Date();
        d.setUTCDate(d.getUTCDate() + 3);
        return d.toLocaleDateString();
    }, []);

    return (
        <Countdown date={date}>
            <div className="uk-grid-small uk-child-width-auto uk-margin" uk-grid="">
                <div>
                    <Countdown.Days />
                </div>
                <Countdown.Separator>:</Countdown.Separator>
                <div>
                    <Countdown.Hours />
                </div>
                <Countdown.Separator>:</Countdown.Separator>
                <div>
                    <Countdown.Minutes />
                </div>
                <Countdown.Separator>:</Countdown.Separator>
                <div>
                    <Countdown.Seconds />
                </div>
            </div>
        </Countdown>
    )
}

export const WithLabels: Story<ComponentProps<typeof Countdown>> = () => {
    const date = useMemo(() => {
        const d = new Date();
        d.setUTCDate(d.getUTCDate() + 3);
        return d.toLocaleDateString();
    }, []);

    return (
        <Countdown date={date}>
            <div className="uk-grid-small uk-child-width-auto uk-margin" uk-grid="">
                <div>
                    <Countdown.Days />
                    <div className="uk-margin-small uk-text-center">
                        <Countdown.Label>Days</Countdown.Label>
                    </div>
                </div>
                <Countdown.Separator>:</Countdown.Separator>
                <div>
                    <Countdown.Hours />
                    <div className="uk-margin-small uk-text-center">
                        <Countdown.Label>Hours</Countdown.Label>
                    </div>
                </div>
                <Countdown.Separator>:</Countdown.Separator>
                <div>
                    <Countdown.Minutes />
                    <div className="uk-margin-small uk-text-center">
                        <Countdown.Label>Minutes</Countdown.Label>
                    </div>
                </div>
                <Countdown.Separator>:</Countdown.Separator>
                <div>
                    <Countdown.Seconds />
                    <div className="uk-margin-small uk-text-center">
                        <Countdown.Label>Seconds</Countdown.Label>
                    </div>
                </div>
            </div>
        </Countdown>
    )
}

export const WithStartButton: Story<ComponentProps<typeof Countdown>> = () => {
    const [started, setStarted] = useState(false);

    const date = useMemo(() => {
        const d = new Date();
        d.setUTCDate(d.getUTCDate() + 3);
        return d.toLocaleDateString();
    }, []);

    function handleClick() {
        setStarted(prev => !prev);
    }

    return (
        <>
            <Countdown started={started} date={date}>
                <div className="uk-grid-small uk-child-width-auto uk-margin" uk-grid="">
                    <Countdown.Days />
                    <Countdown.Hours />
                    <Countdown.Minutes />
                    <Countdown.Seconds />
                </div>
            </Countdown>
            <Button onClick={handleClick}>{started ? "Stop" : "Start"}</Button>
        </>
    )
}
