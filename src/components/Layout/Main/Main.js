import React, { useState, useRef, useEffect } from "react";
import ProgressBar from "../../UI/ProgressBar/ProgressBar";
import { getRandomWords } from "../../../utilities/getData";
import './Main.css';
import Card from "../../UI/Card/Card";
import Words from "../../UI/Words/Words";
import Box from "../../UI/Box/Box";
import Result from "../../UI/Result/Result";
import Ads from "../../UI/Ads/Ads";
import TypingTest from "../../UI/TypingTest/TypingTest";

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
    const [mask, setMask] = useState(false);
    const countdowntimer = useRef(null);
    const countWords = useRef(0);
    const wordsRef = useRef([]);

    const handleTypedWord = (event) => {
        const value = event.target.value;
        if (value !== " ") {
            setTypedWord(value);
        }
        
    };

    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    useEffect(() => {
        wordsRef.current = wordsRef.current.slice(0, words.length);
    }, [words]);

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
        if (typedWord.trim() === words[currentWord]) {
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
        if (wordsRef.current[countWords.current].offsetTop > wordsRef.current[countWords.current - 1].offsetTop) {
            setWords(words.slice(countWords.current));
            countWords.current = 0;
            setCurrentWord(countWords.current);
            setCorrectWordsIndexes([]);
            setWrongWordsIndexes([]);
        }
    };

    const handleKeyPress = event => {
        if(startedTest) {
            startTest();
            setStartedTest(false);
        }
        if (event.keyCode === 32) {
            if(typedWord !== "") {
                checkWord(event);
            }
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

    const maskButtonContent = () => {
        setMask(currentValue => !currentValue);
    };

    const style = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    };

    const wpm = Math.ceil((((frappesCorrect + frappesIncorrect) - (wrongWords * 6))) / (defaultDefaultSettings.current.default * 6 / 60));

    return (
            <div className="container">
                <div style = {{
                    ...style,
                    justifyContent: 'flex-start',
                    padding: '40px 0',
                }}>
                    <h1>Typing Test MPM</h1>
                </div>
                <ProgressBar />
                <Box title={"Typing Test: Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                <Words typedWord={typedWord} words={words} currentWord={currentWord} 
                    wrongWordsIndexes={wrongWordsIndexes} 
                    correctWordsIndexes={correctWordsIndexes}
                    refs={wordsRef}
                />
                <TypingTest style={style}
                    finishedTest={finishedTest}
                    typedWord={typedWord}
                    countdown={countdown}
                    handleTypedWord={handleTypedWord}
                    handleKeyPress={handleKeyPress}
                    mask={mask}
                    restart={restart}
                    maskButtonContent={maskButtonContent}
                />
                {
                    finishedTest ? <div style={{
                        ...style,
                        justifyContent: 'space-between',
                        alignItems: 'none',
                        width: '100%',
                        marginTop: '10px',
                    }}>
                        <Result wpm={wpm} frappesCorrect={frappesCorrect}
                            frappesIncorrect={frappesIncorrect}
                            correctWords={correctWords}
                            wrongWords={wrongWords}
                        />
                        <Ads style={style} />
                    </div>
                     : null
                }
                <hr />
                <ins className="adsbygoogle"
                    style={{
                        display: 'block',
                    }}
                    data-ad-client="ca-pub-2512331316053279"
                    data-ad-slot="8702036196"
                    data-ad-format="auto"
                    data-full-width-responsive="true">
                </ins>
    
                <Card header={"Qu'est ce que le score MPM ?"} />
            </div>
    )
};

export default (Main);