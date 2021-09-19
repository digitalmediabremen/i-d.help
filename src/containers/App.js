import React, { Component, useEffect } from "react";

import HomeView from "containers/HomeView.js";
import InputView from "containers/InputView.js";
import PreSelectionView from "containers/PreSelectionView.js";
import QuestionView from "containers/QuestionView.js";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import "./App.css";
import withSelectedFilters from "utils/withSelectedFilters.js";
import { getCSSVariableOverwrites } from "../config";

const App = (props) => {
    useLayoutEffect(() => {
        const overwrites = getCSSVariableOverwrites();
        if (!overwrites) return;
        const cssOverwritesString = Object.entries(getCSSVariableOverwrites())
            ?.map(([key, value]) => `${key}: ${value}`)
            .join("; ");
        document.body.style = cssOverwritesString;
    }, []);
    return (
        <BrowserRouter
            onUpdate={() => {
                window.scrollTo(0, 0);
                console.log("sdsd");
            }}
        >
            <div className="App">
                <Switch>
                    {props.getSelectedStaticFilter() == undefined && (
                        <Route path="/" component={PreSelectionView} />
                    )}
                    <Route exact path="/" component={HomeView} />
                    <Route path="/ask" component={InputView} />
                    {/* <Route path='/thanks' render={(props) => <HomeView {...props} thanks={true} />} /> */}
                    <Route path="/thanks">
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { thanks: true },
                            }}
                        />
                    </Route>
                    <Route path="/:number" component={QuestionView} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default withSelectedFilters(App);
