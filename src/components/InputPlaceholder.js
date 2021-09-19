import React, { Component, useRef } from "react";
import { withRouter } from "react-router-dom";
import { questionPlaceHolders } from "../config";

const InputPlaceholder = (props) => {
    const handleClick = (e) => {
        props.history.push("/ask");
    };

    const placeholder = useRef((() => {
        let r = Math.floor(Math.random() * questionPlaceHolders.length);
        return questionPlaceHolders[r];
    })());

    return props.thanks ? (
        <div className="input-placeholder thanks" onClick={handleClick}>
            <h2>Thanks for handing in your question! 👏👏👏</h2>
            <p>
                We will soon answer, and post it here (Titles may change). Click
                to ask another.
            </p>
        </div>
    ) : (
        <div className="input-placeholder" onClick={handleClick}>
            <h2>{placeholder.current}</h2>
            <p>Ask anything. In English or German. We will answer here.</p>
        </div>
    );
};

export default withRouter(InputPlaceholder);
