
var app = document.getElementById('app'); // #appを取得


// 要素を生成
function createEle (element, text, target, className) {
  var ele = document.createElement(element); // divを生成
  if (className){ // クラス名の指定があった場合
    ele.classList.add(className); // クラス名を追加
  }
  var addText = document.createTextNode(text); // テキストノード生成
  ele.appendChild(addText); // 生成した要素の中にテキストノードを追加
  target.appendChild(ele); // targetの中の最後に、生成したeleを追加
  return ele;
}

// 関数実行
var wrap = createEle('div', '', app, 'wrap'); // appの中の最後に.wrapを追加
var div = createEle('div', 'あいうえお', wrap); // wrapの中に生成した要素を追加
createEle('p', 'かきくけこ', div); // divの中に生成した要素を追加
createEle('div', 'さしはら', wrap, 'div'); // wrapの中に生成した要素を追加
