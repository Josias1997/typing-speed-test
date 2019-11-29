import React from "react";

const Box = ({title}) => {
    return (
        <div className="background-primary" style={{
            width: '100%',
            height: '70px',
            borderRadius: '2px',
            padding: '20px 0 20px 10px',
        }}>
            {title}
        </div>
    )
}

export default Box;