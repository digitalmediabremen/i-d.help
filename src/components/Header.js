import FilterToggle from "components/FilterToggle.js";
import React from "react";
import ReactTyped from "react-typed";
import DataStore from "utils/DataStore";
import withData from "utils/withData.js";
import { getHeaderTextComponent } from "../config";

const Header = (props) => {
    const StaticFilterToggle = withData(FilterToggle, (dataStore, props) =>
        dataStore.getStaticFilters()
    );
    // Todo: Make defaults
    const HeaderTextComponent = getHeaderTextComponent();
    return (
        <div className="intro">
            <h1 className="">
                Hej,{" "}
                <ReactTyped
                    strings={DataStore.studentNames}
                    typeSpeed={80}
                    shuffle={true}
                    loop={true}
                />
                .
            </h1>
            <p className="small">
                <HeaderTextComponent />
                <br />
                <StaticFilterToggle preToggleText="Ausgewählte Sprache:" />
            </p>
        </div>
    );
};

export default Header;
