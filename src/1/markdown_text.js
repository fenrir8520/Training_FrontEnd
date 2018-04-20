let _text = `
# JavaScriptとは
[JavaScriptの歴史をざっくりまとめたよ!](https://qiita.com/Mic-U/items/c900a6f62862954d62e0)
JavaScriptはプロトタイプベース・オブジェクト指向の言語です。
<ul>
    <li>Object</li>
    <li>Class</li>
    <li>Property</li>
    <li>Method</li>
    <li>Instance</li>
    <li>カプセル化(JavaScriptだとクロージャで対応)</li>
    <li>継承</li>
    <li>ポリモーフィズム</li>
</ul>
# JavaScriptの記法
## 変数の宣言
\`\`\`
var test1;      // 変数の宣言（再代入、再宣言可）
let test2;      // 変数の宣言（再代入可、再宣言不可）
const test3;    // 定数の宣言（再代入、再宣言不可）
\`\`\`
## 変数に代入（文字列）
\`\`\`
var str1 = 'test';      // test
var str2 = "test2";      // test2 シングルクォートとダブルクォートの違いはない
str1 = str2;    // 変数に変数の値を代入
str1 = 'test';
str1 = str1 + str2;       // test1test2 文字列の結合
str1 += str2;           // test1test2test2 ↑の省略記法
var str3 = ;      // 文字列ですよtest文字文字ですよ テンプレートリテラル
\`\`\`
## 変数に代入（数値）
\`\`\`
var num1 = 1;      // 1
var num2 = 10.5;      // 10.5
num1 = num1 + num1; // 2
num1 += num2;       // 12.5
num2 *= 2           // 21
num3 = 7 % 4        // 3
\`\`\`
## 配列
\`\`\`
var arr = [];      // []　空の配列
arr = ['a', 'b'];  // a, b
arr[0];            // 'a'
arr[1] = 'BB';     // ['a', 'BB']
\`\`\`
## オブジェクト
\`\`\`
var obj = {};      // {}　空のオブジェクト
obj.a = 'A';  // {a: 'A'}
var obj2 = {
    a: 'AA',
    b: 'BB'
};
obj2.a;         // AA
obj2['b'];      // BB
var key = 'b';
obj2[key];      // BB
\`\`\`
## 関数
\`\`\`
// 関数plusを作成
function plus () {
    return 1 + 2;
}
// 関数plusを実行
plus()  // 3
// 関数plusを作成（上記と内容的に同じ）
var plus = function () {
    return 1 + 2;
}
\`\`\`
## 変数命名規則
変数やプロパティ、メソッド名等はプロジェクトによって命名規則がある。<br>
言語によっても慣習な命名規則がある。
<ul>
    <li>キャメルケース</li>
    <li><span class="in_code">camelCaseVariable</span></li>
    <li>パスカルケースケース</li>
    <li><span class="in_code">PascalCaseVariable</span></li>
    <li>スネークケース</li>
    <li><span class="in_code">snake_case_variable</span></li>
    <li>ケバブケース</li>
    <li><span class="in_code">kbab-case-variable</span></li>
</ul>
# プログラミング基礎復習
## for文
条件式が\`false\`になるまで処理を実行し続ける
\`\`\`
for (開始前の処理; 条件式; 1ループ毎の処理) {
    処理...
}
\`\`\`
## if文
条件式が\`true\`の時、直後のスコープ内の処理が行われる<br>
条件式が\`else if\`や\`else\`で条件分岐させることができる
\`\`\`
if (条件式) {
    処理...
} else if (評価式) {
    処理...
} else {
    処理...
}
\`\`\`
## switch文
\`\`\`
switch (条件式) {
    case 定数:
        処理...
        break;
    case 定数:
        処理...
        break;
    default:
        処理...
        break;
}
\`\`\`
# EventTarget / Node / Element / Attribute / Text / Comment
## EventTarget
EventTargetとはEventを受け取りそのためのリスナーを持つオブジェクトのこと<br>
Event = clickとかmouseoverとか<br>
オブジェクト = &lt;div&gt;&lt;/div&gt;やObjectとか<br>
## Node
NodeとはEventTargetから継承されたインターフェイスで、DOMオブジェクトは
Nodeから継承されている　=&gt;　同じメソッドを持てる
## Element
一般的にHTMLElementのタグやXMLElementのタグで表せられる要素Node。
AttributeノードやTextノードを内包できる。nodeType: 1
## Attribute
要素Nodeに属性値として付けられるNode。idとかclassとかhrefとか。nodeType: 2
## Text
要素Nodeに内包できるNode。テキスト。nodeType: 3
## Comment
要素Nodeに内包できるNode。コメントアウト。nodeType: 8


HTML要素はElementノードであり、要素の属性値はAttributeノード、要素内のテキストはTextノードである。


これら全てはNodeである。
# DOMを操作する
## 要素名を指定してDOMを取得する
\`\`\`
document.getElementById('id名'); // 要素のidを指定して取得
document.getElementsByClassName('class名') // 要素のclassを指定して配列で取得
document.getElementsByTagName('tag名') // 要素のtagを指定して配列で取得
document.querySelector('セレクタ名') // セレクタ名で指定して一番最初の要素を取得
document.querySelectorAll('セレクタ名') // セレクタ名で指定して該当する要素を配列で取得
\`\`\`

## 位置関係を指定してDOMを取得する
\`\`\`
// Element系
element.parentElement // elementの親要素を取得
element.firstElementChild // elementの子要素の最初の要素を取得
element.lastElementChild // elementの子要素の最後の要素を取得
element.children // elementの全ての子要素を配列で取得
element.previousElementSibling // elementの一つ前の要素を取得
element.nextElementSibling // elementの一つ次の要素を取得
// Node系
node.parentNode // nodeの親ノードを取得
node.firstChild // nodeの子ノードの最初のノードを取得
node.lastChild // nodeの子ノードの最後のノードを取得
node.childNodes // nodeの全ての子ノードを配列で取得
node.previousSibling // nodeの一つ前のノードを取得
node.nextSibling // nodeの一つ次のノードを取得
\`\`\`
## 要素作成
\`\`\`
document.createElement('要素名') // 要素を作成
document.createTextNode('テキスト') // テキストノード作成
document.createAttributeNode('属性名') //属性ノード作成
element.appendChild('要素名') // elementの最後尾に要素を追加
element.removeChild('要素名') // element内の要素を削除
\`\`\`
## DOM属性
\`\`\`
element.id // id名
element.className // class名
element.classList.add('クラス名') // クラス名を追加
element.classList.remove('クラス名') // クラス名を削除
element.classList.contains('クラス名') // クラス名があるかBooleanで返す
element.style // style
element.style.setProperty('プロパティ名', '値') // styleを追加する
element.style.removeProperty('プロパティ名') // styleを削除する
\`\`\`
`;

export default {
    text: _text
};
