import React from "react";

const ProgressBar = ({style}) => {
    return (
        <div className="progress md-progress">
            <div className="progress-bar" role="progressbar" style={style}></div>
        </div>
    )
};

export default ProgressBar;