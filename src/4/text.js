const _TEXT = `
# thisについて
## メソッドから
メソッド内の\`this\`はメソッドを実行しているオブジェクトを指す
\`\`\`
var method = {
    value: 1000,
    getValue: function () {
        console.log(this.value); //1000
        console.log(this); // {value: 1000,getValue: function(){...}}
    }
}
\`\`\`

## コンストラクタから
コンストラクタ内の\`this\`はコンストラクタから生成したインスタンスを指す
\`\`\`
var Constructor = function () {
    this.value = 1000;
    this.getValue = function () {
        console.log(this.value);
        console.log(this);
        /* このfunction内のthisはメソッド定義の中のthisなのでメソッド呼び出しになる */
    }
    console.log(this);
}
Constructor.prototype.getValue2 = function () {
    console.log(this);
    /* ここもメソッド定義なのでこのthisはメソッド呼び出しになる */
}

var cons = new Constructor(); // {value: 1000,getValue: function(){...}}
\`\`\`

## 関数から
関数やグローバルでの\`this\`はグローバルを指す。

混同しやすいが、メソッドやコンストラクタ内で定義した関数もこのパターンにあたる。

またグローバルで\`var\`で変数を定義すると\`global\`オブジェクトのプロパティに変数を定義することになる
\`\`\`
var test = 'TEST';
console.log(this.test) // TEST
function func () {
    console.log(this.test)
}
func() // TEST

var obj = {
    test: 'test',
    func1: function () {
        console.log(this.test);
    },
    func2: function () {
        function func () {
            console.log(this.test);
        }
        func();
    },
    func3: function () {
        setTimeout(function () {
            console.log(this.test);
        }, 1000);
    },
    func4: function () {
        this.func1();
    }
}

obj.func1() //
obj.func2() //
obj.func3() //
obj.func4() //
\`\`\`

## call, apply, bindでthis束縛
\`function\`オブジェクトの\`call\`,
\`apply\`,
\`bind\`メソッドを利用することで\`this\`で参照するオブジェクトを指定することができる

また第二引数以降に値を渡すと関数に引数を渡せる。
\`\`\`
function max () {
    return Math.max(this.n1, this.n2);
}
var obj = {
    n1: 10,
    n2: 20,
    ns: [10, 20, 5],
    f1: functon () {
        return max.call(this);
    },
    f2: function () {
        return max.apply(this);
    },
    f3: max.bind(this)
}
\`\`\`

## eventListenerから
\`eventListener\`に登録した関数内の\`this\`はeventtargetを指す
\`\`\`
<div id="div">
    text
</div>
\`\`\`
\`\`\`
var target = document.getElementById('div');
target.addEventListener('click', function () {
    console.log(this); // <div id="div">text</div>
});
\`\`\`

# オブジェクトでDOMを管理
DOMを管理できる簡単なインスタンスを作ってみましょう

作るものとしては\`input\`タグに文字を入力したら\`p\`タグ内に入力した文字が出力されるもの

出来上がるDOMはこんなイメージ
\`\`\`
<div id="root">
    <p>{{ inputに入力した文字 }}</p>
    <input type="text">
</div>
\`\`\`

\`<div id="root">\`に対してインスタンスをappendChildする感じで作ります
\`\`\`
function Test () {
    this.text = 'aa';
    this.DOM = {
        p: document.createElement('p'),
        input: document.createElement('input')
    };
    this.init();
}

Test.prototype.init = function () {
    var target = document.getElementById('root');
    this.DOM.input.addEventListener('input', this.handleInput.bind(this), false);
    target.appendChild(this.DOM.p);
    target.appendChild(this.DOM.input);
}
Test.prototype.handleInput = function (e) {
    this.DOM.p.innerText = e.target.value;
}
\`\`\`


`

export default {
    text: _TEXT
};
