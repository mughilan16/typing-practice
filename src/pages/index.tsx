import type { Word } from "../types/word";
import Sentence from "../components/Sentence";
import { useState } from "react";

export default function Home() {
  const string = "The quick brown fox jumps over the lazy dog.";
  let currentWord = 0;
  let tempWords: Array<Word> = string.split(' ').map(value => {
    return { content: value, state: 'normal' }
  });
  tempWords[currentWord].state = 'current';
  const [words, setWords] = useState(tempWords);
  console.log(words);
  const submitHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {
      tempWords = [...words];
      if (e.currentTarget.value === words[currentWord].content) {
        tempWords[currentWord].state = 'correct';
        setWords([...words,])
      } else {
        tempWords[currentWord].state = 'wrong';
      }
      currentWord++;
      tempWords[currentWord].state = 'current';
      setWords([...tempWords])
      console.log(words[currentWord].state);
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
