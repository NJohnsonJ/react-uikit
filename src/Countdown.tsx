import React, { ElementType, useEffect, useRef, useMemo } from "react";
import { className, PolymorphicComponentProps, toClassName } from "./util";
import UIkit from "uikit";
import CountdownLabel from "./CoundownLabel";
import CountdownSeparator from "./CountdownSeparator";

export interface CountdownProps {
    started?: boolean;
    date: string;
}

export const prefix = "countdown";

const Countdown: React.FC<CountdownProps> = (props) => {
    const {
        started = true,
        date,
        children,
        ...other
    } = props;

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref?.current) {
            return;
        }

        if (started) {
            UIkit.countdown(ref.current).start();
        } else {
            UIkit.countdown(ref.current).stop();
        }
    }, [props.started]);

    const config = JSON.stringify({ date });

    return (
        <div {...other} ref={ref} uk-countdown={config}>
            {children}
        </div>
    )
}

type ComponentType = "days" | "hours" | "minutes" | "seconds";

const CountdownComponent = (name: ComponentType) => <C extends ElementType = "div">(props: PolymorphicComponentProps<C, unknown>) => {

    const {
        as: Component = "div",
        children,
        ref,
        ...other
    } = props;

    const classes = toClassName([
        className(prefix, "number"),
        className(prefix, name)
    ]);

    return (
        <Component {...other} ref={ref} className={classes}>
            {children}
        </Component>
    )
}

export default Object.assign(Countdown, {
    Days: CountdownComponent("days"),
    Hours: CountdownComponent("hours"),
    Minutes: CountdownComponent("minutes"),
    Seconds: CountdownComponent("seconds"),
    Separator: CountdownSeparator,
    Label: CountdownLabel
});
