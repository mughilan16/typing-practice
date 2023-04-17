import type { Word } from "../types/word";
import Sentence from "../components/Sentence";
import { useState } from "react";

export default function Home() {
  const string = "The quick brown fox jumps over the lazy dog.";
  const [currentWord, setCurrentWord] = useState(0);
  let tempWords: Array<Word> = string.split(' ').map(value => {
    return { content: value, state: 'normal' }
  });
  tempWords[currentWord].state = 'current';
  const [words, setWords] = useState(tempWords);
  const submitHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {
      if (currentWord === words.length) {
        alert("stop");
        return;
      }
      tempWords = [...words];
      console.log(`${e.currentTarget.value} ${words[currentWord].content}`)
      if (e.currentTarget.value === words[currentWord].content) {
        tempWords[currentWord].state = 'correct';
      } else {
        tempWords[currentWord].state = 'wrong';
      }
      alert("Correct")
      setCurrentWord(currentWord + 1);
      tempWords[currentWord].state = 'current';
      setWords([...tempWords])
      e.currentTarget.value = "";
    }
  }
  return (
    <>
      <div className="string-div">
        <Sentence words={words} />
        <input className="input" type="text" onKeyDown={submitHandler} /> </div>
    </>
  )
}
