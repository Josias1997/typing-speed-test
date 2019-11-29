import React from "react";

const Card = props => {
    return (
        <div className="card mb-4 background-danger">
            <div className="card-header">
                {props.header}
            </div>
            <div className="card-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta, nisi a 
                faucibus tempor, tortor lacus porta eros, a porttitor turpis odio at nunc. 
                Praesent sit amet lobortis eros. Etiam imperdiet neque urna, elementum euismod turpis
                imperdiet sed. Proin consectetur sit amet tellus id ultricies. Praesent maximus, neque 
                vel hendrerit tristique, urna libero auctor lorem, vitae dictum tellus leo ut elit. 
                Mauris ut elit nibh. Aenean in odio porttitor, feugiat purus et, posuere nisi. 
                Quisque eu erat gravida, congue odio vitae, rutrum leo. 
            </div>
        </div>

    )
};

export default Card;