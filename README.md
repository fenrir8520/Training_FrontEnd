# フロントエンド勉強会
## 最初に
### この勉強会について
この勉強会はフロントエンドの要、JavaScriptをオブジェクト指向的視点から学習していき、
さらにはモダンなJSフレームワークや開発環境を知っていくことを目的とした勉強会です。<br>
ここでは取り扱わない技術（HTML5やCSS3）なども開発していく上でとても重要になるので
講義中に気になったワードなんかは合わせて自分で学習してください。<br>
量は割と多いですが、**あくまで** ここでは基礎的なところしか教えることができません。
この勉強会を軸に、さらに自分で学習していくベースを築き上げていくことを頑張ってください。<br>
特にこの業界では教えられたことしか勉強しないとか意味ないのでね。

### 使用するテキスト
HTMLファイルのテキストを使用します(JS部分はVue.jsを使用)。<br>
各ステップのindex.htmlをそのまま開いてもほぼ表示されないので後述のセットアップを実施してください。<br>
対応ブラウザはChromeのみ。

### 準備
テキストを見るにはwebpack-dev-serverでローカルサーバを立て、メモリ内にビルド環境を構築する必要があります。以下の手順を実施してください。<br>既に自分で実施している手順があればスキップしてください。
1. 最新のdevelopブランチをプル。
2. Node.jsバージョン管理ソフトをインストール。Macなら[nodebrew](https://github.com/hokaccha/nodebrew),Windowsなら[nodist](https://github.com/marcelklehr/nodist)をインストール
3. CUIで当ファイルのディレクトリまで移動しコマンド実行(yarnの方が早い)<br>
`npm i`または`yarn`

### ローカルサーバ起動
CUIでコマンド実行(ブラウザが勝手に立ち上がります)<br>
`npm run dev`または`yarn run dev`

## 勉強会の進め方
基本的にテキストをベースに進めていきます。途中メモを取る必要もあると思うので随時取ってください。<br>
また途中で課題を出すこともあるのでその場合は自分でjsファイルを読作成しindex.htmlに読み込むなりして取り組んでください。<br>
CodePen等ブラウザ系IDEだとエラーがconsoleに表示されなかったので**非推奨**です。