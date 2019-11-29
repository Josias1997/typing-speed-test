import React from "react";
import Feedback from "../Feedback/Feedback";

const Result = ({wpm, frappesCorrect, frappesIncorrect, correctWords, wrongWords}) => {
    return (
        <div style={{
            width: '65%',
        }}>
            <div className="background-primary xlarge-text" style={{
                padding: '20px 0 20px 15px',
                borderRadius: '5px 5px 0 0',
            }}>
                Résultat
            </div>
            <div style={{
                backgroundColor: '#e2e2e2',
                fontWeight: 'bold',
                padding: '20px 0 20px 60px',
            }}>
                <span className="success large-text">{wpm} MPM</span> 
                <span className="success small-text">(mots par minute)</span>
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
                <Feedback score={wpm} />
            </div>
        </div>
    );
}

export default Result;