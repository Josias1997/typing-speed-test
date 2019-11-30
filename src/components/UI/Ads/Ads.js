import React from "react";

const Ads = ({style}) => {
    return (
        <div style={{
            ...style,
            width: '32%',
            color: 'white',
            justifyContent: 'center'
        }}>
           <ins className="adsbygoogle"
                style={{
                    display: 'block',
                }}
                data-ad-client="ca-pub-2512331316053279"
                data-ad-slot="2519651081"
                data-ad-format="auto"
                data-full-width-responsive="true">  
            </ins>
        </div>
    );
};


export default Ads;