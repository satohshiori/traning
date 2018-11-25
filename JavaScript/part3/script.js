/**
 * パート3
 * 関数
 * 
 * ・出力にはconsole.log()を使用します。
 * ・すでに記述されている要素は変更禁止です。
 */


/**
 * 問題1
 * すでに記述されている関数を利用して、「Hello World!」と出力しましょう。
 */

(function hello() {
    console.log('Hello World!');
})();
/**
 * 問題2
 * すでに宣言されている関数を利用して、2480円の商品の消費税込み価格を出力しましょう。
 * 出力形式：「商品の税込価格は〇〇円です。」
 */

const calcTaxIncludePrice = (price) => {
    const taxRate = 1.08;
    return price * taxRate;
};
console.log(`商品の税込み価格は${ calcTaxIncludePrice(2480) }円です。`);
/**
 * 問題3
 * 下記の要件に適した関数を定義しましょう。
 * 
 * 名前：introduceMyself
 * 引数：なし
 * 戻り値：なし
 * 処理内容：自分の名前と年齢を出力する。形式は自由とする。
 * 
 */
function introduceMyself() {
    const text = '私の名前は佐藤栞です。年齢は22歳です。';
    console.log(text);
}
/**
 * 問題4
 * 下記の要件に適した関数を定義しましょう。
 * 
 * 名前：sendEmail
 * 引数：タイトル(title)、送信先アドレス(address)、本文(body)
 * 戻り値：なし
 * 処理内容：下記の文字列を出力する。「""」で囲まれた部分は該当する引数を利用し、囲み文字自体は出力しないこと。
 * 
 * "送信先アドレス"に以下のメールを送信しました。
 * 件名："タイトル"
 * 本文："本文"
 *
 */
function sendEmail(address, title, body) {
    console.log(`${ address }に以下のメールを送信しました。
件名:${ title }
本文:${ body }`);
}
/**
 * 問題5
 * 下記の要件に適した関数を定義しましょう。
 * ただし、アロー関数を使用すること。
 * 
 * 名前：calcTriangleArea
 * 引数：三角形の底辺(bottom)、三角形の高さ(height)
 * 戻り値：三角形の面積
 * 処理内容：引数の底辺と高さを元に、三角形の面積を求める。求めた面積を返す。
 * 
 */
const calcTriangleArea = (bottom, height) => {
    return bottom * height / 2;
};