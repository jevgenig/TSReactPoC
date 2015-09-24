import * as React from "react"

export interface TimerProps {
    tickInterval: number;
}

interface ITimerState {
    ticksElapsed: number;
}
class TimerState implements ITimerState {
    ticksElapsed: number;
}

export class App2 extends React.Component<TimerProps, ITimerState> {
    private interval: number;
    state: ITimerState = {
        ticksElapsed: 0
    };

    tick() {
        this.setState({
            ticksElapsed: this.state.ticksElapsed + 1
        });
    }

    componentDidMount() {
        this.interval = setInterval(this.tick.bind(this), this.props.tickInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return React.DOM.div(null, "Ticks Elapsedd: ", this.state.ticksElapsed);
    }
}
