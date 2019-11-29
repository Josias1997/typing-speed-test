import React from "react";

const Words = ({words, currentWord, wrongWordsIndexes, correctWordsIndexes}) => {
    return (
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
    )
};

export default Words;