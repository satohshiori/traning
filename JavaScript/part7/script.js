/**
 * パート7
 * イベント
 * 
 * ・すでに記述されている要素は変更禁止です。
 * ・HTML・CSSは変更禁止です。
 * ・スコープを作るために即時関数を使用します。解答はfunction内に記述してください。
 */


/**
 * 問題1
 * "#switchInput" 要素の状態に合わせて、"#switchCondition"が下記の状態になる様にしましょう。
 * ・チェックされている：テキストを「ON」に変更し、クラス ".on" を追加する。
 * ・チェックされてない：テキストを「OFF」に変更し、クラス ".on" を削除する。
 */

(function q1() {
    const checkBox = document.getElementById('switchInput');
    const checkText = document.getElementById('switchCondition');
    const style = 'on';
    checkBox.onclick = function () {
        if (checkBox.checked) {
            checkText.innerHTML = 'ON';
            checkText.classList.add(style);
        } else {
            checkText.innerHTML = 'OFF';
            checkText.classList.remove(style);
        }
    };
}());

/**
 * 問題2
 * キーボードの「1」「2」「3」キーが押下された際に、対応する数字が表示された".num-box"要素が下記の動きをするようにしましょう。
 * 
 * ・".bg-num"が適用されていない場合：".bg-num"を適用する
 * ・".bg-num"が適用されている場合：".bg-num"を取り除く
 */

(function q2() {
    const box = document.getElementsByClassName('col num-box');
    const bgColor = 'bg-num';
    document.onkeydown = function () {
        switch (event.key) {
            case '1':
                box[0].classList.toggle(bgColor);
                break;
            case '2':
                box[1].classList.toggle(bgColor);
                break;
            case '3':
                box[2].classList.toggle(bgColor);
                break;
        }
    };
}());

/**
 * 問題3
 * "#btnGood" が押下される度に、".count"が１ずつ増える様にしましょう。
 */

(function q3() {
    let count = 0;
    document.getElementById('btnGood').onclick = function () {
        const num = document.getElementsByClassName('count pl-3');
        num[0].innerText = ++count;
    };
}());