import React from "react";

const Words = ({typedWord, words, currentWord, wrongWordsIndexes, correctWordsIndexes}) => {
    return (
        <div className="words">
            {
                words.map((word, index) => {
                    let classes = "word";
                    if (currentWord === index) {
                        if (typedWord !== "" && typedWord !== words[currentWord].substring(0, typedWord.length)) {
                            classes = "word active incorrect";
                        }
                        else {
                            classes = "word active";
                        }
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