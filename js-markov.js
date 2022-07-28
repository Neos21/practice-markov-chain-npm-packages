import fs from 'node:fs/promises';
import Markov from 'js-markov';

const text = await fs.readFile('./input.txt', 'utf-8');

const markov = new Markov();
markov.addStates(text.split('\n'));
markov.train();
const sentence = markov.generateRandom(50 /* Character Length */);
console.log(sentence);
