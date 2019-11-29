import React from "react";
import Button from "../Button/Button";
import './TypingTest.css';


const TypingTest = ({style, finishedTest, handleTypedWord, typedWord,  
    handleKeyPress, countdown, mask, maskButtonContent, restart}) => {
    return (
        <div className="typing-test">
            <div id="input">
                <input label="Recopiez le mot ici" disabled={finishedTest} 
                onChange={handleTypedWord} value={typedWord} onKeyDown={handleKeyPress}
                />
            </div>
            <Button containerId="chronometer" 
                className={"background-primary"} icon={mask ? "eye-slash" : "stopwatch"} 
                value={mask ? "" : (countdown === 60 ? "01:00" : "00:" + (countdown >= 10 ? countdown : "0" + 
                countdown))}  id={"chrono"}
                click={() => maskButtonContent()} />
            <Button containerId="restart" click={() => restart()} 
                className={"secondary"} icon={"sync"} value={"Recommencer ?"} />
            
    </div>
    )
};

export default TypingTest;