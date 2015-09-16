import * as React from "react"

export class PropsItem {
    constructor(test: String) {
        this.test = test;
    }
    test: String;
}

interface Props {
    test: PropsItem;
    test2: Array<PropsItem>;
}
export class App extends React.Component<Props, {}> {
    render() {
        return (
            <div className="container">{this.props.test.test}</div>
        );
    }
}
var propsItem = new PropsItem("works");
var b = 1;
React.render(<App test={propsItem} test2={[propsItem]}/>, document.getElementById("render-target"));
