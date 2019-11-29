import React from "react";

const Table = ({frappesCorrect, frappesIncorrect, wrongWords, correctWords}) => {
    return (
        <table className="result table table-striped">
            <tbody>
            <tr>
                <td>Frappes</td>
                <td><strong>(<span className="success small-text">{frappesCorrect + " "}</span>|<span className="danger small-text">
                    {" " + frappesIncorrect}</span>) <span className="medium-text">{frappesCorrect + frappesIncorrect}</span> </strong></td>
            </tr>
            <tr>
                <td>Précision</td>
                <td><strong>{((1 - (frappesIncorrect/(frappesIncorrect + frappesCorrect))) * 100).toFixed(2)} %</strong></td>
            </tr>
            <tr>
                <td>Mots corrects</td>
                <td><strong className="success">{correctWords}</strong></td>
            </tr>
            <tr>
                <td>Mots incorrects</td>
                <td className="danger"><strong>{wrongWords}</strong></td>
            </tr>
            </tbody>
                    
        </table>
    )
};

export default Table;