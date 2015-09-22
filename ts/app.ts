import * as React from "react"

export class PropsItem {
    constructor(test:String) {
        this.test = test;
    }

    test:String;
}

interface Props {
    test: PropsItem;
    test2: Array<PropsItem>;
}
export class App extends React.Component<Props, {}> {
    constructor(props:Props) {
        super(props);
    }

    render() {
        return React.createElement("div", null, this.props.test.test);
    }
}

export interface TimerProps {
    tickInterval: number;
}

interface TimerState {
    ticksElapsed: number;
}

export class App2 extends React.Component<TimerProps, TimerState> {
    private interval:number;

    constructor(props?:TimerProps, context?:any) {
        super(props, context);
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            ticksElapsed: 0
        };
    }

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
        return React.DOM.div(null, "Ticks Elapsed: ", this.state.ticksElapsed);
    }
}

//React.render(React.createElement(App, {test: propsItem, test2: [propsItem]}), document.getElementById("render-target"));

