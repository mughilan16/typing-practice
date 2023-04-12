export type Word = {
  content: string,
  state: 'correct' | 'wrong' | 'current' | 'normal',
}

export type WordState = 'correct' | 'wrong' | 'current' | 'normal';
