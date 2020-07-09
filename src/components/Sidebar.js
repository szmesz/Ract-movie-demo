import React, { Component } from "react";
import ResultsFilter from './sidebarcomponents/ResultsFilter';

class Sidebar extends Component {
    render() {
    return(
    <aside>
        <ResultsFilter />
    </aside>
    );}
}

export default Sidebar;