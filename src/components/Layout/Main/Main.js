import React, { useState, useRef } from "react";
import Button from "../../UI/Button/Button";
import ProgressBar from "../../UI/ProgressBar/ProgressBar";
import { getRandomWords } from "../../../utilities/getData";
import './Main.css';
import Table from "../../UI/Table/Table";

const Main = (props) => {
    const defaultDefaultSettings = useRef({
        default: 60,
        timer: 60
    });
    const [typedWord, setTypedWord] = useState('');
    const [currentWord, setCurrentWord] = useState(0);
    const [countdown, setCountDown] = useState(defaultDefaultSettings.current.timer);
    const [words, setWords] = useState(getRandomWords());
    const [frappesCorrect, setFrappesCorrect] = useState(0);
    const [frappesIncorrect, setFrappesIncorrect] = useState(0);
    const [startedTest, setStartedTest] = useState(true);
    const [finishedTest, setFinishedTest] = useState(false);
    const [correctWords, setCorrectWords] = useState(0);
    const [wrongWords, setWrongWords] = useState(0);
    const [correctWordsIndexes, setCorrectWordsIndexes] = useState([]);
    const [wrongWordsIndexes, setWrongWordsIndexes] = useState([]);
    const countdowntimer = useRef(null);
    const countWords = useRef(0);

    const handleTypedWord = (event) => {
        setTypedWord(event.target.value);
    };

    const finishTest = () => {
        window.clearInterval(countdowntimer.current);
        setStartedTest(false);
        setFinishedTest(true);
    }

    const startTest = () => {
        setStartedTest(true);
        window.clearInterval(countdowntimer.current);
        countdowntimer.current = setInterval(() => {
            defaultDefaultSettings.current.timer--;
            setCountDown(defaultDefaultSettings.current.timer);
            if(defaultDefaultSettings.current.timer === 0) {
                finishTest()
            }
        }, 1000);

    };

    const checkWord = event => {
        event.preventDefault();
        if (typedWord === words[currentWord]) {
            setCorrectWords(current => current + 1);
            setFrappesCorrect(current => current + words[currentWord].length + 1);
            setCorrectWordsIndexes(currentValues => {
                currentValues.push(currentWord);
                return currentValues;
            })
        } else {
            setWrongWords(current => current + 1);
            setFrappesIncorrect(current => current + words[currentWord].length + 1);
            setWrongWordsIndexes(currentValues => {
                currentValues.push(currentWord);
                return currentValues;
            })
        }
        setCurrentWord(current => current + 1);
        countWords.current++;
        setTypedWord("");
        if (countWords.current >= 15) {
            setWords(words.slice(countWords.current));
            countWords.current = 0;
            setCurrentWord(countWords.current);
            setCorrectWordsIndexes([]);
            setWrongWordsIndexes([]);
        }

    };

    const handleKeyPress = event => {
        console.log(defaultDefaultSettings.current);
        if(startedTest) {
            startTest();
            setStartedTest(false);
        }
        if (event.keyCode === 32) {
            checkWord(event);
        }
    };

    const restart = () => {
        clearInterval(countdowntimer.current);
        setCurrentWord(0);
        defaultDefaultSettings.current = {
            default: 60,
            timer: 60,
        }
        setCountDown(defaultDefaultSettings.current.default);
        setStartedTest(true);
        setFinishedTest(false);
        setFrappesIncorrect(0);
        setFrappesCorrect(0);
        setCorrectWords(0);
        setWrongWords(0);
        setCorrectWordsIndexes([]);
        setWrongWordsIndexes([]);
        setWords(getRandomWords());
        setTypedWord("");
        countWords.current = 0;
    };

    const style = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    };

    return (
        <div className="container">
            <div className="container">
                <div style = {{
                    ...style,
                    justifyContent: 'flex-start',
                    padding: '40px 0',
                }}>
                    <h1>Typing Test MPM</h1>
                </div>
                <ProgressBar style={{
                    width: '100%',
                    backgroundColor: "#ff4444"}} />
                <div style={{
                    width: '100%',
                    backgroundColor: "#2E2E2E",
                    color: 'white',
                    fontWeight: 'bold',
                    height: '70px',
                    borderRadius: '5px',
                    padding: '20px 0 20px 10px',
                }}>
                    Typing Test - ..........................................
                </div>
                <div className="words">
                    {
                        words.map((word, index) => {
                            let classes = "word";
                            if (currentWord === index) {
                                classes = "word active";
                            } else if (wrongWordsIndexes.indexOf(index) !== -1) {
                                classes = "word incorrect";
                            } else if (correctWordsIndexes.indexOf(index) !== -1) {
                                classes = "word correct";
                            }
                            return <div key={index} className={classes}>
                                {word}
                            </div>
                        })
                    }
                </div>
                <div style={{
                        ...style,
                        justifyContent: 'space-between',
                        width: '100%'
                    }}>
                    <div style={{
                        width: '68%'
                    }}>
                        <input label="Recopiez le mot ici" disabled={finishedTest} 
                        onChange={handleTypedWord} value={typedWord} onKeyDown={handleKeyPress}
                        />
                    </div>
                    <Button style={{width: '13%'}} 
                    color={"elegant"} icon={"clock"} 
                    value={countdown === 60 ? "01:00" : "00:" + (countdown >= 10 ? countdown : "0" + countdown)} />
                    <Button style={{width: '20%'}} click={() => restart()} color={"blue-grey"} icon={"sync"} value={"Recommencer ?"} />
                        
                </div>
                {
                    finishedTest ? <div style={{
                        ...style,
                        justifyContent: 'space-between',
                        alignItems: 'none',
                        width: '100%'
                    }}>
                        <div style={{
                            width: '65%',
                        }}>
                            <div style={{
                                backgroundColor: '#2E2E2E',
                                fontWeight: 'bold',
                                color: 'white',
                                padding: '20px 0 20px 15px',
                                borderRadius: '5px 5px 0 0'
                            }}>
                                Résultat
                            </div>
                            <div style={{
                                backgroundColor: '#ccc',
                                fontWeight: 'bold',
                                padding: '20px 0 20px 60px',
                            }}>
                                <h4>{Math.ceil((((frappesCorrect + frappesIncorrect) - (wrongWords * 6))) / (defaultDefaultSettings.current.default * 6 / 60))} MPM (mots par minute)</h4>
                                <table className="result">
                                    <tbody>
                                    <tr>
                                        <td>Frappes</td>
                                        <td>({frappesCorrect}|{frappesIncorrect}) {frappesCorrect + frappesIncorrect}</td>
                                    </tr>
                                    <tr>
                                        <td>Précision</td>
                                        <td>{((1 - (frappesIncorrect/(frappesIncorrect + frappesCorrect))) * 100).toFixed(2)} %</td>
                                    </tr>
                                    <tr>
                                        <td>Mots corrects</td>
                                        <td>{correctWords}</td>
                                    </tr>
                                    <tr>
                                        <td>Mots incorrects</td>
                                        <td style={{
                                            color: "red",
                                            fontWeight: 'bold'
                                        }}>{wrongWords}</td>
                                    </tr>
                                    </tbody>
                                    
                                </table>
                            </div>
                        </div>
                        <div style={{
                            width: '32%',
                            backgroundColor: 'blue'
                        }}>
                           Publicité
                        </div>
                    </div>
                     : null
                }
                <hr />
                {
                    !finishedTest ? <div className="mt-3" style={{
                        backgroundColor: '#ff4444',
                        color: 'white',
                        borderRadius: '5px',
                        marginBottom: '20px'
                    }}>
                        <div style={{
                            color: 'white',
                            padding: '5px 0 0 15px',
                        }}>
                            Header
                            <hr/>
                        </div>
                        <div style={{
                                padding: '20px 0 20px 15px' 
                            }}>
                            Content
                        </div>
                    </div> : <Table score={Math.ceil((((frappesCorrect + frappesIncorrect) - (wrongWords * 6))) / (defaultDefaultSettings.current.default * 6 / 60))} 
                     date={(new Date()).toDateString()}/>
                }
                
            </div>
        </div>
    )
};

export default (Main);