import React from "react";
import {MDBBtn, MDBIcon} from "mdbreact";

const Button = (props) => {
    return (
        <div style={{
            ...props.style
        }}>
           <MDBBtn color={props.color} onClick={props.click} >
               <MDBIcon className="mr-2" icon={props.icon} />
               <strong>{props.value}</strong>
            </MDBBtn>
        </div>
    );
};
export default Button;