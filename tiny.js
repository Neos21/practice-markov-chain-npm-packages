import fs from 'node:fs/promises';
import MarkovChain from '@hideokamoto/markov-chain-tiny';

const text = await fs.readFile('./input.txt', 'utf-8');

const markov = new MarkovChain(text);
const sentence = markov.makeSentence();
console.log(sentence);
