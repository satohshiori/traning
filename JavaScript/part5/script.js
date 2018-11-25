/**
 * パート4
 * 繰り返し for文
 * 
 * ・出力にはconsole.log()を使用します。
 * ・すでに記述されている要素は変更禁止です。
 * ・一部問題で、スコープを作るために即時関数を使用します。解答はfunction内に記述してください。
 */

/**
 * 0~30のランダムな数値を返す関数
 */

function getRandomNumber() {
    const max = 30;
    return Math.floor(Math.random() * Math.floor(max + 1));
}
/**
 * 問題1
 * for文を利用して、下記の要件に適した関数を定義しましょう。
 * 
 * 名前：q1
 * 引数：なし
 * 戻り値：なし
 * 処理内容：0~6の数値を出力する。
 * 
 */
function q1() {
    for (let i = 0; i < 7; i++) {
        console.log(i);
    }
}
/**
 * 問題2
 * for文とif文を利用して、下記の要件に適した関数を定義しましょう。
 * 
 * 名前：q2
 * 引数：なし
 * 戻り値：なし
 * 処理内容：1~10の数値のうち3の倍数のみを出力しましょう。
 */
function q2() {
    for (let i = 1; i < 11; i++) {
        if ((i % 3) === 0) {
            console.log(i);
        }
    }
}
/**
 * 問題3
 * for文とif文を利用して、下記の要件に適した関数を定義しましょう。
 * 
 * 名前：q3
 * 引数：なし
 * 戻り値：なし
 * 処理内容：下記の(1),(2)の処理を10回繰り返す。ただし、(1)で20以上の数値を取得した場合、(2)の処理を行なった後すぐに、繰り返し処理を終了する。
 * (1). getRandomNumber()を利用してランダムな数値を取得する。
 * (2). (1)で取得した数値を出力する。
 */
function q3() {
    for (let i = 0; i < 10; i++) {
        const rand = getRandomNumber();
        console.log(rand);
        if (rand >= 20) {
            break;
        }
    }
}
/**
 * 問題4
 * for...of文を利用して、定義されている配列の値を全て、下記の形式で出力しましょう。
 * 「今日の天気は"配列の値"です。」
 */
(function q4() {
    const weather = ['晴れ', '曇り', '雨', '雪', '台風'];
    for (const key of weather)
        console.log(`今日の天気は${key}です。`);
}());
/**
 * 問題5
 * for...in文を利用して、定義されているオブジェクトのプロパティ名を全て出力しましょう。
 */
(function q5() {
    const os = {
        windows: 'ウィンドウズ',
        mac: 'マッキントッシュ',
        android: 'アンドロイド',
        linux: 'リナックス'
    };
    for (const key in os) {
        console.log(key);
    }
}());