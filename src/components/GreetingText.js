import React from "react"
import Typed from "react-typed";
import { greetingFormula, greetingAnimationItems } from "../config";

const GreetingText = (props) => {
    return (
        <>
            {greetingFormula},{" "}
            <Typed
                strings={greetingAnimationItems}
                typeSpeed={80}
                shuffle={true}
                loop={true}
            />
            .
        </>
    );
};

export default GreetingText;
