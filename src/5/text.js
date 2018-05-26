const _TEXT = `
# APIとAjax
## API
APIとはApplication Programing Interfaceの略で広い意味を持ち、
アプリケーションやシステムの機能を共有できるインターフェースである。

プログラミング言語やライブラリにおけるAPIとは機能を使用できるようにした
サブルーチン・データ構造・オブジェクトクラスの仕様であり仕様書と共に公開されている。（JSだとHistory APIとか）

Webシステム開発で呼ばれるAPIとは一般的にWeb APIを指す。このテキスト内ではこれを取り扱います。

## Web API
HTTPプロトコルを用いてネットワーク越しに呼び出すアプリケーション・システム間のインターフェースである。

RESTという形式を使うことが多く、近年ではWeb API = RESTみたいな感じである。
やりとりできるデータはJSONかXMLだが、JSONが多くを占めている。
URI指定で使用でき、HTTPメソッドにも対応していて処理結果がHTTPステータスコードで返されるものである。
詳しくは
[REST入門 基礎知識](https://qiita.com/TakahiRoyte/items/949f4e88caecb02119aa)

## Ajax
AjaxとはAjax通信のこと。Asynchronous JavaScript+XMLの略。

具体的にはJavaScriptのXMLHttpRequest APIを使用した非同期通信のことである。
XMLHttpRequestとあるが、JSONも扱うことができる。



つまり、Webにおいてアプリケーション間や、アプリケーション−サーバ間でデータをやりとりするのにはWeb APIを使用し、
その中でもJavaScriptで非同期的に通信するものをAjaxと呼ぶ。

# 実践
## APIサーバを起動
rootディレクトリにAPIサーバを作成したのでTerminalでそれを起動します。

\`\`\`
Training_FrontEnd $ node express/app.js
\`\`\`

`

export default {
    text: _TEXT
};
