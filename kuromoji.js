import fs from 'node:fs/promises';
import MarkovChain from '@hideokamoto/markov-chain-kuromoji';

const text = await fs.readFile('./input.txt', 'utf-8');

const markov = new MarkovChain({ dictPath: './node_modules/kuromoji/dict' });
const sentence = await markov.start(5 /* Sentences */, text);
console.log(sentence);
