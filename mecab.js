import fs from 'node:fs/promises';
import MarkovChain from 'markov-chain-mecab';

const text = await fs.readFile('./input.txt', 'utf-8');

// Mac の場合 `$ brew install mecab mecab-ipadic` をインストールしておく
//import MeCab from 'mecab-async';
//const mecab = new MeCab();
//const result = mecab.parseSync('吾輩は猫である。');
//console.log(result);

const markov = new MarkovChain(text.split('\n').splice(0, 5).join('\n'));  // テキストが長すぎるとうまく変換されないみたいなのでテキトーに削っている
const sentence = await new Promise(resolve => markov.start(5 /* Sentences */, resolve));
if(sentence === 'output') throw new Error('Something Is Wrong.');  // MeCab が正しく実行できていないと markov-chain-mecab 内で設定されている初期値 'output' がそのまま出力される
console.log(sentence);
