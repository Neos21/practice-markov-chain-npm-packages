# Practice Markov Chain npm Packages

マルコフ連鎖による文章生成を実現する npm パッケージをいくつか試す。


## セットアップ

```bash
$ npm install

# markov-chain-mecab を試す場合は別途 MeCab をインストールしておく
# Mac・Linux の場合 (Homebrew)
$ brew install mecab mecab-ipadic
```

- `$ npm run gen` (`./generate-input-text.js`)
    - インプットとなるテキストファイル `./input.txt` を用意する
    - 当然 `./input.txt` の内容を自分で変更しても OK


## 比較

- `$ npm run j` (`./js-markov.js`)
    - [js-markov](https://github.com/EdThePro101/js-markov) ([npm](https://www.npmjs.com/package/js-markov))
    - 引数に渡すのが「出力する文字数」になっているので日本語の場合は変な場所で途切れる
- `$ npm run k` (`./kuromoji.js`)
    - [@hideokamoto/markov-chain-kuromoji](https://github.com/hideokamoto/markov-chain-kuromoji) ([npm](https://www.npmjs.com/package/@hideokamoto/markov-chain-kuromoji))
    - [kuromoji.js](https://github.com/takuyaa/kuromoji.js) ([npm](https://www.npmjs.com/package/kuromoji)) による分かち書き
- `$ npm run m` (`./mecab.js`)
    - [markov-chain-mecab](https://github.com/uraway/markov-chain-mecab) ([npm](https://www.npmjs.com/package/markov-chain-mecab))
    - [mecab-async](https://github.com/hecomi/node-mecab-async) ([npm](https://www.npmjs.com/package/mecab-async)) を経由して MeCab を利用し分かち書きしている
    - 渡すテキストが長すぎると文章生成に失敗する他、MeCab で正しく処理できなかった場合はエラー内容が分からず `output` という文字列が返される
- `$ npm run t` (`./tiny.js`)
    - [@hideokamoto/markov-chain-tiny](https://github.com/hideokamoto/markov-chain-tiny) ([npm](https://www.npmjs.com/package/@hideokamoto/markov-chain-tiny))
    - [TinySegmenter](https://github.com/leungwensen/tiny-segmenter) ([npm](https://www.npmjs.com/package/tiny-segmenter)) による分かち書き

それぞれのスクリプトを5回ずつ実行した結果。

```bash
# ./js-markov.js
$ npm run j
「アハハハハハハハもうたいていても好いから、この講話を真面目になったものではない。多々良三平のような
「君も乱暴狼藉の練修に余念のない男である。第一からかうのは本当の人間の命と云う事に極めたかを逐一かい
「ええこれなざあ面白いんでしまったが、まだ主人夫婦の間、嫁姑の間に截然たるかたで行くつもりに違ないで
「しかしよくありますよ」と主人は例のごとく眉の根にちょっと逃げ出すかも知れぬことをいってすましてね。
「すべての安楽は困苦を通過せざるを得ない。誰も聞きます。始めはちょっとボール即ち攻城的砲術である。鼻

#./kuromoji.js
$ npm run k
どこへ行ったり、酢に漬けて見なすったんだわ。
御嬢さまも、止せと云って出られっこないよ。
ああ奇麗に光っているはずだと気がついたと云わば吾輩猫などになる工夫はあるときは、この点に少しは淋しいだろうじゃないけども、淑徳婦人会の連発にて当分の間我慢して自己の災なるのみならずに上った女は罪な者でも利きましょう」とちゃらちゃら鳴らして見せるから安心したフロックコートを至急送れと云う句を細君に食っている小児ですらこのあき地、とか何とか威張っているものの実際はやはり実験室で珠を磨いてるのかい。
苦労と心配した覚はございませんでしたら小使でもよろしゅうございますので……」はてねと御相談なさるものですから能く聞き給え」と顔を洗いに風呂場へ行ったって食い物に不自由はした昨夜のごとく黄を含める淡灰色に漆のごときはまさしくその現象のあらわれる時代です、先生に御願があって来たら自分の顔を即席にこしらえて見るのです……つまり身振りがあまり見事に焼けてい給えと云ったって、先は商売だから恐縮しまさあ。
時に寒月はどうだい苦沙弥諸先生の御名論をやりますと云い放った。

# ./mecab.js
$ npm run m
はてな何でも同じ事を四五遍繰り返したのである。
書生がまた迎に来てくれるかと考え付いた。
そこを我慢してやって見た。
眼をねぶって運を天に任せていなかったから別段恐しいとも思わなかったから眼をねぶって運を天に任せていた。
のみならず顔の真中があまりに突起して無理やりに這って行く。

# ./tiny.js
$ npm run t
しかし今に主人はいつでも大きな奴が平生の領分は吃驚して仕事を提げている士官も申されたでしょう。
こんな大きな木板でまんまと首尾よくまた。
たしかに分配していると一般の話をしているところが総身のは、自己の鼠でも有んなさるの事だけ聞いたら大変儲かったの鼻のはどう云う感じているごとくえらくも、この春朗読会へ引越すまんからんね ］  その人に呼びつけて 。
人間である以上は君、今日のうち、惜気も挫しぐ上げたら直ぐ飛び出す用意であるものだ 君なかから少し馬鹿竹にはそうは樟脳をつづけた。
口髯をしないがある。
```


## Links

- [Neo's World](https://neos21.net/)
