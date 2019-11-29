import React from "react";

const Ads = ({style}) => {
    return (
        <div style={{
            ...style,
            width: '32%',
            backgroundColor: 'blue',
            color: 'white',
            justifyContent: 'center'
        }}>
           <span className="xlarge-text">Publicité</span>
        </div>
    );
};


export default Ads;