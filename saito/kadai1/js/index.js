
var app = document.getElementById('app'); // #appを取得

var wrap = document.createElement('div'); // .wrapの元となるdivを生成
wrap.classList.add('wrap'); // クラス名を追加

var div = document.createElement('div'); // divを生成
var aiueo = document.createTextNode('あいうえお'); // テキストノード生成
div.appendChild(aiueo); // 生成したdivの中にテキストノード（あいうえお）を追加
wrap.appendChild(div); // wrapの中の最後に、生成したdivを追加

var p = document.createElement('p'); // pを生成
var kakikukeko = document.createTextNode('かきくけこ'); // テキストノード生成
p.appendChild(kakikukeko); // 生成したpの中にテキストノード（かきくけこ）を追加
div.appendChild(p); // divの中の最後に、生成したpを追加

var classDiv = document.createElement('div'); // divを生成
classDiv.classList.add('div'); // クラス名を追加
var sashihara = document.createTextNode('さしはら'); // テキストノード生成
classDiv.appendChild(sashihara); // 生成したpの中にテキストノード（さしはら）を追加
wrap.appendChild(classDiv); // wrapの中の最後に、生成したclassDivを追加


app.appendChild(wrap); // #appの中の最後に.wrapを追加