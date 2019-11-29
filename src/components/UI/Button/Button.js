import React from "react";

const Button = (props) => {
    return (
        <div id={props.containerId} style={{
            ...props.style
        }}>
           <button id={props.id} className={props.className} onClick={props.click} >
               <i className={"fas fa-" + props.icon}></i>
               <strong className="ml-2">{props.value}</strong>
            </button>
        </div>
    );
};
export default Button;