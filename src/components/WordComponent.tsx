import type { Word } from "../types/word"

type WordComponentProps = {
  word: Word
}

const WordComponent = (props: WordComponentProps) => {
  const styles = `
  .correct {
      background-color: green;
    }
  .wrong {
      background-color: red;
    }
  .current {
      background-color: yellow;
  }
  .normal {
    background-color: black;
    }
  `
  return <>
    <style>{styles}</style>
    <span className={props.word.state}>{props.word.content} </span>
  </>
}

export default WordComponent;
