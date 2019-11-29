import React from "react";
import Feedback from "../Feedback/Feedback";
import Table from "../Table/Table";

const Result = ({wpm, frappesCorrect, frappesIncorrect, correctWords, wrongWords}) => {
    return (
        <div style={{
            width: '65%',
        }}>
            <div className="background-primary bold-text xlarge-text" style={{
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
                <span className="success small-text">{" "}(mots par minute)</span>
                <Table frappesCorrect={frappesCorrect} frappesIncorrect={frappesIncorrect}
                    wrongWords={wrongWords}
                    correctWords={correctWords}
                 />
                <Feedback score={wpm} />
            </div>
        </div>
    );
};

export default Result;