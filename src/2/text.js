const _TEXT = `
# プログラミング基礎おさらい
## for
\`\`\`
for (変数宣言ブロック; 条件式; 1ループ毎の処理) {
    処理...

    continue; //次のループにスキップ
    break; //ループ処理を抜ける
}
\`\`\`

変数宣言ブロック内で\`let\`を使って宣言するとスコープ内でのみ有効な変数になる
\`\`\`
for (var i = 0; i < 10; i++) {
    console.log(i); // 0...9
}
console.log(i); // 10


for (let j = 0; j < 10; j++) {
    console.log(j); // 0...9
}
console.log(j); // not defined
\`\`\`

## while
\`\`\`
while (条件式) {
    処理...

    continue; //次のループにスキップ
    break; //ループ処理を抜ける
}
\`\`\`

ループ数が決まっていないときに使う

具体例
\`\`\`
let str = 'オラオラオラオラオラ';
while (str) {
    str = str.substring(1);
}
\`\`\`

## if
\`\`\`
if (条件式1) {
    処理1
} else if (条件式2) {
    処理2
} else {
    処理3
}
\`\`\`

1ラインでも書ける
\`\`\`
let num = 20;
if (num > 1) console.log(num);
\`\`\`

## switch
\`\`\`
switch (値) {
    case 定数1:
        処理
        break;
    case 定数2:
        処理
    case 定数3:
        処理
        break;
    default:
        処理
        break;
}
\`\`\`
値と定数は\`===\`で比較される。



組み合わせるとこんな感じ
\`\`\`
let names = [
    '1s2u4mi',
    '2na3shi5m7oto',
    '3sug4i5mot7o9',
    '4komu50ro',
    '5sa4i55t28o'
],
lower = [],
higher = [];

for (let i = 0, len = names.length, name, capture, num, str; i < len; i++) {
    num = [], str = '';
    name = names[i];

    while (name) {
        if (capture = name.match(/^[a-zA-z]/)) {
            // アルファベット一致
            str += capture[0];
            name = name.substring(capture[0].length);
            continue;
        }
        if (capture = name.match(/^[0-9]/)) {
            // 数値一致
            num.push(capture[0]);
            name = name.substring(capture[0].length);
            continue;
        }
        if (capture = name.match(/^[^a-zA-Z0-9]/)) {
            // その他
            name = name.substring(capture[0].length);
            continue;
        }
    }

    if (num.length < 4) {
        lower.push(str);
    } else {
        higher.push(str);
    }
}
\`\`\`

# 関数定義
## function
\`\`\`
function 関数名 (引数...) {
    処理...
    return 返り値;
}

関数名() // 関数実行
\`\`\`

\`\`\`
function test () {
    return 'test';
}

var test = function () {
    return 'test';
}

上記二つは同じ
\`\`\`

## returnについて
関数内で\`return\`をすると\`return\`の後に続く値を関数の実行結果として返すことができる
\`\`\`
function increment (num) {
    return num + 1;
}
increment(1) // return 2

function decrement (num) {
    if (num <= 0) return // returnをした時点で関数の処理を抜ける
    return num - 1;
}

decrement(0) // return undefined
decrement(10) // return 9
\`\`\`

## 関数のあれこれ
未定義について
\`\`\`
var str1;
console.log(str1); // undefined (値未定義)
console.log(str2); // not defined (変数未定義のエラー)

function　test (value1, value2) {
    console.log(value1);
    console.log(value2);
    console.log(value3);
}

test('test1', 'test2', 'test3'); // どうなる？
\`\`\`

関数内でcallback
\`\`\`
function hundredIncrement (num) {
    console.log(num);
    if (num === 100) return;
    hundredIncrement(++num);
}

hundredIncrement(0); // 0...100
\`\`\`

## 部分適用・カリー化
カリー化とは引数を複数取る関数を作成する際、引数一つずつに分解して適用していくことである（らしい）


例えば2つの数値を比較して2つめの値が大きい場合\`true\`、以下の場合\`false\`を返す関数を作成するとする
\`\`\`
// 部分適用
function partialComparisonSix(num) {
    return comparison(6, num);
}

// カリー化
function curryComparison (condition) {
    return function (num) {
        return condition < num;
    }
}

isOverSix = curryComparison(6);
    /* return
        function (num) {
            return 6 < num;
        }
    */
\`\`\`

## クロージャ
クロージャとは関数内で宣言した変数をメモリに保存したままにできる機能である。

その変数には外部から直接参照や代入することはできない。
これによりJavaScriptでは備わっていないカプセル化的な振る舞いができる。


\`\`\`
function myNameManager (name) {
    var _name = name;
    var _getName = function () {
        return _name;
    }
    var _setName = function (set) {
        _name = set;
    }
    return {
        get: _getName,
        set: _setName
    };
}

var nashiName = myNameManager('nashimoto');
nashiName.get(); // return "nashimoto"
nashiName.set('梨本');
nashiName.get(); // return "梨本"
\`\`\`

上記の関数で言えば、変数\`_name\`の中身は関数が終了する度に通常は破棄されるが、
クロージャを利用すれば破棄されず変数のデータを保存されたままにできる。

クロージャを利用するポイントは、関数をreturnする関数の中に、変数を宣言する感じ？

returnされる関数でその変数を参照したり、書き換えるようにする。


# 関数設計
## 設計について
** 関数の設計は非常に大切です。 **


処理を分けずダラダラ書き連ねたコードを俗にスパゲッティコードと呼ばれます。（長く複雑に絡みついているという意）

一つの関数内で全ての処理を書くとデータがどの処理でどう変わったがわかりづらく、
その処理をわかりやすく整理しようにも非常に困難。

なので関数の中でも違う文脈の処理をする必要がある場合、その処理は別の関数に分けるのが非常に得策です。

また処理を分けるにあたってその関数が汎用的に利用できるように設計するのも非常に重要です。

## 実演
\`<div id="root"></div>\`要素を元に下記のようなDOM構造をJavaScriptで構築する。
\`\`\`
<div id="root">
    <div class="wrapper">
        <div class="header">
            <p class="title">
                タイトルです
            </p>
        </div>
        <div class="body">
            <ul class="list">
                <li>list1</li>
                <li>list2</li>
                <li>list3</li>
                <li>list4</li>
            </ul>
        </div>
        <div class="footer">
            <small>&copy; 2018</small>
        </div>
    </div>
</div>
\`\`\`

** 処理の流れを考える **

まず大まかに処理の流れを考える。

上記の課題であれば\`<div class="wrapper">\`以降の要素を作成して\`<div id="root">\`にappendChildで挿入する。


** もっと詳しく噛み砕く **

要素を作成→クラス名付与→子要素・もしくはテキストを挿入→要素を作成...

↓

必要なメソッドとして、要素作成、クラス名付与、子要素・テキストを挿入する関数を繰り返し実行すればよいことに気づくはず



`

export default {
    text: _TEXT
};
