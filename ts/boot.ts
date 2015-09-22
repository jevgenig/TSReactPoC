import {App,App2,PropsItem} from "app"
import * as React from "react"

React.render(React.createElement(App2), document.getElementById("render-target"));
React.render(React.createElement(App, {test: new PropsItem("worksss")}), document.getElementById("render-target2"));