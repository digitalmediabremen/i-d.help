import React from "react";
import StaticFilter from "components/StaticFilter.js";
import GreetingText from "components/GreetingText.js";

import { getIntroTextComponent } from "../config";

const InputView = () => {
    const IntroTextComponent = getIntroTextComponent();
    return (
        <div className="fullscreen" key="main">
            <div className="wrapper">
                <div className="main">
                    <div className="intro big">
                        {/* <div className="gif">
                            <iframe
                                src="https://giphy.com/gifs/3ornk7abZRVc4jGU12/html5"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                className="giphy-embed"
                                allowFullScreen
                            ></iframe>
                        </div> */}
                        {/* <br /> */}
                        <h1>
                            <GreetingText />
                        </h1>
                        <p>
                            <IntroTextComponent />
                        </p>
                        <br />
                        <span style={{ lineHeight: "1.5em" }}>
                            Weiter mit: <StaticFilter />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputView;
