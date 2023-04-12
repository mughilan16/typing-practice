import WordComponent from "./WordComponent"
import type { Word } from "../types/word"

type SentenceComponentProps = {
  words: Array<Word>
}
const Sentence = (props: SentenceComponentProps): JSX.Element => {
  return <>
    {props.words.map((word, index) => <WordComponent word={word} key={index} />)}
  </>
}
export default Sentence;
