import fs from 'node:fs/promises';
import axios from 'axios';
import iconv from 'iconv';
import jsdom from 'jsdom';

// 取得する URL : 夏目漱石 吾輩は猫である (青空文庫は Shift-JIS・CRLF エンコーディングの HTML なので取得時に Iconv で UTF-8 に変換する)
const url = 'https://www.aozora.gr.jp/cards/000148/files/789_14547.html';
// 出力するファイル名
const outputFilePath = './input.txt';

// インターネット上から HTML を取得する
const response = await axios.get(url, {
  responseType: 'arraybuffer',
  transformResponse: [data => new iconv.Iconv('SHIFT_JIS', 'UTF-8//TRANSLIT//IGNORE').convert(data).toString()]  // Shift-JIS To UTF-8
});
const inputHtml = response.data;
// JSDOM で処理する
const { document } = new jsdom.JSDOM(inputHtml).window;

// 本文部分を取り出す
const main = document.querySelector('.main_text');
// ルビは親文字のみ残す : innerText は存在しない模様
main.querySelectorAll('ruby').forEach(ruby => { ruby.outerHTML = ruby.querySelector('rb').textContent; });
// 中見出しを消す
main.querySelectorAll('.naka-midashi').forEach(nakaMidashi => { nakaMidashi.outerHTML = ''; });
// その他本文の文字を修正する
const outputText = document.querySelector('.main_text').textContent
  .replace((/\t/g)    , '')    // HTML のインデントに使われたタブ文字を消す
  .replace((/^　/gm)  , '')    // 行頭の全角スペースを消す
  .replace((/\n{2,}/g), '\n')  // 2つ以上連続する改行を1つにし空行を消す
  .replace((/^\n/)    , '');   // 1行目の空行を消す

await fs.writeFile(outputFilePath, outputText, 'utf-8');  // 末尾に改行を付けて書き出す
