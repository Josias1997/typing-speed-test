import React from "react";
import { MDBDataTable } from "mdbreact";
import { results } from "../../../utilities/getData";

const Table = props => {
    const data = results;
    data.rows.push({
        score: props.score,
        date: props.date 
    });

    return (
        <>
            <h2>Derniers scores</h2>
            <MDBDataTable  striped
            bordered
            hover
            data={data} />
        </>
    )
};

export default Table;