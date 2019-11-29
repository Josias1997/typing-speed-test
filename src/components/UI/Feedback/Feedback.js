import React from "react";
import { getFeedBackMessage } from "../../../utilities/getData";

const Feedback = props => {
    return (
        <div className="feedback">
            {getFeedBackMessage(props.score)}
        </div>
    )
};

export default Feedback;