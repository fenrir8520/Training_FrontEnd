const _TEXT = `
# データ型について
## JacaScriptとは
JavaScriptは全てにおいてオブジェクトである。
全てオブジェクトであるが、データ型としてはプリミティブとオブジェクトの二つに大きく分類される。

## プリミティブ型
String: 文字列
\`\`\`
var str1 = 'string';
var str2 = '文字列型';
var str3 = '20';
var str4 = str1 + str2 + str3;
var str5 = str4 + 20;
var str6 = '';
console.log(str5); // ??
\`\`\`

Number: 数値
\`\`\`
var num1 = 1;
var num2 = 2 * 10;
var num3 = 0;
var num4 = -35;
var num5 = num1 + num2 + num3 + num4;
var num6 = num5 + '20';
console.log(num6); // ??
\`\`\`

Boolean: 真偽値
\`\`\`
var bool1 = true;
var bool2 = false;
var bool3 = 1 == '1';
var bool4 = 1 === '1';

var num = 0,
    str = '';

var bool5 = num == str;
var bool6 = num === str;
var bool7 = num == false;
var bool8 = num === false;
\`\`\`

Undifined: undefined(未定義)
\`\`\`
var und1 = undefined;
var und2;
var und3 = void 0;
\`\`\`

null: null(データが無いという値)


Symbol: ユニークなデータ
\`\`\`
var symbol1 = Symbol();
var symbol2 = Symbol(300);
var symbol3 = Symbol();
symbol1 == symbol3;
\`\`\`

## オブジェクト型
Object: プリミティブ型以外の値
\`\`\`
var obj1 = {
    name: 'NAME'
};
var arr1 = [
    'hoge', 'fuga'
];
\`\`\`

## function型

# 各データ型のオブジェクト
## String
\`length\` 文字数

\`concat\` 文字を結合する

\`trim\` 先頭と末尾の半角スペースを削除する

\`replace\` 文字列を置換する

\`split\` 引数に渡した文字で区切って配列にする

\`\`\`
var str1 = 'STRING';
var str2 = ' string ';
var str3 = 'www/creative/resource/insitute.com'
str1.length // 6
str1.concat(str2) // 'STRING string '
str2.trim() // 'string'
str1.replace('STR', 'aaa') // 'aaaING'
str3.split('/') // ['www', 'creative', 'resource', 'institute.com']
\`\`\`
## Array
\`length\` 要素数

\`join\` 引数に渡した文字列を区切りに全要素を結合する

\`indexOf\` 引数に渡した要素があるインデックスを返し、なければ-1を返す

\`shift\` 配列の先頭の要素を削除する

\`unshift\` 配列の先頭に要素を追加する

\`pop\` 配列の末尾の要素を削除する

\`push\` 配列の末尾に要素を追加する

\`splice\` 配列の指定の箇所を削除したり、要素を挿入する

\`forEach\` 配列の数だけ引数に渡した関数を実行する

\`map\` 配列の数だけ引数に渡した関数を実行し、関数からreturnされた値の配列を新たに作成する

\`filter\` 配列の数だけ引数に渡した関数を実行し、関数からreturnされた値がtrueのときの値のみの配列を作成する

\`includes\` (es2015)

\`Array.isArray\` 配列かどうか
\`\`\`
var arr = ['A', 'B', 'C'];
arr.length // 3
arr.join('') // 'ABC'
arr.indexOf('B') // 1
arr.shift() // arr = ['B', 'C']
arr.unshift('AA') // arr = ['AA', 'B', 'C']
arr.pop() // arr = ['AA', 'B']
arr.push('CC') // arr = ['AA', 'B', 'CC']
arr.splice(0, 2) // arr = ['CC']
arr.splice(0, 0, 'AA', 'BBB') // arr = ['AA', 'BBB', 'CC']

arr.forEach(function (item) {
    console.log(item);
});

arr.map(function (item) {
    return '$' + item;
});

arr.filter(function (item) {
    return item.length < 3;
});

Array.isArray(arr) // true
\`\`\`

## Object
\`Object.keys\` オブジェクトのkeyを配列で取り出す
\`\`\`
var obj = {
    a: 'AAA',
    b: 'BBB',
    c: {
        CC: 'CCC'
    }
};
\`\`\`


# オブジェクト
## 定義方法
\`\`\`
var obj1 = {
    a: 'AAA',
    b: 'BBB'
};
obj1.c = 'CCC';
obj1['d'] = 'DDD'
console.log(obj1); // {a: 'AAA', b: 'BBB', c: 'CCC', d: 'DDD'}

var obj2 = {};
obj2.obj = obj1;
console.log(obj2);
// {
//     obj: {a: 'AAA', b: 'BBB', c: 'CCC', d: 'DDD'}
// }

var obj3 = {
    o: 'OOO'
    func: function () {
        console.log(obj3.o);
    }
};
obj3.func() // 'OOO'
\`\`\`

## this
メソッド内でのthisは基本的にメソッドを実行しているオブジェクトを指す
\`\`\`
var obj = {
    str: 'STR',
    callStr: function () {
        console.log(this.str);
    }
}
obj.callStr(); // 'STR'
\`\`\`

## JSON
JavaScript Object Notationの略

他プログラミング言語のデータと親和性を取るため開発された
** 文字列型 **
のデータ構造。ほとんどのプログラミング言語がこの形式をサポートしており、
各言語でJSONを対応した形に変換する関数を持っている。

JavaScriptだとJSONオブジェクトが持つメソッドがそれにあたる。

格納できるデータは文字列、数値、真偽値、配列、連想配列。

\`\`\`
var obj = {
    name: '名前',
    num: 100,
    bool: true,
    arr: ['配列', 配列],
    obj: {
        a: 'A',
        b: 'B'
    }
};

var json = JSON.stringify(obj);
/*
'{
    "name": "名前", // 連想配列の場合keyはダブルクォートで囲う
    "num": 100,
    "bool": true,
    "arr": ["配列", "配列"],
    "obj": {
        "a": "A",
        "b": "B"
    }　
}'
*/
\`\`\`

# コンストラクタ
## コンストラクタとは
コンストラクタとは、他言語ではクラスにあたるものである。

インスタンス（オブジェクト）の元となるコンストラクタを定義し、\`new\`演算子を用いてコンストラクタからインスタンスを作成する。
これがオブジェクト指向のプログラミングである。

## コンストラクタ定義
コンストラクタは関数を定義する方法とほぼ同じ形で定義する。この際、コンストラクタ名（関数名）はパスカルケースで定義するのが慣例。
\`\`\`
/* TestConstructorという名前のコンストラクタを定義 */
function TestConstructor (name) {
    this.name = name;
    this.callName = function () {
        console.log(this.name);
    };
}
TestConstructor.prototype.changeName = function (str) {
    this.name = str;
};

/* newでインスタンス化したものを変数testに格納 */
var test = new TestConstructor('安倍晋三');
/*
    {
        name: '安倍晋三',
        callName: function () {
            console.log(this.name);
        },
        changeName: function (str) {
            this.name = str;
        }
    }
*/
\`\`\`

## thisとprototype
コンストラクタ内の\`this\`はインスタンス化したオブジェクトを指す

そして\`this\`の値はインスタンス毎に固有で定義される値である。

それに対し\`prototype\`はコンストラクタが持っている値で、
インスタンスからはコンストラクタのprototypeを参照することができるようになる

（そのコンストラクタで作成されたインスタンスでは全て共通）

\`\`\`
function Test () {
    this.unique_value = 'Unique';
}
Test.prototype.proto_value = 'Prototype';

var test1 = new Test();
var test2 = new Test();

console.log('test1 : ' + test1.unique_value + ' | test2 : ' + test2.unique_value); //'test1 : Unique | test2 : Unique'
console.log('test1 : ' + test1.proto_value + ' | test2 : ' + test2.proto_value); //'test1 : Prototype | test2 : Prototype'


test1.unique_value = 'test1_Unique';
Test.prototype.proto_value = 'PROTOTYPE';
console.log('test1 : ' + test1.unique_value + ' | test2 : ' + test2.unique_value); //'test1 : test1_Unique | test2 : Unique'
console.log('test1 : ' + test1.proto_value + ' | test2 : ' + test2.proto_value); //'test1 : PROTOTYPE | test2 : PROTOTYPE'


test1.proto_value = 'test1_Prototype';
console.log('test1 : ' + test1.proto_value + ' | test2 : ' + test2.proto_value); //'test1 : test1_Prototype | test2 : PROTOTYPE'


Test.prototype.proto_value = '__PROTOTYPE__';
console.log('test1 : ' + test1.proto_value + ' | test2 : ' + test2.proto_value); //'test1 : test1_Prototype | test2 : __PROTOTYPE__'



\`\`\`

## なぜコンストラクタを使うのか
なぜオブジェクトをコピーしていくのではなくコンストラクタからインスタンスを作成するのでしょうか

それはJavaScriptにおいてオブジェクトのコピーはシャローコピーだからである。
\`\`\`
var obj1 = {
    a: 10,
    b: 20
};

var obj2 = obj1;

obj2.a = 5;
console.log(obj1) // {a: 5, b: 20}
\`\`\`

またインスタンスに引数を渡せたり、インスタンス化時にメソッドを実行できる、protorype、コンストラクタの継承等
非常に有用な機能が使える

\`\`\`
function Parent (name) {
    this.name = name;
    this.type = 'parent';
    this.callType(); //インスタンス化時に実行される
}
Parent.prototype.getName = function () {
    return this.name;
}
Parent.prototype.callType = function () {
    console.log(this.type);
}

function Children (name) {
    Parent.call(this, name);
}
Children.prototype = Object.create(Parent.prototype);
// ParentのコンストラクタをChildrenに継承する。
\`\`\`
`

export default {
    text: _TEXT
};
